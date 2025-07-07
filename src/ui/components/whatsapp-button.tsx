import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { trackWhatsAppClick } from "~/lib/analytics";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  showTooltip?: boolean;
}

export function WhatsAppButton({
  phoneNumber,
  message = "Hola, me interesa conocer más sobre sus productos de arcilla y prefabricados.",
  position = "bottom-right",
  showTooltip = true,
}: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Limpiar el número de teléfono (remover espacios, guiones, etc.)
  const cleanPhoneNumber = phoneNumber.replace(/[^0-9]/g, "");
  
  // Construir la URL de WhatsApp
  const whatsappUrl = `https://wa.me/${cleanPhoneNumber}?text=${encodeURIComponent(message)}`;

  // Función para manejar el click con tracking
  const handleClick = () => {
    trackWhatsAppClick();
  };

  // Posiciones CSS
  const positionClasses = {
    "bottom-right": "bottom-6 right-6",
    "bottom-left": "bottom-6 left-6",
    "top-right": "top-6 right-6",
    "top-left": "top-6 left-6",
  };

  const tooltipPositions = {
    "bottom-right": "bottom-full right-0 mb-2",
    "bottom-left": "bottom-full left-0 mb-2",
    "top-right": "top-full right-0 mt-2",
    "top-left": "top-full left-0 mt-2",
  };

  return (
    <div className={`fixed z-50 ${positionClasses[position]}`}>
      {/* Tooltip */}
      {showTooltip && isHovered && (
        <div
          className={`absolute ${tooltipPositions[position]} 
            bg-gray-800 text-white text-sm px-3 py-2 rounded-lg shadow-lg 
            whitespace-nowrap animate-in fade-in-0 zoom-in-95 duration-200`}
        >
          ¡Contáctanos por WhatsApp!
          <div
            className={`absolute w-2 h-2 bg-gray-800 rotate-45 ${
              position.includes("bottom") ? "-bottom-1" : "-top-1"
            } ${position.includes("right") ? "right-4" : "left-4"}`}
          />
        </div>
      )}

      {/* Botón principal */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-14 h-14 
          bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg 
          hover:shadow-xl transition-all duration-300 hover:scale-110
          animate-pulse hover:animate-none"
        aria-label="Contactar por WhatsApp"
      >
        {/* Icono de WhatsApp */}
        <MessageCircle
          size={28}
          className="group-hover:scale-110 transition-transform duration-200"
        />
        
        {/* Efecto de ondas */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20" />
        <div 
          className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-10" 
          style={{ animationDelay: "0.5s" }}
        />
      </a>

      {/* Indicador de número de teléfono (solo visible en hover) */}
      {isHovered && (
        <div
          className={`absolute ${
            position.includes("bottom") ? "top-full mt-2" : "bottom-full mb-2"
          } ${position.includes("right") ? "right-0" : "left-0"}
            bg-green-100 text-green-800 text-xs px-2 py-1 rounded shadow-md
            whitespace-nowrap animate-in fade-in-0 slide-in-from-bottom-2 duration-200`}
        >
          <Phone size={12} className="inline mr-1" />
          {phoneNumber}
        </div>
      )}
    </div>
  );
}
