# Botón Flotante de WhatsApp - Arcipres

## ✅ Implementación Completa

Se ha implementado un botón flotante de WhatsApp que aparece en todas las páginas del sitio web de Arcipres, permitiendo a los usuarios contactar directamente con la empresa.

### 🎯 Características

#### ✨ Funcionalidades
- **Botón flotante** en la esquina inferior derecha
- **Mensajes contextuales** que cambian según la página
- **Tooltip informativo** al pasar el mouse
- **Animaciones atractivas** (pulse, bounce, scale)
- **Responsive** y optimizado para móviles
- **Accesible** con aria-labels apropiados

#### 📱 Integración Inteligente
- **Detección automática** de la página actual
- **Mensajes personalizados** por sección:
  - Página principal: Consulta general
  - Productos: Información sobre productos
  - Dashboard/Perfil: Soporte técnico
- **Número centralizado** y fácil de configurar

### 📁 Archivos Creados

#### Componentes
```
src/ui/components/whatsapp-button.tsx          - Componente base del botón
src/ui/components/whatsapp-floating-button.tsx - Wrapper con lógica contextual
```

#### Configuración
```
src/lib/whatsapp-config.ts                    - Configuración centralizada
```

#### Scripts de Gestión
```
scripts/configure-whatsapp.cjs                - Configurador interactivo
```

#### Estilos
```
src/app/globals.css                           - Estilos y animaciones personalizadas
```

### 🔧 Configuración

#### Número de WhatsApp Actual
```typescript
phoneNumber: "+57 300 123 4567" // ⚠️ ACTUALIZAR CON EL NÚMERO REAL
```

#### Mensajes Predefinidos
- **General**: "Hola, me interesa conocer más sobre los productos de arcilla y prefabricados de Arcipres..."
- **Productos**: "Hola, vi sus productos en la página web y me gustaría conocer más detalles..."
- **Cotización**: "Hola, necesito una cotización para un proyecto de construcción..."
- **Soporte**: "Hola, tengo una consulta sobre sus productos y servicios..."

### 🛠️ Personalización

#### Configuración Rápida
```bash
# Cambiar número de WhatsApp
node scripts/configure-whatsapp.cjs
```

#### Configuración Manual
Editar `src/lib/whatsapp-config.ts`:

```typescript
export const WHATSAPP_CONFIG = {
  phoneNumber: "+57 XXX XXX XXXX", // Tu número real
  messages: {
    general: "Tu mensaje personalizado...",
    // ... más mensajes
  },
  appearance: {
    position: "bottom-right", // Posición del botón
    showTooltip: true,        // Mostrar tooltip
  }
};
```

### 🎨 Personalización Visual

#### Posiciones Disponibles
- `bottom-right` (por defecto)
- `bottom-left`
- `top-right`
- `top-left`

#### Colores y Estilos
El botón usa:
- **Color principal**: Verde WhatsApp (`bg-green-500`)
- **Hover**: Verde más oscuro (`bg-green-600`)
- **Animaciones**: Pulse, scale, bounce
- **Sombras**: Elevación con shadow-lg

### 📱 URLs Generadas

#### Formato de URL de WhatsApp
```
https://wa.me/[NUMERO]?text=[MENSAJE_CODIFICADO]
```

#### Ejemplo
```
https://wa.me/573001234567?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20los%20productos%20de%20arcilla%20y%20prefabricados%20de%20Arcipres.
```

### 🌐 Integración en el Layout

El botón se ha agregado al layout principal (`src/app/layout.tsx`):

```tsx
<CartProvider>
  <div className="flex min-h-screen flex-col">{children}</div>
  {/* Botón flotante de WhatsApp */}
  <WhatsAppFloatingButton />
</CartProvider>
```

### 🔍 Verificación

#### En el Navegador
1. **Abrir**: http://localhost:3002
2. **Buscar**: Botón verde en esquina inferior derecha
3. **Hover**: Verificar tooltip "¡Contáctanos por WhatsApp!"
4. **Click**: Debe abrir WhatsApp Web o la app

#### Pruebas por Página
- **Inicio**: Mensaje general sobre Arcipres
- **Productos** (`/products`): Mensaje sobre productos específicos
- **Dashboard** (`/dashboard`): Mensaje de soporte

### 🚀 Funcionalidades Avanzadas

#### Detección de Dispositivo
- **Desktop**: Abre WhatsApp Web
- **Móvil**: Abre la app de WhatsApp
- **Automático**: URL universal `wa.me`

#### Métricas y Analytics (Futuro)
- Tracking de clics por página
- Análisis de mensajes más utilizados
- Conversiones de contacto

### ⚠️ Tareas Pendientes

1. **Actualizar número real** de WhatsApp de Arcipres
2. **Personalizar mensajes** según necesidades específicas
3. **Configurar horarios** de atención (opcional)
4. **Agregar tracking** de analytics (opcional)

### 🔧 Comandos Útiles

```bash
# Configurar número de WhatsApp
node scripts/configure-whatsapp.cjs

# Verificar configuración
cat src/lib/whatsapp-config.ts

# Probar en desarrollo
npm run dev
```

### 📞 Contacto de Prueba

**Número actual**: +57 300 123 4567 (⚠️ **CAMBIAR POR EL REAL**)

### ✨ Resultado Final

El botón de WhatsApp ahora está totalmente integrado y funcionando:
- ✅ **Visible** en todas las páginas
- ✅ **Animado** y atractivo visualmente
- ✅ **Inteligente** con mensajes contextuales
- ✅ **Configurable** fácilmente
- ✅ **Responsive** y accesible
- ✅ **Integrado** en el layout principal

Los usuarios pueden hacer clic en cualquier momento para contactar directamente con Arcipres a través de WhatsApp, mejorando significativamente las oportunidades de conversión y atención al cliente.
