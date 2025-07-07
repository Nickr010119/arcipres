"use client";

import { usePathname } from "next/navigation";
import { WhatsAppButton } from "./whatsapp-button";
import { WHATSAPP_CONFIG, getContextualMessage } from "~/lib/whatsapp-config";
import { trackWhatsAppClick } from "~/lib/analytics";

interface WhatsAppFloatingButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  showTooltip?: boolean;
}

export function WhatsAppFloatingButton({
  phoneNumber,
  message,
  position,
  showTooltip,
}: WhatsAppFloatingButtonProps) {
  const pathname = usePathname();
  
  // Usar configuración por defecto o props personalizadas
  const config = {
    phoneNumber: phoneNumber || WHATSAPP_CONFIG.phoneNumber,
    message: message || getContextualMessage(pathname),
    position: position || WHATSAPP_CONFIG.appearance.position,
    showTooltip: showTooltip ?? WHATSAPP_CONFIG.appearance.showTooltip,
  };

  return (
    <WhatsAppButton
      phoneNumber={config.phoneNumber}
      message={config.message}
      position={config.position}
      showTooltip={config.showTooltip}
    />
  );
}
