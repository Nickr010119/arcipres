"use client";

import { Heart, ShoppingCart, Star } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import Image from "next/image";
import { cn, formatPrice } from "~/lib/utils";
import { trackWhatsAppClick } from "~/lib/analytics";
import { Badge } from "~/ui/primitives/badge";
import { Button } from "~/ui/primitives/button";
import { Card, CardContent, CardFooter } from "~/ui/primitives/card";
import { useRouter } from 'next/router';

import { type Product } from "~/data/products";

type ProductCardProps = {
  product: Product;
  variant?: "default" | "compact";
  onAddToCart?: (productId: string) => void;
  onAddToWishlist?: (productId: string) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, "onError">;

//Botón de whatsApp función



export default function ProductCard({
  product,
  variant = "default",
  onAddToCart,
  onAddToWishlist,
  className,
  ...props
}: ProductCardProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isAddingToCart, setIsAddingToCart] = React.useState(false);
  const [isInWishlist, setIsInWishlist] = React.useState(false);

  const numeroWhatsApp = '+573118798583'; // Reemplaza con el número al que quieres dirigir
  const mensajePredefinido = `Hola, quiero más información sobre el: ${product.name}`; // Mensaje opcional

  const handleClickWhatsApp = () => {
    // Track WhatsApp click with product info
    trackWhatsAppClick(product.id);
    
    const urlWhatsAppWeb = `https://web.whatsapp.com/send?phone=${numeroWhatsApp}&text=${encodeURIComponent(mensajePredefinido)}`;
    window.open(urlWhatsAppWeb, '_blank', 'noopener,noreferrer');
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToCart) {
      setIsAddingToCart(true);
      // Simulate API call
      setTimeout(() => {
        onAddToCart(product.id);
        setIsAddingToCart(false);
      }, 600);
    }
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onAddToWishlist) {
      setIsInWishlist(!isInWishlist);
      onAddToWishlist(product.id);
    }
  };

  return (
    <div className={cn("group", className)} {...props}>
      <Link href={`/products/${product.id}`}>
        <Card
          className={cn(
            "relative h-full overflow-hidden rounded-lg transition-all duration-200 ease-in-out hover:shadow-md",
            isHovered && "ring-1 ring-primary/20",
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative aspect-square overflow-hidden rounded-t-lg">
            {product.image && (
              <Image
                src={product.image}
                alt={`${product.name} - ${product.category} para construcción - Arcipres`}
                fill
                className={cn(
                  "object-cover transition-transform duration-300 ease-in-out",
                  isHovered && "scale-105",
                )}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}

            {/* Category badge */}
            <Badge
              variant="outline"
              className="absolute left-2 top-2 bg-background/80 backdrop-blur-sm"
            >
              {product.category}
            </Badge>
          </div>

          <CardContent className="p-4 pt-4">
            {/* Product name with line clamp */}
            <h3 className="line-clamp-2 text-base font-medium transition-colors group-hover:text-primary">
              {product.name}
            </h3>

            {variant === "default" && (
              <>
                <div className="mt-2 flex items-center gap-1.5">
                  <span className="font-medium text-foreground">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </>
            )}
          </CardContent>

          {variant === "default" && (
            <CardFooter className="p-4 pt-0">
              <Button
                className={cn(
                  "w-full gap-2 transition-all",
                  isAddingToCart && "opacity-70",
                )}
                onClick={handleClickWhatsApp}
              >
                {isAddingToCart ? (
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                ) : (
                  <ShoppingCart className="h-4 w-4" />
                )}
                Cotizar
              </Button>
            </CardFooter>
          )}

          {variant === "compact" && (
            <CardFooter className="p-4 pt-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-1.5">
                  <span className="font-medium text-foreground">
                    {formatPrice(product.price)}
                  </span>
                </div>
              </div>
            </CardFooter>
          )}
        </Card>
      </Link>
    </div>
  );
}
