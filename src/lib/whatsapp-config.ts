/**
 * Configuración de contacto de WhatsApp para Arcipres
 */

export const WHATSAPP_CONFIG = {
  // Número de teléfono principal de Arcipres (ajustar según el número real)
  phoneNumber: "+573124689881",
  
  // Mensajes predefinidos para diferentes secciones
  messages: {
    general: "Hola, me interesa conocer más sobre los productos de arcilla y prefabricados de Arcipres. ¿Podrían brindarme información?",
    products: "Hola, vi sus productos en la página web y me gustaría conocer más detalles sobre precios y disponibilidad.",
    quote: "Hola, necesito una cotización para un proyecto de construcción. ¿Podrían ayudarme?",
    support: "Hola, tengo una consulta sobre sus productos y servicios. ¿Podrían asistirme?",
    catalog: "Hola, me gustaría recibir su catálogo completo de productos de arcilla y prefabricados.",
  },
  
  // Horarios de atención (opcional, para mostrar en tooltip)
  businessHours: {
    weekdays: "Lunes a Viernes: 8:00 AM - 6:00 PM",
    saturday: "Sábados: 8:00 AM - 2:00 PM",
    sunday: "Domingos: Cerrado",
  },
  
  // Configuración de apariencia
  appearance: {
    position: "bottom-right" as const,
    showTooltip: true,
    showBusinessHours: false, // Mostrar horarios en el tooltip
  }
};

/**
 * Generar URL de WhatsApp con mensaje personalizado
 */
export function generateWhatsAppUrl(message?: string, phoneNumber?: string): string {
  const phone = phoneNumber || WHATSAPP_CONFIG.phoneNumber;
  const msg = message || WHATSAPP_CONFIG.messages.general;
  const cleanPhone = phone.replace(/[^0-9]/g, "");
  
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(msg)}`;
}

/**
 * Obtener mensaje contextual según la página actual
 */
export function getContextualMessage(pathname: string): string {
  if (pathname.includes('/products')) {
    return WHATSAPP_CONFIG.messages.products;
  }
  if (pathname.includes('/profile') || pathname.includes('/dashboard')) {
    return WHATSAPP_CONFIG.messages.support;
  }
  return WHATSAPP_CONFIG.messages.general;
}
