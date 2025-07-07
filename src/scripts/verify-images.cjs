const fs = require('fs');
const path = require('path');

function verifyImages() {
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
    
    console.log(`🔍 Verificando imágenes para ${products.length} productos...\n`);
    
    const publicDir = path.join(process.cwd(), '..', '..', 'public');
    const productImages = fs.readdirSync(publicDir).filter(file => 
      file.toLowerCase().includes('product') && 
      (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png') || file.endsWith('.webp'))
    );
    
    console.log(`📁 Imágenes disponibles en /public:`);
    productImages.forEach(img => console.log(`   - ${img}`));
    console.log();
    
    const productsWithUnsplashImages = [];
    const productsWithLocalImages = [];
    
    products.forEach(product => {
      if (product.image.includes('unsplash.com') || product.image.includes('https://')) {
        productsWithUnsplashImages.push(product);
      } else {
        productsWithLocalImages.push(product);
      }
    });
    
    console.log(`📊 Resumen de imágenes:`);
    console.log(`   🌐 Productos con imágenes externas: ${productsWithUnsplashImages.length}`);
    console.log(`   🏠 Productos con imágenes locales: ${productsWithLocalImages.length}`);
    console.log();
    
    if (productsWithUnsplashImages.length > 0) {
      console.log(`⚠️  Productos que necesitan imágenes locales:`);
      productsWithUnsplashImages.forEach(product => {
        console.log(`   - ${product.name} (ID: ${product.id}) - ${product.category}`);
      });
      console.log();
      console.log(`💡 Para asignar imágenes locales, ejecuta:`);
      console.log(`   node assign-images.cjs`);
    } else {
      console.log(`✅ Todos los productos tienen imágenes locales asignadas`);
    }
    
  } catch (error) {
    console.error('❌ Error al verificar imágenes:', error);
    throw error;
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  verifyImages();
}

module.exports = { verifyImages };
