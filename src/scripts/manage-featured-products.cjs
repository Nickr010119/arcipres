const fs = require('fs');
const path = require('path');

// Función para formatear precios en pesos colombianos
function formatPrice(price) {
  return `$${price.toLocaleString('es-CO')} COP`;
}

function getFeaturedProducts() {
  try {
    const productsFilePath = path.join(process.cwd(), '..', '..', 'src', 'data', 'products.ts');
    const productsContent = fs.readFileSync(productsFilePath, 'utf-8');
    
    const productsMatch = productsContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
    if (!productsMatch) {
      throw new Error('No se pudo encontrar la definición de productos');
    }
    
    const productsString = productsMatch[1];
    const products = eval(`(${productsString})`);
    
    return products.filter(product => product.featured === true);
  } catch (error) {
    console.error('❌ Error al obtener productos destacados:', error);
    return [];
  }
}

function getAllProducts() {
  try {
    const productsFilePath = path.join(process.cwd(), '..', '..', 'src', 'data', 'products.ts');
    const productsContent = fs.readFileSync(productsFilePath, 'utf-8');
    
    const productsMatch = productsContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
    if (!productsMatch) {
      throw new Error('No se pudo encontrar la definición de productos');
    }
    
    const productsString = productsMatch[1];
    return eval(`(${productsString})`);
  } catch (error) {
    console.error('❌ Error al obtener productos:', error);
    return [];
  }
}

function setFeaturedProducts(productIds) {
  try {
    const productsFilePath = path.join(process.cwd(), '..', '..', 'src', 'data', 'products.ts');
    const productsContent = fs.readFileSync(productsFilePath, 'utf-8');
    
    const productsMatch = productsContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
    if (!productsMatch) {
      throw new Error('No se pudo encontrar la definición de productos');
    }
    
    const productsString = productsMatch[1];
    const products = eval(`(${productsString})`);
    
    // Remover featured de todos los productos
    const updatedProducts = products.map(product => {
      const { featured, ...productWithoutFeatured } = product;
      return productWithoutFeatured;
    });
    
    // Marcar como destacados los productos especificados
    const finalProducts = updatedProducts.map(product => {
      if (productIds.includes(product.id)) {
        return { ...product, featured: true };
      }
      return product;
    });
    
    // Generar el nuevo contenido del archivo
    const newProductsContent = `export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  features: string[];
  specs: {
    [key: string]: string;
  };
  featured?: boolean;
};

export const products: Product[] = ${JSON.stringify(finalProducts, null, 2)};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured === true);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getCategories = (): string[] => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories.sort();
};
`;
    
    fs.writeFileSync(productsFilePath, newProductsContent);
    
    // Mostrar los productos marcados como destacados
    const featuredProducts = finalProducts.filter(p => productIds.includes(p.id));
    const productNames = featuredProducts.map(p => p.name).join(', ');
    
    console.log(`✅ Productos marcados como destacados: ${productNames}`);
    console.log(`✅ Archivo de productos actualizado exitosamente`);
    
  } catch (error) {
    console.error('❌ Error al actualizar productos destacados:', error);
    throw error;
  }
}

function addFeaturedProduct(productId) {
  const current = getFeaturedProducts();
  const currentIds = current.map(p => p.id);
  
  if (!currentIds.includes(productId)) {
    const newIds = [...currentIds, productId];
    setFeaturedProducts(newIds);
  } else {
    console.log(`⚠️  El producto ${productId} ya está marcado como destacado`);
  }
}

function removeFeaturedProduct(productId) {
  const current = getFeaturedProducts();
  const newIds = current.map(p => p.id).filter(id => id !== productId);
  setFeaturedProducts(newIds);
}

function listFeaturedProducts() {
  const featured = getFeaturedProducts();
  
  if (featured.length === 0) {
    console.log('📋 No hay productos destacados actualmente');
    return;
  }
  
  console.log(`📋 Productos destacados actuales (${featured.length}):`);
  featured.forEach((product, index) => {
    console.log(`   ${index + 1}. ${product.name} - ${formatPrice(product.price)} (${product.category})`);
  });
}

function listAllProducts() {
  const products = getAllProducts();
  
  console.log(`📦 Todos los productos disponibles (${products.length}):`);
  products.forEach((product, index) => {
    const featuredMark = product.featured ? '⭐' : '  ';
    console.log(`   ${featuredMark} ${product.id}. ${product.name} - ${formatPrice(product.price)} (${product.category})`);
  });
}

function showHelp() {
  console.log('\\n🌟 GESTOR DE PRODUCTOS DESTACADOS');
  console.log('=================================');
  console.log('Comandos disponibles:');
  console.log('  list              - Listar productos destacados actuales');
  console.log('  all               - Ver todos los productos disponibles');
  console.log('  add <id>          - Marcar producto como destacado');
  console.log('  remove <id>       - Quitar producto de destacados');
  console.log('  set <id1,id2,...> - Establecer productos destacados específicos');
  console.log('Ejemplos:');
  console.log('  node manage-featured-products.cjs list');
  console.log('  node manage-featured-products.cjs add 5');
  console.log('  node manage-featured-products.cjs remove 1');
  console.log('  node manage-featured-products.cjs set 1,14,23,28');
}

// Procesamiento de argumentos de línea de comandos
const args = process.argv.slice(2);

if (args.length === 0) {
  showHelp();
  process.exit(0);
}

const command = args[0].toLowerCase();

try {
  switch (command) {
    case 'list':
      listFeaturedProducts();
      break;
      
    case 'all':
      listAllProducts();
      break;
      
    case 'add':
      if (args.length < 2) {
        console.log('❌ Error: Debe especificar el ID del producto');
        console.log('Ejemplo: node manage-featured-products.cjs add 5');
        process.exit(1);
      }
      addFeaturedProduct(args[1]);
      break;
      
    case 'remove':
      if (args.length < 2) {
        console.log('❌ Error: Debe especificar el ID del producto');
        console.log('Ejemplo: node manage-featured-products.cjs remove 5');
        process.exit(1);
      }
      removeFeaturedProduct(args[1]);
      break;
      
    case 'set':
      if (args.length < 2) {
        console.log('❌ Error: Debe especificar los IDs de los productos');
        console.log('Ejemplo: node manage-featured-products.cjs set 1,5,10');
        process.exit(1);
      }
      const productIds = args[1].split(',').map(id => id.trim());
      setFeaturedProducts(productIds);
      break;
      
    case 'help':
    case '--help':
    case '-h':
      showHelp();
      break;
      
    default:
      console.log(`❌ Comando desconocido: ${command}`);
      showHelp();
      process.exit(1);
  }
} catch (error) {
  console.error('❌ Error al ejecutar el comando:', error.message);
  process.exit(1);
}
