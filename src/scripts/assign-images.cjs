const fs = require('fs');
const path = require('path');

// Mapeo de productos a imágenes específicas
const imageMap = {
  // Productos de Concreto
  '1': '/Concreto/a10.png', // Sardinel A10
  '2': '/Concreto/a40.png', // Sardinel A40 
  'ss': '/Concreto/A-100.png', // Sardinel A100
  '4': '/Concreto/a86.png', // Sardinel A86
  '5': '/Concreto/a85.png', // Sardinel A85
  '6': '/Concreto/a105.png', // Sardinel A105
  '7': '/Concreto/a80.png', // Bordillo A80
  '8': '/Concreto/a81.png', // Bordillo A81
  '9': '/Concreto/b20.png', // Bordillos B-20; B-30
  '10': '/Concreto/Bloque liso.png', // Bloque Liso 14
  '11': '/Concreto/bloque abujardado.png', // Bloque Abujardado
  '12': '/Concreto/adoquin.png', // Adoquín en concreto
  '13': '/Concreto/loseta.png', // Loseta en concreto
  
  // Productos de Acueducto y Alcantarillado
  '14': '/Alcantarillado/tapa.png', // Tapa de inspección 0.70
  '15': '/Alcantarillado/cargue.png', // Cargue en concreto 1.70
  '16': '/Alcantarillado/conodereduccion.png', // Cono de reducción
  '17': '/Alcantarillado/seccioncilindirica.png', // Sección cilindrica
  '18': '/Alcantarillado/anillo.png', // Anillo de reducción
  '19': '/Alcantarillado/sl100.png', // Rejilla SL-100
  '20': '/Alcantarillado/marco rejilla.png', // Marco de rejilla en concreto
  '21': '/Alcantarillado/rejilla vehicular.png', // Rejilla vehicular en concreto
  '22': '/Alcantarillado/rejilla peatonal.png', // Rejilla peatonal en concreto
  
  // Productos de Arcilla
  '23': '/Arcilla/bloque arcilla.png', // Bloque Número 4
  '24': '/Arcilla/ladrillorecocido.png', // Ladrillo recocido
  '25': '/Arcilla/adoquin arcilla.png', // Adoquín en arcilla
  '26': '/Arcilla/bloquelon.png', // Bloquelón
  
  // Mobiliario Urbano
  '27': '/Urbanismo/m30.png', // Banca M30
  '28': '/Urbanismo/m40.png', // Banca Modular M40
  '29': '/Urbanismo/m60.png', // Bolardo M60
  '30': '/Urbanismo/cerramiento.png', // Postes para cerramiento
};

function assignImages() {
  try {
    // Leer el archivo de productos
    const productsFilePath = path.join(process.cwd(), '..', '..', 'src', 'data', 'products.ts');
    const productsContent = fs.readFileSync(productsFilePath, 'utf-8');
    
    // Extraer los productos del archivo
    const productsMatch = productsContent.match(/export const products: Product\[\] = (\[[\s\S]*?\]);/);
    if (!productsMatch) {
      throw new Error('No se pudo encontrar la definición de productos');
    }
    
    const productsString = productsMatch[1];
    const products = eval(`(${productsString})`);
    
    console.log(`🔍 Asignando imágenes para ${products.length} productos...\n`);
    
    let assignedCount = 0;
    let notFoundCount = 0;
    
    // Procesar cada producto
    const updatedProducts = products.map(product => {
      const imageMapping = imageMap[product.id];
      
      if (imageMapping) {
        // Verificar que la imagen existe
        const imagePath = path.join(process.cwd(), '..', '..', 'public', imageMapping);
        if (fs.existsSync(imagePath)) {
          console.log(`✅ ${product.name} -> ${imageMapping}`);
          assignedCount++;
          return {
            ...product,
            image: imageMapping
          };
        } else {
          console.log(`⚠️  ${product.name} -> ${imageMapping} (archivo no encontrado)`);
          notFoundCount++;
          return product;
        }
      } else {
        console.log(`❌ ${product.name} (ID: ${product.id}) -> No hay mapeo definido`);
        notFoundCount++;
        return product;
      }
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

export const products: Product[] = ${JSON.stringify(updatedProducts, null, 2)};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured === true);
};

export const getCategories = (): string[] => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories.sort();
};
`;
    
    // Escribir el archivo actualizado
    fs.writeFileSync(productsFilePath, newProductsContent);
    
    console.log(`\\n📊 Resumen de asignación de imágenes:`);
    console.log(`   ✅ Imágenes asignadas: ${assignedCount}`);
    console.log(`   ❌ Sin asignar: ${notFoundCount}`);
    console.log(`   📁 Total procesados: ${products.length}`);
    
    if (assignedCount > 0) {
      console.log(`\\n🎉 Imágenes asignadas exitosamente!`);
    }
    
  } catch (error) {
    console.error('❌ Error al asignar imágenes:', error);
    throw error;
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  assignImages();
}

module.exports = { assignImages };
