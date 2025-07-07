"use client";

import { useState } from "react";
import { Settings, Cookie } from "lucide-react";
import { CookieSettings } from "./cookie-settings";

export function CookieSettingsButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-400 
          hover:text-gray-800 dark:hover:text-gray-200 border border-gray-300 dark:border-gray-600 
          rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
      >
        <Cookie className="w-3 h-3" />
        Cookies
      </button>
      
      <CookieSettings 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
}
