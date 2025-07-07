import { Cookie, Shield, Eye, Target, Settings } from "lucide-react";
import Link from "next/link";

export default function CookiesPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="space-y-8">
        <div className="text-center">
          <Cookie className="w-16 h-16 mx-auto text-orange-500 mb-4" />
          <h1 className="text-4xl font-bold mb-4">Política de Cookies</h1>
          <p className="text-xl text-muted-foreground">
            Información sobre el uso de cookies en el sitio web de Arcipres
          </p>
        </div>

        <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-orange-800 dark:text-orange-200 mb-3">
            🏢 Acerca de Arcipres
          </h2>
          <p className="text-orange-700 dark:text-orange-300">
            Arcipres es una empresa especializada en productos de arcilla y prefabricados de concreto. 
            Utilizamos cookies para mejorar tu experiencia en nuestro sitio web y ofrecerte el mejor servicio posible.
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">¿Qué son las cookies?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas 
              un sitio web. Nos permiten recordar tus preferencias y mejorar tu experiencia de navegación.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Tipos de cookies que utilizamos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <h3 className="font-semibold">Cookies Necesarias</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Esenciales para el funcionamiento del sitio web. No se pueden desactivar.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Carrito de compras</li>
                  <li>• Preferencias de tema</li>
                  <li>• Consentimiento de cookies</li>
                  <li>• Datos de sesión</li>
                </ul>
                <div className="mt-3 text-xs">
                  <strong>Duración:</strong> Sesión o hasta 1 año
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Eye className="w-6 h-6 text-blue-500" />
                  <h3 className="font-semibold">Cookies de Análisis</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Nos ayudan a entender cómo interactúas con nuestro sitio.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Vercel Analytics</li>
                  <li>• Páginas más visitadas</li>
                  <li>• Tiempo de permanencia</li>
                  <li>• Origen del tráfico</li>
                </ul>
                <div className="mt-3 text-xs">
                  <strong>Duración:</strong> Hasta 2 años<br />
                  <strong>Requerimiento:</strong> Consentimiento
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="w-6 h-6 text-purple-500" />
                  <h3 className="font-semibold">Cookies Funcionales</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Mejoran la funcionalidad y personalización del sitio.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• Productos favoritos</li>
                  <li>• Búsquedas guardadas</li>
                  <li>• Configuraciones personales</li>
                  <li>• Idioma preferido</li>
                </ul>
                <div className="mt-3 text-xs">
                  <strong>Duración:</strong> Hasta 1 año<br />
                  <strong>Requerimiento:</strong> Consentimiento
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-red-500" />
                  <h3 className="font-semibold">Cookies de Marketing</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-3">
                  Actualmente no utilizamos cookies de marketing.
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• No activo</li>
                  <li>• Reservado para futuro uso</li>
                </ul>
                <div className="mt-3 text-xs">
                  <strong>Estado:</strong> Desactivado
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">¿Cómo gestionar las cookies?</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  En nuestro sitio web
                </h3>
                <p className="text-blue-700 dark:text-blue-300 text-sm mb-3">
                  Puedes gestionar tus preferencias de cookies en cualquier momento usando nuestro panel de configuración.
                </p>
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                  Configurar Cookies
                </button>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                <h3 className="font-semibold mb-2">En tu navegador</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  También puedes controlar las cookies directamente desde la configuración de tu navegador:
                </p>
                <ul className="text-sm space-y-2 text-muted-foreground">
                  <li>• <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                  <li>• <strong>Firefox:</strong> Preferencias → Privacidad y seguridad</li>
                  <li>• <strong>Safari:</strong> Preferencias → Privacidad</li>
                  <li>• <strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Detalles técnicos</h2>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 dark:border-gray-700 rounded-lg">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium">Cookie</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Propósito</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Tipo</th>
                    <th className="px-4 py-2 text-left text-sm font-medium">Duración</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2 font-mono">cart-items</td>
                    <td className="px-4 py-2">Almacenar productos del carrito</td>
                    <td className="px-4 py-2">LocalStorage</td>
                    <td className="px-4 py-2">Persistente</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2 font-mono">theme</td>
                    <td className="px-4 py-2">Recordar tema claro/oscuro</td>
                    <td className="px-4 py-2">LocalStorage</td>
                    <td className="px-4 py-2">Persistente</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2 font-mono">cookie-consent</td>
                    <td className="px-4 py-2">Preferencias de cookies</td>
                    <td className="px-4 py-2">LocalStorage</td>
                    <td className="px-4 py-2">365 días</td>
                  </tr>
                  <tr className="border-t border-gray-200 dark:border-gray-700">
                    <td className="px-4 py-2 font-mono">vercel-analytics</td>
                    <td className="px-4 py-2">Métricas de rendimiento</td>
                    <td className="px-4 py-2">Analytics</td>
                    <td className="px-4 py-2">24 horas</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contacto</h2>
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <p className="text-orange-700 dark:text-orange-300 mb-3">
                Si tienes preguntas sobre nuestra política de cookies o necesitas más información:
              </p>
              <div className="space-y-2 text-sm">
                <div>📧 <strong>Email:</strong> info@arcipres.com</div>
                <div>📱 <strong>WhatsApp:</strong> +57 311 879 8583</div>
                <div>🌐 <strong>Sitio web:</strong> www.arcipres.com</div>
              </div>
            </div>
          </section>

          <section className="text-center py-8">
            <p className="text-sm text-muted-foreground mb-4">
              Esta política de cookies fue actualizada por última vez el {new Date().toLocaleDateString('es-CO')}
            </p>
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 
                text-white rounded-lg transition-colors"
            >
              ← Volver al inicio
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
