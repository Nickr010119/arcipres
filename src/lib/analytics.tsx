'use client'

import { useEffect } from 'react'
import { useCookieConsent } from '~/lib/hooks/use-cookie-consent'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// ID de Google Analytics 4 - REEMPLAZAR con el ID real
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX' // TODO: Reemplazar con ID real

export function GoogleAnalytics() {
  const { canUseAnalytics } = useCookieConsent()

  useEffect(() => {
    if (canUseAnalytics && typeof window !== 'undefined') {
      // Cargar Google Analytics solo si el usuario ha dado consentimiento
      const script1 = document.createElement('script')
      script1.async = true
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
      document.head.appendChild(script1)

      const script2 = document.createElement('script')
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_MEASUREMENT_ID}', {
          page_title: document.title,
          page_location: window.location.href,
          anonymize_ip: true,
          allow_google_signals: false,
          allow_ad_personalization_signals: false
        });
      `
      document.head.appendChild(script2)

      console.log('✅ Google Analytics 4 cargado con consentimiento')
    } else if (!canUseAnalytics) {
      console.log('❌ Google Analytics 4 deshabilitado - Sin consentimiento de cookies')
    }
  }, [canUseAnalytics])

  return null
}

// Función para enviar eventos personalizados
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      event_category: 'Arcipres',
      event_label: 'User Interaction',
    })
  }
}

// Eventos específicos para Arcipres
export const trackWhatsAppClick = (productId?: string) => {
  trackEvent('whatsapp_click', {
    product_id: productId,
    contact_method: 'whatsapp',
  })
}

export const trackProductView = (productId: string, productName: string, category: string) => {
  trackEvent('view_item', {
    item_id: productId,
    item_name: productName,
    item_category: category,
    currency: 'COP',
  })
}

export const trackCategoryView = (category: string) => {
  trackEvent('view_item_list', {
    item_list_name: category,
    item_category: category,
  })
}
