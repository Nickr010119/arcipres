import { Facebook, Github, Instagram, Linkedin, Twitter, MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "~/lib/utils";
import { Button } from "~/ui/primitives/button";
import { CookieSettingsButton } from "./cookie-settings-button";

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn("border-t bg-background", className)}>
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Arcipres
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Soluciones de construcción de alta calidad
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Tienda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Todos los productos
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Arcilla"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Arcilla
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Concreto"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Concreto
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Acueducto y Alcantarillado"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Acueducto y Alcantarillado
                </Link>
              </li>
              <li>
                <Link
                  href="/products?category=Mobiliario Urbano"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Mobiliario urbano
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Contacto</h3>
            <div className="space-y-3">
              {/* Logo */}
              <div className="mb-4">
                <Image
                  src="/Logo Arcipres.svg"
                  alt="Arcipres Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              
              {/* Dirección */}
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Calle 77 #99-40</p>
                  <p>Bogotá, Colombia</p>
                </div>
              </div>
              
              {/* Teléfono */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a href="tel:+573124689881" className="hover:text-foreground">
                  +57 3124689881
                </a>
              </div>
              
              {/* Email */}
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a href="mailto:ventasarcipres@gmail.com" className="hover:text-foreground">
                  ventasarcipres@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Arcipres, todos los derechos reservados.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="/privacy" className="hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="hover:text-foreground">
                Terms
              </Link>
              <Link href="/cookies" className="hover:text-foreground">
                Cookies
              </Link>
              <Link href="/sitemap" className="hover:text-foreground">
                Sitemap
              </Link>
              <CookieSettingsButton />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
