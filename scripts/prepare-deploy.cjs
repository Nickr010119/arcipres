#!/usr/bin/env node

console.log('🚀 PREPARANDO ARCIPRES PARA GITHUB + VERCEL');
console.log('=' .repeat(50));

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Función para ejecutar comandos
function runCommand(command, description) {
  console.log(`\n📋 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit', cwd: process.cwd() });
    console.log(`✅ ${description} completado`);
    return true;
  } catch (error) {
    console.log(`❌ Error en: ${description}`);
    console.log(error.message);
    return false;
  }
}

// Verificaciones pre-deploy
console.log('\n🔍 VERIFICACIONES PRE-DEPLOY:');

// 1. Verificar que estamos en el directorio correcto
const packageJsonPath = path.join(process.cwd(), 'package.json');
if (!fs.existsSync(packageJsonPath)) {
  console.log('❌ No se encontró package.json. Asegúrate de estar en el directorio del proyecto.');
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));
if (packageJson.name !== 'arcipres') {
  console.log('❌ El package.json no corresponde al proyecto Arcipres.');
  process.exit(1);
}

console.log('✅ Directorio del proyecto verificado');

// 2. Verificar archivos importantes
const requiredFiles = [
  'src/app/layout.tsx',
  'src/data/products.ts',
  'public/robots.txt',
  'src/app/sitemap.ts',
  'README.md',
  '.gitignore',
  'vercel.json'
];

console.log('\n📁 Verificando archivos importantes:');
let allFilesExist = true;
requiredFiles.forEach(file => {
  if (fs.existsSync(path.join(process.cwd(), file))) {
    console.log(`✅ ${file}`);
  } else {
    console.log(`❌ ${file} - FALTANTE`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n❌ Faltan archivos importantes. Verifica la implementación.');
  process.exit(1);
}

// 3. Verificar SEO
console.log('\n🔍 Verificando optimizaciones SEO...');
runCommand('npm run verify-seo', 'Verificación SEO');

// 4. Probar build
console.log('\n🏗️ Probando build de producción...');
if (!runCommand('npm run build', 'Build de producción')) {
  console.log('\n❌ El build falló. Corrige los errores antes de hacer deploy.');
  process.exit(1);
}

// 5. Inicializar Git si no existe
console.log('\n📝 Configurando Git...');

if (!fs.existsSync('.git')) {
  runCommand('git init', 'Inicializar repositorio Git');
} else {
  console.log('✅ Repositorio Git ya existe');
}

// 6. Agregar archivos
runCommand('git add .', 'Agregar archivos al staging');

// 7. Crear commit inicial
try {
  execSync('git rev-parse --verify HEAD', { stdio: 'pipe' });
  console.log('✅ Ya existen commits en el repositorio');
} catch {
  runCommand('git commit -m "🚀 Initial commit: Arcipres website with SEO optimizations"', 'Crear commit inicial');
}

// Mostrar instrucciones finales
console.log('\n' + '=' .repeat(50));
console.log('🎉 ¡PROYECTO LISTO PARA DEPLOY!');
console.log('=' .repeat(50));

console.log('\n📋 PRÓXIMOS PASOS:');
console.log('\n1. 📂 CREAR REPOSITORIO EN GITHUB:');
console.log('   • Ir a: https://github.com/new');
console.log('   • Repository name: "arcipres"');
console.log('   • Description: "Sitio web corporativo - Arcillas y Prefabricados"');
console.log('   • Visibility: Public');
console.log('   • No agregar README, .gitignore o license (ya los tienes)');

console.log('\n2. 🔗 CONECTAR CON GITHUB:');
console.log('   git remote add origin https://github.com/TU_USUARIO/arcipres.git');
console.log('   git branch -M main');
console.log('   git push -u origin main');

console.log('\n3. ⚡ DEPLOY EN VERCEL:');
console.log('   • Ir a: https://vercel.com/new');
console.log('   • Import Git Repository → Seleccionar "arcipres"');
console.log('   • Framework: Next.js (auto-detectado)');
console.log('   • Click Deploy');

console.log('\n4. 🔧 CONFIGURAR ANALYTICS (OPCIONAL):');
console.log('   • Variables de entorno en Vercel:');
console.log('   • NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX');

console.log('\n📚 DOCUMENTACIÓN COMPLETA:');
console.log('   • Ver: docs/DEPLOY-GUIDE.md');
console.log('   • Ver: docs/SEO-IMPLEMENTADO.md');

console.log('\n🎯 URLs DESPUÉS DEL DEPLOY:');
console.log('   • Sitio: https://arcipres.vercel.app');
console.log('   • Robots: https://arcipres.vercel.app/robots.txt');
console.log('   • Sitemap: https://arcipres.vercel.app/sitemap.xml');

console.log('\n✨ ¡Tu sitio web está listo para conquistar Google!');
