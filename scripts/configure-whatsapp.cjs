#!/usr/bin/env node

/**
 * Script para configurar el número de WhatsApp de Arcipres
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('📱 Configurador de WhatsApp para Arcipres\n');

async function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function main() {
  try {
    console.log('Configuración actual del botón de WhatsApp:\n');
    
    // Leer configuración actual
    const configPath = path.join(__dirname, '..', 'src', 'lib', 'whatsapp-config.ts');
    const configContent = fs.readFileSync(configPath, 'utf8');
    
    // Extraer número actual
    const phoneMatch = configContent.match(/phoneNumber:\s*"([^"]+)"/);
    const currentPhone = phoneMatch ? phoneMatch[1] : '+57 300 123 4567';
    
    console.log(`📞 Número actual: ${currentPhone}`);
    console.log('');
    
    // Solicitar nuevo número
    const newPhone = await askQuestion(`Ingresa el nuevo número de WhatsApp (presiona Enter para mantener el actual): `);
    
    if (newPhone.trim()) {
      // Validar formato del número
      const cleanPhone = newPhone.replace(/[^0-9+]/g, '');
      if (cleanPhone.length < 10) {
        console.log('❌ Error: El número debe tener al menos 10 dígitos');
        process.exit(1);
      }
      
      // Actualizar configuración
      const updatedConfig = configContent.replace(
        /phoneNumber:\s*"[^"]+"/,
        `phoneNumber: "${cleanPhone}"`
      );
      
      fs.writeFileSync(configPath, updatedConfig);
      console.log(`✅ Número actualizado a: ${cleanPhone}`);
    } else {
      console.log('📞 Número mantenido sin cambios');
    }
    
    console.log('\n🎯 Configuración completada!');
    console.log('\n📋 Para probar el botón:');
    console.log('   1. Abre http://localhost:3002');
    console.log('   2. Busca el botón verde flotante en la esquina inferior derecha');
    console.log('   3. Haz clic para abrir WhatsApp');
    console.log('   4. El mensaje se adaptará según la página donde esté el usuario');
    
    console.log('\n📱 Mensajes contextuales:');
    console.log('   - Página principal: Consulta general');
    console.log('   - Página de productos: Consulta sobre productos');
    console.log('   - Dashboard/Perfil: Soporte técnico');
    
    console.log('\n🔧 Para más personalizaciones, edita:');
    console.log('   - src/lib/whatsapp-config.ts (configuración general)');
    console.log('   - src/ui/components/whatsapp-button.tsx (diseño del botón)');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

main();
