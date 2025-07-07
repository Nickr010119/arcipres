"use client";

import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import * as React from "react";
import type { Metadata } from "next";

import { getProductById } from "~/data/products";
import { useCart } from "~/lib/hooks/use-cart";
import { formatPrice } from "~/lib/utils";
import { trackProductView, trackWhatsAppClick } from "~/lib/analytics";
import { Header } from "~/ui/components/header";
import { Button } from "~/ui/primitives/button";
import { Separator } from "~/ui/primitives/separator";

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { addItem } = useCart();
  const [quantity, setQuantity] = React.useState(1);

  // Find the product by ID using the centralized data
  const product = getProductById(id as string);

  // Track product view when component mounts
  React.useEffect(() => {
    if (product) {
      trackProductView(product.id, product.name, product.category);
    }
  }, [product]);

  // If product not found, show error
  if (!product) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 py-10">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold">Product Not Found</h1>
            <p className="mt-4">
              The product you're looking for doesn't exist.
            </p>
            <Button className="mt-6" onClick={() => router.push("/products")}>
              Volver al catalogo.
            </Button>
          </div>
        </main>
      </div>
    );
  }

  const handleQuantityChange = (newQuantity: number) => {
    if (newQuantity >= 5000) {
      setQuantity(newQuantity);
    }
  };
  const numeroWhatsApp = '+573118798583'; // Reemplaza con el número al que quieres dirigir
  const mensajePredefinido = `Hola, quiero más información sobre el: ${product.name}`; // Mensaje opcional
  
  const handleAddToCart = () => {
    // Add the product to cart with the selected quantity
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });

      // Track WhatsApp click with product ID
      trackWhatsAppClick(product.id);

      const urlWhatsAppWeb = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePredefinido)}`;
      window.open(urlWhatsAppWeb, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <Button
            variant="ghost"
            className="mb-6"
            onClick={() => router.push("/products")}
          >
            ← Volver al catalogo.
          </Button>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={product.image}
                alt={`${product.name} - ${product.category} de alta calidad para construcción en Colombia - Arcipres`}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="flex flex-col">
              <div className="mb-6">
                <h1 className="text-3xl font-bold">{product.name}</h1>
              </div>

              <div className="mb-6">
                <p className="text-lg font-medium text-muted-foreground">
                  {product.category}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-3xl font-bold">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>

              <p className="mb-6 text-muted-foreground">
                {product.description}
              </p>

              <div className="mb-6 flex items-center gap-4">
                <div className="flex items-center">
                </div>
                <Button
                  className="flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Cotizar
                </Button>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Product Features */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold">Notas</h2>
              <ul className="space-y-2">
                {product.features.map((feature: string) => (
                  <li
                    key={`feature-${product.id}-${feature.replace(/\s+/g, "-").toLowerCase()}`}
                    className="flex items-start"
                  >
                    <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Specifications */}
            <div>
              <h2 className="mb-4 text-2xl font-bold">Especificaciones</h2>
              <div className="space-y-2">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between border-b pb-2">
                    <span className="font-medium capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span className="text-muted-foreground">{String(value)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} Arcipres 2025, todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
