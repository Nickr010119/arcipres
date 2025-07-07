#!/usr/bin/env node

/**
 * Script para crear un favicon personalizado de Arcipres
 * Como no podemos convertir SVG a ICO directamente, creamos un placeholder
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Configurando favicon de Arcipres...');

// Ruta del logo original
const logoPath = path.join(__dirname, '..', 'public', 'Logo Arcipres.svg');
const iconPath = path.join(__dirname, '..', 'src', 'app', 'icon.svg');

// Verificar que el logo existe
if (fs.existsSync(logoPath)) {
    console.log('✅ Logo original encontrado');
    
    // Leer el contenido del SVG
    const logoContent = fs.readFileSync(logoPath, 'utf8');
    
    // Crear una versión simplificada para el favicon
    const simplifiedIcon = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#fc6a0a"/>
  <text x="16" y="20" font-family="Arial, sans-serif" font-size="14" font-weight="bold" text-anchor="middle" fill="white">A</text>
  <rect x="4" y="4" width="2" height="2" fill="white"/>
  <rect x="4" y="8" width="2" height="2" fill="white"/>
  <rect x="4" y="12" width="2" height="2" fill="white"/>
  <rect x="4" y="16" width="2" height="2" fill="white"/>
  <rect x="8" y="8" width="2" height="2" fill="white"/>
  <rect x="8" y="12" width="2" height="2" fill="white"/>
  <rect x="8" y="16" width="2" height="2" fill="white"/>
  <rect x="12" y="12" width="2" height="2" fill="white"/>
  <rect x="12" y="16" width="2" height="2" fill="white"/>
  <rect x="16" y="16" width="2" height="2" fill="white"/>
</svg>`;

    // Escribir el nuevo icon.svg
    fs.writeFileSync(iconPath, simplifiedIcon);
    console.log('✅ Favicon SVG simplificado creado');
    
    console.log('📁 Archivos de favicon configurados:');
    console.log('   - src/app/icon.svg (favicon principal)');
    console.log('   - src/app/favicon.ico (compatibilidad)');
    console.log('   - public/Logo Arcipres.svg (logo original)');
    
} else {
    console.log('❌ Logo original no encontrado en:', logoPath);
}

console.log('\n🔄 Para ver los cambios:');
console.log('   1. Reinicia el servidor (Ctrl+C y npm run dev)');
console.log('   2. Limpia la caché del navegador (Ctrl+F5)');
console.log('   3. Abre las herramientas de desarrollador (F12)');
console.log('   4. Ve a Network y verifica que se cargue /icon.svg');
