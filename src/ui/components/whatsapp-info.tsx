import { MessageCircle, Clock } from "lucide-react";
import { WHATSAPP_CONFIG } from "~/lib/whatsapp-config";

export function WhatsAppInfo() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(WHATSAPP_CONFIG.messages.general)}`;

  return (
    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
      <div className="flex items-center gap-3 mb-2">
        <div className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full">
          <MessageCircle size={16} />
        </div>
        <div>
          <h4 className="font-semibold text-green-800">¡Contáctanos por WhatsApp!</h4>
          <p className="text-sm text-green-600">Respuesta rápida y personalizada</p>
        </div>
      </div>
      
      <div className="space-y-2 text-sm text-green-700">
        <div className="flex items-center gap-2">
          <span className="font-medium">📱 Número:</span>
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline font-mono"
          >
            {WHATSAPP_CONFIG.phoneNumber}
          </a>
        </div>
        
        <div className="flex items-start gap-2">
          <Clock size={14} className="mt-0.5 flex-shrink-0" />
          <div>
            <div>{WHATSAPP_CONFIG.businessHours.weekdays}</div>
            <div>{WHATSAPP_CONFIG.businessHours.saturday}</div>
            <div>{WHATSAPP_CONFIG.businessHours.sunday}</div>
          </div>
        </div>
      </div>
      
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
      >
        <MessageCircle size={16} />
        Abrir WhatsApp
      </a>
    </div>
  );
}
