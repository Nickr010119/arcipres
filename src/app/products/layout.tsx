import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos - Arcillas y Prefabricados | Arcipres",
  description: "Explore nuestro catálogo completo de productos de arcilla y prefabricados de concreto. Sardineles, bordillos, bloques, ladrillos y mobiliario urbano de alta calidad para construcción en Colombia.",
  keywords: "catálogo productos, arcilla construcción, prefabricados concreto, sardineles, bordillos, bloques construcción, ladrillos, mobiliario urbano, materiales construcción Colombia",
  openGraph: {
    title: "Catálogo de Productos - Arcipres",
    description: "Productos de arcilla y prefabricados de concreto para sus proyectos de construcción",
    type: "website",
    locale: "es_CO",
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo de Productos - Arcipres",
    description: "Productos de arcilla y prefabricados de concreto para sus proyectos de construcción",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
