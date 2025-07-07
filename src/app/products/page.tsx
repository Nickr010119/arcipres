"use client";

import * as React from "react";
import type { Metadata } from "next";

import { products, getCategories } from "~/data/products";
import { useCart } from "~/lib/hooks/use-cart";
import { trackCategoryView } from "~/lib/analytics";
import { Header } from "~/ui/components/header";
import ProductCard from "~/ui/components/product-card";
import { Button } from "~/ui/primitives/button";

// Mock categories for filtering
const categories = [
  "Todo",
  "Arcilla",
  "Concreto",
  "Mobiliario Urbano",
  "Acueducto y Alcantarillado",
];

export default function ProductsPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = React.useState("Todo");
  const [currentPage, setCurrentPage] = React.useState(1);
  const productsPerPage = 12;

  // Filter products by the selected category
  const filteredProducts =
    selectedCategory === "Todo"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Reset to page 1 when category changes
  React.useEffect(() => {
    setCurrentPage(1);
    // Track category view when category changes
    trackCategoryView(selectedCategory);
  }, [selectedCategory]);

  const handleAddToCart = (productId: string) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      addItem({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
  };

  //const handleAddToWishlist = (productId: string) => {
    //console.log(`Added ${productId} to wishlist`);
    // In a real app, this would add the product to the wishlist
  //};

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 py-10">
        <div className="container px-4 md:px-6">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Productos</h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Encuentre los mejores productos para su obra  .
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={
                    category === selectedCategory ? "default" : "outline"
                  }
                  size="sm"
                  className="rounded-full"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                //onAddToWishlist={handleAddToWishlist}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                No se encontraron productos en esta categoría.
              </p>
            </div>
          )}

          {/* Información de productos y paginación */}
          {filteredProducts.length > 0 && (
            <div className="mt-8 flex flex-col items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Mostrando {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} de {filteredProducts.length} productos
              </p>
              
              {totalPages > 1 && (
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                  >
                    Anterior
                  </Button>
                  
                  {/* Páginas */}
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Button
                      key={page}
                      variant={page === currentPage ? "default" : "outline"}
                      size="sm"
                      onClick={() => setCurrentPage(page)}
                      className="min-w-[40px]"
                    >
                      {page}
                    </Button>
                  ))}
                  
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                  >
                    Siguiente
                  </Button>
                </div>
              )}
            </div>
          )}
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
