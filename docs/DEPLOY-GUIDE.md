# 🚀 Guía de Deploy: GitHub + Vercel

## 📋 **Checklist Pre-Deploy**

### ✅ **Verificaciones Técnicas**
- [ ] Todas las optimizaciones SEO implementadas
- [ ] Imágenes optimizadas y locales
- [ ] Google Analytics ID configurado (opcional)
- [ ] Scripts de verificación ejecutados
- [ ] Build local exitoso

```bash
# Verificar estado del proyecto
npm run verify-seo
npm run build
npm start  # Probar en local
```

---

## 🗂️ **Paso 1: Crear Repositorio en GitHub**

### **1.1 Crear repo en GitHub:**
1. Ir a [github.com/new](https://github.com/new)
2. **Repository name**: `arcipres`
3. **Description**: "Sitio web corporativo - Arcillas y Prefabricados de Concreto"
4. **Visibility**: Public (recomendado para SEO)
5. ✅ **Add README file**: No (ya tienes uno)
6. **.gitignore**: No (ya tienes uno)
7. **License**: MIT (opcional)
8. Click **"Create repository"**

### **1.2 Configurar Git local:**
```bash
# Inicializar git (si no está inicializado)
git init

# Agregar remote
git remote add origin https://github.com/TU_USUARIO/arcipres.git

# Verificar archivos
git status

# Agregar todos los archivos
git add .

# Primer commit
git commit -m "🚀 Initial commit: Arcipres website with SEO optimizations"

# Subir a GitHub
git push -u origin main
```

---

## ⚡ **Paso 2: Deploy en Vercel**

### **2.1 Deploy Automático:**
1. Ir a [vercel.com](https://vercel.com)
2. Click **"New Project"**
3. **Import Git Repository** → Seleccionar tu repo `arcipres`
4. **Framework Preset**: Next.js (auto-detectado)
5. **Root Directory**: `.` (raíz)

### **2.2 Configurar Variables de Entorno:**
En la configuración del proyecto en Vercel:

| Variable | Valor | Requerido |
|----------|-------|-----------|
| `NEXT_PUBLIC_GA_ID` | `G-XXXXXXXXXX` | ⚠️ Opcional |

### **2.3 Deploy:**
1. Click **"Deploy"**
2. ⏳ Esperar 2-3 minutos
3. ✅ **Deploy exitoso**
4. 🌐 **URL generada**: `https://arcipres.vercel.app`

---

## 🌐 **Paso 3: Configurar Dominio (Opcional)**

### **3.1 Dominio Personalizado:**
Si tienes dominio propio (`arcipres.com`):

1. **Vercel Dashboard** → Project → **Settings** → **Domains**
2. **Add Domain**: `arcipres.com`
3. **Add Domain**: `www.arcipres.com`
4. Seguir instrucciones DNS de Vercel

### **3.2 Actualizar URLs en código:**
Si usas dominio personalizado, actualizar:

```typescript
// src/app/sitemap.ts
const baseUrl = 'https://arcipres.com'  // Tu dominio

// src/lib/analytics.tsx (si es necesario)
// Vercel auto-detecta el dominio
```

---

## 📊 **Paso 4: Configurar Analytics**

### **4.1 Google Analytics 4:**
1. Ir a [analytics.google.com](https://analytics.google.com)
2. **Create Account** → "Arcipres"
3. **Create Property** → "Arcipres Website"
4. **Platform**: Web
5. **Website URL**: Tu URL de Vercel o dominio
6. **Data Stream Name**: "Arcipres Web"
7. **Obtener Measurement ID**: `G-XXXXXXXXXX`

### **4.2 Actualizar en Vercel:**
1. **Vercel Dashboard** → Project → **Settings** → **Environment Variables**
2. **Add**: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`
3. **Redeploy** el proyecto

### **4.3 Google Search Console:**
1. Ir a [search.google.com/search-console](https://search.google.com/search-console)
2. **Add Property** → URL prefix → Tu dominio
3. **Verify ownership** (método DNS recomendado)
4. **Add Sitemap**: `https://tudominio.com/sitemap.xml`

---

## ✅ **Paso 5: Verificaciones Post-Deploy**

### **5.1 URLs a verificar:**
- ✅ `https://tudominio.com` → Homepage carga
- ✅ `https://tudominio.com/products` → Catálogo funciona
- ✅ `https://tudominio.com/robots.txt` → Robots.txt visible
- ✅ `https://tudominio.com/sitemap.xml` → Sitemap XML visible

### **5.2 Funcionalidades a probar:**
- ✅ **Navegación**: Categorías, productos, filtros
- ✅ **WhatsApp**: Botón flotante funciona
- ✅ **Cookies**: Banner aparece, configuración funciona
- ✅ **Mobile**: Responsive design correcto
- ✅ **Performance**: Carga rápida

### **5.3 SEO a verificar:**
```bash
# Ejecutar localmente para verificar
npm run verify-seo
```

- ✅ **Meta tags**: Únicos por página
- ✅ **Open Graph**: Preview en redes sociales
- ✅ **Analytics**: Eventos se registran (DevTools)
- ✅ **Alt tags**: Imágenes descriptivas

---

## 🔄 **Paso 6: Workflow de Desarrollo**

### **6.1 Para futuras actualizaciones:**
```bash
# Hacer cambios en local
git add .
git commit -m "✨ feat: nueva funcionalidad"
git push origin main
```

### **6.2 Auto-deploy:**
- ✅ **Cada push a main** despliega automáticamente
- ✅ **Preview deployments** para branches
- ✅ **Rollback** disponible en Vercel

---

## 📈 **Paso 7: Monitoreo y Analytics**

### **7.1 Métricas a monitorear:**
- **Tráfico orgánico** (Google Analytics)
- **Posicionamiento** (Google Search Console)
- **Performance** (Vercel Analytics)
- **Conversiones WhatsApp** (Events en GA)

### **7.2 Optimizaciones continuas:**
- **Core Web Vitals** en Vercel Dashboard
- **Search Performance** en Google Search Console
- **User Behavior** en Google Analytics
- **Error tracking** en Vercel

---

## 🎯 **URLs Finales**

Después del deploy tendrás:

| Recurso | URL |
|---------|-----|
| **Sitio web** | `https://arcipres.vercel.app` |
| **GitHub repo** | `https://github.com/TU_USUARIO/arcipres` |
| **Vercel dashboard** | `https://vercel.com/dashboard` |
| **Google Analytics** | `https://analytics.google.com` |
| **Search Console** | `https://search.google.com/search-console` |

---

## 🚨 **Troubleshooting**

### **Build errors:**
```bash
# Verificar localmente
npm run build
npm run type-check
```

### **Analytics no funciona:**
- ✅ Verificar `NEXT_PUBLIC_GA_ID` en Vercel
- ✅ Comprobar consentimiento de cookies
- ✅ Revisar DevTools → Network → Analytics

### **SEO issues:**
```bash
npm run verify-seo
```

### **Performance issues:**
- ✅ Vercel Analytics dashboard
- ✅ Lighthouse en DevTools
- ✅ Core Web Vitals en Search Console

---

## 🎉 **¡Listo!**

Tu sitio web de Arcipres está ahora:
- ✅ **Live en internet**
- ✅ **SEO optimizado**
- ✅ **Analytics configurado**
- ✅ **Auto-deploy configurado**
- ✅ **Performance optimizado**

**Next steps**: Monitorear métricas y seguir optimizando basado en datos reales de usuarios.
