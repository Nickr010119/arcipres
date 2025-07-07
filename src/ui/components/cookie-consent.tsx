"use client";

import { useState, useEffect } from "react";
import { X, Cookie, Settings, Check, Shield } from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true, // Siempre necesarias
  analytics: false,
  functional: false,
  marketing: false,
};

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    // Verificar si ya se dio consentimiento
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Mostrar banner después de un pequeño delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    };
    
    savePreferences(allAccepted);
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    savePreferences(preferences);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    savePreferences(defaultPreferences);
    setIsVisible(false);
  };

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    
    // Aplicar las preferencias
    applyPreferences(prefs);
  };

  const applyPreferences = (prefs: CookiePreferences) => {
    // Aquí puedes agregar lógica para activar/desactivar diferentes servicios
    console.log("Cookie preferences applied:", prefs);
    
    // Ejemplo: desactivar analytics si no se acepta
    if (!prefs.analytics) {
      // Desactivar Vercel Analytics, Google Analytics, etc.
      console.log("Analytics disabled");
    }
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return; // No se puede desactivar
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm">
      <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t shadow-2xl">
        <div className="max-w-7xl mx-auto p-6">
          {!showDetails ? (
            // Banner básico
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <Cookie className="w-6 h-6 text-orange-500" />
                  <h3 className="font-semibold text-lg">🍪 Uso de Cookies</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Utilizamos cookies para mejorar tu experiencia de navegación, recordar tus preferencias 
                  y analizar el tráfico del sitio. Algunas cookies son esenciales para el funcionamiento 
                  del sitio web de <strong>Arcipres</strong>.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                <button
                  onClick={() => setShowDetails(true)}
                  className="flex items-center gap-2 px-4 py-2 text-gray-600 dark:text-gray-300 
                    hover:text-gray-800 dark:hover:text-gray-100 transition-colors"
                >
                  <Settings className="w-4 h-4" />
                  Personalizar
                </button>
                <button
                  onClick={handleRejectAll}
                  className="px-6 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 
                    dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 
                    transition-colors"
                >
                  Rechazar Todo
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg 
                    transition-colors font-medium"
                >
                  Aceptar Todo
                </button>
              </div>
            </div>
          ) : (
            // Panel detallado
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <Shield className="w-6 h-6 text-orange-500" />
                  <h3 className="font-semibold text-xl">Configuración de Cookies</h3>
                </div>
                <button
                  onClick={() => setShowDetails(false)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-6">
                {/* Cookies Necesarias */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">🔒 Cookies Necesarias</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">Siempre activas</span>
                      <div className="w-10 h-6 bg-green-500 rounded-full flex items-center justify-end pr-1">
                        <div className="w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Esenciales para el funcionamiento del sitio web. Incluyen carrito de compras, 
                    preferencias de tema y funcionalidades básicas.
                  </p>
                </div>

                {/* Cookies de Analytics */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">📊 Cookies de Análisis</h4>
                    <button
                      onClick={() => togglePreference("analytics")}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        preferences.analytics ? "bg-green-500" : "bg-gray-300"
                      } flex items-center ${preferences.analytics ? "justify-end pr-1" : "justify-start pl-1"}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web. 
                    Incluye Vercel Analytics para mejorar el rendimiento.
                  </p>
                </div>

                {/* Cookies Funcionales */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">⚙️ Cookies Funcionales</h4>
                    <button
                      onClick={() => togglePreference("functional")}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        preferences.functional ? "bg-green-500" : "bg-gray-300"
                      } flex items-center ${preferences.functional ? "justify-end pr-1" : "justify-start pl-1"}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Permiten funcionalidades mejoradas y personalización, como recordar 
                    tus productos favoritos y configuraciones.
                  </p>
                </div>

                {/* Cookies de Marketing */}
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">📢 Cookies de Marketing</h4>
                    <button
                      onClick={() => togglePreference("marketing")}
                      className={`w-10 h-6 rounded-full transition-colors ${
                        preferences.marketing ? "bg-green-500" : "bg-gray-300"
                      } flex items-center ${preferences.marketing ? "justify-end pr-1" : "justify-start pl-1"}`}
                    >
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </button>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Utilizadas para mostrar contenido relevante y personalizado. 
                    Actualmente no utilizamos cookies de marketing.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t">
                <div className="flex-1">
                  <p className="text-xs text-gray-500">
                    Puedes cambiar estas preferencias en cualquier momento desde la configuración del sitio.
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2 text-gray-600 dark:text-gray-300 border border-gray-300 
                      dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 
                      transition-colors"
                  >
                    Rechazar Todo
                  </button>
                  <button
                    onClick={handleAcceptSelected}
                    className="flex items-center gap-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 
                      text-white rounded-lg transition-colors font-medium"
                  >
                    <Check className="w-4 h-4" />
                    Guardar Preferencias
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
