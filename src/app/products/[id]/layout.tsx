import type { Metadata } from "next";
import { getProductById } from "~/data/products";
import { formatPrice } from "~/lib/utils";

interface ProductPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Producto no encontrado - Arcipres",
      description: "El producto que busca no fue encontrado en nuestro catálogo.",
    };
  }

  const price = formatPrice(product.price);
  
  return {
    title: `${product.name} - ${price} | Arcipres`,
    description: `${product.name} de ${product.category.toLowerCase()} - ${product.description}. Precio: ${price}. Productos de alta calidad para construcción en Colombia.`,
    keywords: `${product.name}, ${product.category}, construcción, precio ${product.name}, ${product.category} Colombia, materiales construcción, prefabricados, arcilla`,
    openGraph: {
      title: `${product.name} - Arcipres`,
      description: `${product.description} - ${price}`,
      type: "website",
      locale: "es_CO",
      images: product.image ? [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: `${product.name} - ${product.category}`,
        },
      ] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Arcipres`,
      description: `${product.description} - ${price}`,
      images: product.image ? [product.image] : [],
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
