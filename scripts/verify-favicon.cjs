#!/usr/bin/env node

/**
 * Script para verificar el estado del favicon
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Verificando configuración de favicon...\n');

// Verificar archivos
const files = [
    { path: 'src/app/icon.svg', description: 'Favicon SVG principal' },
    { path: 'src/app/favicon.ico', description: 'Favicon ICO (compatibilidad)' },
    { path: 'public/Logo Arcipres.svg', description: 'Logo original' }
];

files.forEach(file => {
    const fullPath = path.join(__dirname, '..', file.path);
    if (fs.existsSync(fullPath)) {
        const stats = fs.statSync(fullPath);
        console.log(`✅ ${file.description}`);
        console.log(`   📁 ${file.path}`);
        console.log(`   📏 ${stats.size} bytes`);
        console.log('');
    } else {
        console.log(`❌ ${file.description}`);
        console.log(`   📁 ${file.path} (NO ENCONTRADO)`);
        console.log('');
    }
});

// Verificar URLs donde debería estar disponible el favicon
console.log('🌐 URLs donde debería estar disponible el favicon:');
console.log('   - http://localhost:3000/icon.svg');
console.log('   - http://localhost:3000/favicon.ico');
console.log('');

console.log('🔧 Pasos para verificar en el navegador:');
console.log('   1. Abre http://localhost:3000');
console.log('   2. Presiona F12 para abrir herramientas de desarrollador');
console.log('   3. Ve a la pestaña "Network"');
console.log('   4. Recarga la página (F5)');
console.log('   5. Busca las solicitudes de "icon.svg" y "favicon.ico"');
console.log('   6. Verifica que ambas se carguen con estado 200');
console.log('');

console.log('🧹 Si el favicon no aparece:');
console.log('   1. Limpia la caché del navegador (Ctrl+Shift+Delete)');
console.log('   2. O usa Ctrl+F5 para una recarga forzada');
console.log('   3. O abre en modo incógnito');
console.log('');

console.log('✨ El favicon debería mostrar:');
console.log('   - Fondo naranja (#fc6a0a)');
console.log('   - Letra "A" blanca en el centro');
console.log('   - Pequeños cuadrados blancos decorativos');
