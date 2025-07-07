#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Función para limpiar el precio (remover $ y comas, convertir a número)
function cleanPrice(priceString) {
  if (!priceString || priceString.trim() === '') return 0;
  
  // Remover $, espacios y comas
  const cleaned = priceString.replace(/[$,\s]/g, '');
  const price = parseFloat(cleaned);
  return isNaN(price) ? 0 : price;
}

// Función para procesar las características desde el CSV
function parseFeatures(featuresString) {
  if (!featuresString) return [];
  
  // Dividir por saltos de línea y limpiar
  const features = featuresString.split('\n')
    .map(feature => feature.trim())
    .filter(feature => feature.length > 0);
  
  return features;
}

// Función para procesar las especificaciones desde el CSV
function parseSpecs(specsString) {
  if (!specsString) return {};
  
  const specs = {};
  
  // Dividir por saltos de línea y procesar cada línea
  const lines = specsString.split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);
  
  lines.forEach(line => {
    if (line.includes(':')) {
      const [key, value] = line.split(':').map(s => s.trim());
      if (key && value) {
        // Limpiar el key para usarlo como propiedad
        const cleanKey = key.toLowerCase()
          .replace(/[^a-zA-Z0-9]/g, '')
          .replace(/\s+/g, '');
        specs[cleanKey] = value;
      }
    }
  });
  
  return specs;
}

// Función para parsear CSV manualmente (manejando saltos de línea dentro de comillas)
function parseCustomCSV(csvContent) {
  const lines = csvContent.split('\n');
  const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
  
  const data = [];
  let currentRow = '';
  let insideQuotes = false;
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Contar comillas para determinar si estamos dentro de un campo con comillas
    const quoteCount = (line.match(/"/g) || []).length;
    
    if (currentRow) {
      currentRow += '\n' + line;
    } else {
      currentRow = line;
    }
    
    // Si el número de comillas es par, hemos cerrado todos los campos
    const totalQuotes = (currentRow.match(/"/g) || []).length;
    if (totalQuotes % 2 === 0) {
      // Procesar la fila completa
      const values = [];
      let currentValue = '';
      let inQuotes = false;
      
      for (let j = 0; j < currentRow.length; j++) {
        const char = currentRow[j];
        
        if (char === '"') {
          inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
          values.push(currentValue.trim());
          currentValue = '';
        } else {
          currentValue += char;
        }
      }
      values.push(currentValue.trim()); // Último valor
      
      // Crear objeto con los headers
      if (values.length > 0 && values[0]) { // Solo si hay datos
        const row = {};
        headers.forEach((header, index) => {
          row[header] = values[index] || '';
        });
        data.push(row);
      }
      
      currentRow = '';
    }
  }
  
  return data;
}

// Función principal para importar productos desde CSV
function importProductsFromCustomCSV(csvFilePath) {
  try {
    // Leer el archivo CSV
    const csvContent = fs.readFileSync(csvFilePath, 'utf-8');
    
    // Parsear el CSV
    const csvData = parseCustomCSV(csvContent);
    
    console.log(`📋 Datos procesados del CSV: ${csvData.length} productos`);
    
    // Procesar los datos del CSV
    const processedProducts = csvData.map(csvProduct => {
      const product = {
        id: csvProduct.id || csvProduct.ID || '',
        name: csvProduct.name || csvProduct.Name || '',
        price: cleanPrice(csvProduct.price || csvProduct.Price || '0'),
        image: csvProduct.image || "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        category: csvProduct.category || csvProduct.Category || 'General',
        description: csvProduct.description || csvProduct.Description || '',
        features: parseFeatures(csvProduct.features || csvProduct.Features || ''),
        specs: parseSpecs(csvProduct.specs_general || csvProduct.Specs || '')
      };
      
      return product;
    }).filter(product => product.id && product.name); // Filtrar productos válidos
    
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
};

export const products: Product[] = ${JSON.stringify(processedProducts, null, 2)};

// Helper functions for working with products
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => 
    product.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedProducts = (count: number = 4): Product[] => {
  return products.slice(0, count);
};

export const searchProducts = (query: string): Product[] => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery)
  );
};

export const getCategories = (): string[] => {
  const categories = [...new Set(products.map(product => product.category))];
  return categories.sort();
};
`;
    
    // Escribir el archivo actualizado
    const productsFilePath = path.join(process.cwd(), '..', '..', 'src', 'data', 'products.ts');
    fs.writeFileSync(productsFilePath, newProductsContent);
    
    console.log(`✅ Productos importados exitosamente desde ${csvFilePath}`);
    console.log(`📊 Total de productos procesados: ${processedProducts.length}`);
    
    // Mostrar algunos productos para verificar
    console.log('\n🔍 Muestra de productos importados:');
    processedProducts.slice(0, 3).forEach((product, index) => {
      console.log(`${index + 1}. ${product.name} - $${product.price} (${product.category})`);
    });
    
  } catch (error) {
    console.error('❌ Error al importar productos desde CSV:', error);
    throw error;
  }
}

// Ejecutar desde línea de comandos
const csvFilePath = process.argv[2] || 'ejemplo-productos.csv';

if (!fs.existsSync(csvFilePath)) {
  console.error(`❌ El archivo CSV no existe: ${csvFilePath}`);
  process.exit(1);
}

importProductsFromCustomCSV(csvFilePath);
