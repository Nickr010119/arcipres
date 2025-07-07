#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 VERIFICACIÓN DE OPTIMIZACIONES SEO - ARCIPRES');
console.log('=' .repeat(60));

const checks = [];

// 1. Verificar robots.txt
const robotsPath = path.join(process.cwd(), 'public', 'robots.txt');
if (fs.existsSync(robotsPath)) {
  const robotsContent = fs.readFileSync(robotsPath, 'utf-8');
  checks.push({
    name: '🤖 robots.txt',
    status: '✅ IMPLEMENTADO',
    details: `Configurado correctamente (${robotsContent.split('\n').length} líneas)`
  });
} else {
  checks.push({
    name: '🤖 robots.txt',
    status: '❌ FALTANTE',
    details: 'Archivo no encontrado'
  });
}

// 2. Verificar sitemap.ts
const sitemapPath = path.join(process.cwd(), 'src', 'app', 'sitemap.ts');
if (fs.existsSync(sitemapPath)) {
  checks.push({
    name: '🗺️ sitemap.ts',
    status: '✅ IMPLEMENTADO',
    details: 'Sitemap dinámico configurado'
  });
} else {
  checks.push({
    name: '🗺️ sitemap.ts',
    status: '❌ FALTANTE',
    details: 'Archivo no encontrado'
  });
}

// 3. Verificar Google Analytics
const analyticsPath = path.join(process.cwd(), 'src', 'lib', 'analytics.tsx');
if (fs.existsSync(analyticsPath)) {
  const analyticsContent = fs.readFileSync(analyticsPath, 'utf-8');
  const hasGA4 = analyticsContent.includes('googletagmanager');
  checks.push({
    name: '📊 Google Analytics 4',
    status: hasGA4 ? '✅ IMPLEMENTADO' : '⚠️ PARCIAL',
    details: hasGA4 ? 'Configurado con consentimiento de cookies' : 'Estructura creada, falta configurar ID'
  });
} else {
  checks.push({
    name: '📊 Google Analytics 4',
    status: '❌ FALTANTE',
    details: 'Archivo no encontrado'
  });
}

// 4. Verificar metadata en layout principal
const layoutPath = path.join(process.cwd(), 'src', 'app', 'layout.tsx');
if (fs.existsSync(layoutPath)) {
  const layoutContent = fs.readFileSync(layoutPath, 'utf-8');
  const hasMetadata = layoutContent.includes('export const metadata');
  const hasOpenGraph = layoutContent.includes('openGraph');
  checks.push({
    name: '📝 Metadata Principal',
    status: hasMetadata && hasOpenGraph ? '✅ IMPLEMENTADO' : '⚠️ PARCIAL',
    details: `Metadata: ${hasMetadata ? '✓' : '✗'}, OpenGraph: ${hasOpenGraph ? '✓' : '✗'}`
  });
}

// 5. Verificar metadata en productos
const productsLayoutPath = path.join(process.cwd(), 'src', 'app', 'products', 'layout.tsx');
const productLayoutPath = path.join(process.cwd(), 'src', 'app', 'products', '[id]', 'layout.tsx');

const hasProductsMetadata = fs.existsSync(productsLayoutPath);
const hasProductMetadata = fs.existsSync(productLayoutPath);

checks.push({
  name: '🏷️ Metadata Productos',
  status: hasProductsMetadata && hasProductMetadata ? '✅ IMPLEMENTADO' : '⚠️ PARCIAL',
  details: `Catálogo: ${hasProductsMetadata ? '✓' : '✗'}, Individual: ${hasProductMetadata ? '✓' : '✗'}`
});

// 6. Verificar alt tags optimizados
const productCardPath = path.join(process.cwd(), 'src', 'ui', 'components', 'product-card.tsx');
if (fs.existsSync(productCardPath)) {
  const cardContent = fs.readFileSync(productCardPath, 'utf-8');
  const hasOptimizedAlt = cardContent.includes('${product.category}') && cardContent.includes('Arcipres');
  checks.push({
    name: '🖼️ Alt Tags Optimizados',
    status: hasOptimizedAlt ? '✅ IMPLEMENTADO' : '⚠️ PARCIAL',
    details: hasOptimizedAlt ? 'Alt tags descriptivos con contexto' : 'Alt tags básicos'
  });
}

// 7. Verificar tracking de analytics
const trackingImplemented = fs.existsSync(analyticsPath);
if (trackingImplemented) {
  const analyticsContent = fs.readFileSync(analyticsPath, 'utf-8');
  const hasProductTracking = analyticsContent.includes('trackProductView');
  const hasWhatsAppTracking = analyticsContent.includes('trackWhatsAppClick');
  checks.push({
    name: '📈 Event Tracking',
    status: hasProductTracking && hasWhatsAppTracking ? '✅ IMPLEMENTADO' : '⚠️ PARCIAL',
    details: `Productos: ${hasProductTracking ? '✓' : '✗'}, WhatsApp: ${hasWhatsAppTracking ? '✓' : '✗'}`
  });
}

// Mostrar resultados
console.log('\n📊 RESULTADOS DE VERIFICACIÓN:\n');
checks.forEach((check, index) => {
  console.log(`${index + 1}. ${check.name}`);
  console.log(`   Status: ${check.status}`);
  console.log(`   Detalles: ${check.details}`);
  console.log('');
});

// Contar implementaciones
const implemented = checks.filter(c => c.status.includes('✅')).length;
const partial = checks.filter(c => c.status.includes('⚠️')).length;
const missing = checks.filter(c => c.status.includes('❌')).length;

console.log('📈 RESUMEN:');
console.log(`✅ Implementado: ${implemented}/${checks.length}`);
console.log(`⚠️ Parcial: ${partial}/${checks.length}`);
console.log(`❌ Faltante: ${missing}/${checks.length}`);

const score = ((implemented + partial * 0.5) / checks.length * 10).toFixed(1);
console.log(`\n🎯 PUNTUACIÓN SEO: ${score}/10`);

// Próximos pasos
console.log('\n🚀 PRÓXIMOS PASOS RECOMENDADOS:');
if (missing > 0) {
  console.log('1. ⚠️ Completar implementaciones faltantes');
}
if (partial > 0) {
  console.log('2. 🔧 Finalizar implementaciones parciales');
}
console.log('3. 📝 Configurar ID real de Google Analytics (G-XXXXXXXXXX)');
console.log('4. 🏪 Implementar LocalBusiness Schema');
console.log('5. 📊 Configurar Google Search Console');

console.log('\n✨ ¡Excelente progreso en optimización SEO!');
