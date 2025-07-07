"use client";

import { useState } from "react";
import { Settings, Cookie, Save, RotateCcw } from "lucide-react";
import { useCookieConsent, type CookiePreferences } from "~/lib/hooks/use-cookie-consent";

interface CookieSettingsProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CookieSettings({ isOpen, onClose }: CookieSettingsProps) {
  const { preferences, updatePreferences, clearConsent } = useCookieConsent();
  const [tempPreferences, setTempPreferences] = useState<CookiePreferences>(preferences);

  if (!isOpen) return null;

  const handleToggle = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // No se puede desactivar

    setTempPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    updatePreferences(tempPreferences);
    onClose();
  };

  const handleReset = () => {
    clearConsent();
    onClose();
    // Recargar la página para mostrar el banner nuevamente
    window.location.reload();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="fixed inset-4 bg-white dark:bg-gray-900 rounded-lg shadow-2xl overflow-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <Cookie className="w-6 h-6 text-orange-500" />
              <h2 className="text-2xl font-semibold">Configuración de Cookies</h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              ×
            </button>
          </div>

          <div className="space-y-6 mb-8">
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h3 className="font-medium text-orange-800 dark:text-orange-200 mb-2">
                🏢 Información sobre Arcipres
              </h3>
              <p className="text-sm text-orange-700 dark:text-orange-300">
                Arcipres utiliza cookies para mejorar tu experiencia en nuestro sitio web y 
                proporcionarte información relevante sobre nuestros productos de arcilla y prefabricados.
              </p>
            </div>

            {/* Cookies Necesarias */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-lg">🔒 Cookies Necesarias</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Siempre activas</p>
                </div>
                <div className="w-12 h-6 bg-green-500 rounded-full flex items-center justify-end pr-1">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• <strong>Carrito de compras:</strong> Recordar productos agregados</li>
                  <li>• <strong>Tema de la página:</strong> Preferencia de modo claro/oscuro</li>
                  <li>• <strong>Sesión:</strong> Mantener la sesión del usuario</li>
                  <li>• <strong>Consentimiento:</strong> Recordar tus preferencias de cookies</li>
                </ul>
              </div>
            </div>

            {/* Cookies de Analytics */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-lg">📊 Cookies de Análisis</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Opcionales</p>
                </div>
                <button
                  onClick={() => handleToggle("analytics")}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    tempPreferences.analytics ? "bg-green-500" : "bg-gray-300"
                  } flex items-center ${tempPreferences.analytics ? "justify-end pr-1" : "justify-start pl-1"}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Nos ayudan a entender cómo los visitantes utilizan nuestro sitio web para mejorarlo.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• <strong>Vercel Analytics:</strong> Métricas de rendimiento del sitio</li>
                  <li>• <strong>Páginas visitadas:</strong> Estadísticas anónimas de navegación</li>
                  <li>• <strong>Tiempo de permanencia:</strong> Análisis de engagement</li>
                </ul>
              </div>
            </div>

            {/* Cookies Funcionales */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-lg">⚙️ Cookies Funcionales</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Opcionales</p>
                </div>
                <button
                  onClick={() => handleToggle("functional")}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    tempPreferences.functional ? "bg-green-500" : "bg-gray-300"
                  } flex items-center ${tempPreferences.functional ? "justify-end pr-1" : "justify-start pl-1"}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Habilitan funcionalidades mejoradas y personalización de la experiencia.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• <strong>Productos favoritos:</strong> Recordar productos de interés</li>
                  <li>• <strong>Búsquedas recientes:</strong> Historial de búsquedas</li>
                  <li>• <strong>Configuraciones:</strong> Preferencias personalizadas</li>
                </ul>
              </div>
            </div>

            {/* Cookies de Marketing */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h4 className="font-medium text-lg">📢 Cookies de Marketing</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Opcionales</p>
                </div>
                <button
                  onClick={() => handleToggle("marketing")}
                  className={`w-12 h-6 rounded-full transition-colors ${
                    tempPreferences.marketing ? "bg-green-500" : "bg-gray-300"
                  } flex items-center ${tempPreferences.marketing ? "justify-end pr-1" : "justify-start pl-1"}`}
                >
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </button>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                Actualmente no utilizamos cookies de marketing. Esta opción está disponible para futuras funcionalidades.
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 rounded p-3">
                <ul className="text-xs space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• <strong>Retargeting:</strong> No activo actualmente</li>
                  <li>• <strong>Publicidad personalizada:</strong> No activo actualmente</li>
                  <li>• <strong>Redes sociales:</strong> No activo actualmente</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
            <button
              onClick={handleReset}
              className="flex items-center justify-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 
                border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 
                dark:hover:bg-gray-800 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Restablecer
            </button>
            <div className="flex gap-3 sm:ml-auto">
              <button
                onClick={onClose}
                className="px-6 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 
                  dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 
                  transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 
                  text-white rounded-lg transition-colors font-medium"
              >
                <Save className="w-4 h-4" />
                Guardar Preferencias
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
