"use client";

import { useState, useEffect } from "react";

export type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  marketing: boolean;
};

const defaultPreferences: CookiePreferences = {
  necessary: true,
  analytics: false,
  functional: false,
  marketing: false,
};

export function useCookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Cargar preferencias guardadas
    const savedConsent = localStorage.getItem("cookie-consent");
    const consentDate = localStorage.getItem("cookie-consent-date");
    
    if (savedConsent && consentDate) {
      try {
        const parsedPreferences = JSON.parse(savedConsent);
        const date = new Date(consentDate);
        const now = new Date();
        const daysDiff = (now.getTime() - date.getTime()) / (1000 * 3600 * 24);
        
        // Considerar válido el consentimiento por 365 días
        if (daysDiff < 365) {
          setPreferences(parsedPreferences);
          setHasConsent(true);
        } else {
          // Consentimiento expirado
          clearConsent();
        }
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
        clearConsent();
      }
    }
    
    setIsLoading(false);
  }, []);

  const updatePreferences = (newPreferences: CookiePreferences) => {
    setPreferences(newPreferences);
    setHasConsent(true);
    localStorage.setItem("cookie-consent", JSON.stringify(newPreferences));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    
    // Aplicar preferencias inmediatamente
    applyPreferences(newPreferences);
  };

  const clearConsent = () => {
    setPreferences(defaultPreferences);
    setHasConsent(false);
    localStorage.removeItem("cookie-consent");
    localStorage.removeItem("cookie-consent-date");
  };

  const applyPreferences = (prefs: CookiePreferences) => {
    // Gestión de Analytics
    if (prefs.analytics) {
      console.log("✅ Analytics cookies enabled");
      // Aquí puedes activar Google Analytics, Vercel Analytics, etc.
    } else {
      console.log("❌ Analytics cookies disabled");
      // Desactivar analytics
    }

    // Gestión de cookies funcionales
    if (prefs.functional) {
      console.log("✅ Functional cookies enabled");
      // Activar funcionalidades adicionales
    } else {
      console.log("❌ Functional cookies disabled");
    }

    // Gestión de cookies de marketing
    if (prefs.marketing) {
      console.log("✅ Marketing cookies enabled");
      // Activar cookies de marketing/publicidad
    } else {
      console.log("❌ Marketing cookies disabled");
    }

    // Disponer evento personalizado para que otros componentes puedan reaccionar
    window.dispatchEvent(new CustomEvent("cookiePreferencesUpdated", {
      detail: prefs
    }));
  };

  return {
    preferences,
    hasConsent,
    isLoading,
    updatePreferences,
    clearConsent,
    // Funciones de conveniencia
    canUseAnalytics: preferences.analytics,
    canUseFunctional: preferences.functional,
    canUseMarketing: preferences.marketing,
  };
}

// Hook para componentes que necesitan verificar consentimiento específico
export function useCookieCategory(category: keyof CookiePreferences) {
  const { preferences, hasConsent } = useCookieConsent();
  
  return {
    canUse: hasConsent && preferences[category],
    hasConsent,
  };
}
