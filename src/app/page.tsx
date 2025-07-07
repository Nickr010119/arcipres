import { ArrowRight, Clock, ShoppingBag, Star, Truck } from "lucide-react";
import Link from "next/link";

import Image from "next/image";
import { getFeaturedProducts } from "~/data/products";
import { Footer } from "~/ui/components/footer";
import { Header } from "~/ui/components/header";
import ProductCard  from "~/ui/components/product-card";
import { TestimonialCarousel } from "~/ui/components/testimonial-carousel";
import { Button } from "~/ui/primitives/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/ui/primitives/card";

// Featured products for the homepage
const featuredProducts = getFeaturedProducts().slice(0, 5);

// Categories for the shop by category section
const categories = [
  {
    name: "Concreto",
    image: "/Concreto/a10.png",
    productCount: 13,
  },
  {
    name: "Acueducto y Alcantarillado", 
    image: "/Alcantarillado/sl100.png",
    productCount: 9,
  },
  {
    name: "Arcilla",
    image: "/Arcilla/ladrillorecocido.png",
    productCount: 4,
  },
  {
    name: "Mobiliario Urbano",
    image: "/Urbanismo/m40.png",
    productCount: 4,
  },
];

// Features for the why choose us section
const features = [
  {
    title: "Transporte garantizado",
    description:
      "Ofrecemos el servicio de transporte para todos nuestros productos, asegurando que lleguen a su obra en perfectas condiciones con descargue a bordo de planchón.",
    icon: <Truck className="h-6 w-6 text-primary" />,
  },
  {
    title: "Productos de Calidad",
    description:
      "Todos nuestros productos cumplen con las normas de calidad más exigentes y están certificados en Colombia.",
    icon: <Star className="h-6 w-6 text-primary" />,
  },
  {
    title: "Soporte 24/7",
    description:
      "Nuestro equipo de ingenieros están siempre disponible para ayudarle con cualquier consulta, brindandole la mejor atención técnica para cada solución requerida.",
    icon: <Clock className="h-6 w-6 text-primary" />,
  },
  {
    title: "Garantía de Satisfacción",
    description:
      "Respaldamos la calidad de cada producto que vendemos, además contamos con todo el respaldo en cuanto a facturación electrónica se refiere.",
    icon: <ShoppingBag className="h-6 w-6 text-primary" />,
  },
];

// Testimonials for the testimonial carousel
const testimonials = [
  {
    id: "1",
    content:
      "Hemos trabajado con Arcipres durante varios años y siempre nos han brindado productos de excelente calidad.",
    author: {
      name: "Constructora Alcabama",
      role: "Empresa Constructora",
      avatar: "/Clientes/Alcabama.png",
    },
    rating: 5,
  },
  {
    id: "2",
    content:
      "Los productos prefabricados de Arcipres son de buena calidad y siempre cumplen con los plazos establecidos.",
    author: {
      name: "Amarilo Construcciones",
      role: "Desarrollador Inmobiliario",
      avatar: "/Clientes/Amarilo.png",
    },
    rating: 5,
  },
  {
    id: "3",
    content:
      "Como electricos, sus ladrillos ladrillos recocidos son excelentes a buen precio y siempre en el menor tiempo de entrega.",
    author: {
      name: "HCR Construcciones",
      role: "Empresa de Ingeniería",
      avatar: "/Clientes/HCR.png",
    },
    rating: 5,
  },
  {
    id: "4",
    content:
      "Tenemos una relación comercial de mucho tiempo con Arcipres y siempre han sido muy cumplidos, con excelente calidad",
    author: {
      name: "Prodesa",
      role: "Constructora",
      avatar: "/Clientes/Prodesa.png",
    },
    rating: 5,
  },
  {
    id: "5",
    content:
      "Siempre han sido muy cumplidos con nosotros, gran respaldo técnico y todo a tiempo siempre",
    author: {
      name: "Sofan Constructora",
      role: "Empresa de Construcción",
      avatar: "/Clientes/Sofan.png",
    },
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-muted/50 via-muted/25 to-background py-24 md:py-32">
          <div className="absolute inset-0 bg-grid-black/[0.02] bg-[length:20px_20px]" />
          <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:leading-[1.1]">
                    Arcillas y prefabricados{" "}
                    <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    de la mejor calidad para su obra.
                    </span>
                  </h1>
                  <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
                    Descubra los productos que ofrecemos para su obra.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Link href="/products">
                    <Button size="lg" className="h-12 gap-1.5 px-8">
                      Cotice ahora. <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/showcase">
                    {/* <Button variant="outline" size="lg" className="h-12 px-8">
                      View Showcase
                    </Button> */}
                  </Link>
                </div>
                <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Truck className="h-5 w-5 text-primary/70" />
                    <span>Transporte garantizado</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Clock className="h-5 w-5 text-primary/70" />
                    <span>Soporte 24/7</span>
                  </div>
                </div>
              </div>
              <div className="relative mx-auto hidden aspect-square w-full max-w-md overflow-hidden rounded-xl border lg:block">
                <div className="absolute inset-0 z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
                <Image
                  src="/Cover photo.jpg"
                  alt="Shopping experience"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>

        {/* Featured Categories */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Categorías de Productos
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Encuentre el producto perfecto para su obra en nuestras categorías especializadas
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  href={`/products?category=${category.name.toLowerCase()}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border bg-card transition-all duration-200 hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <div className="absolute inset-0 z-10 bg-gradient-to-t from-background/80 to-transparent" />
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative z-20 -mt-6 p-4">
                    <div className="mb-1 text-lg font-medium">
                      {category.name}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.productCount} products
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="bg-muted/50 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Productos Destacados
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground">
                Conozca nuestros productos más populares.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-10 flex justify-center">
              <Link href="/products">
                <Button variant="outline" size="lg" className="group h-12 px-8">
                  Ver Todos los Productos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Por qué elegirnos
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground md:text-lg">
                A continuación le mostramos algunas de las razones por las que somos la mejor opción para su obra.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <Card
                  key={feature.title}
                  className="border-none bg-background shadow-sm"
                >
                  <CardHeader className="pb-2">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      {feature.icon}
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-muted/50 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Experiencias de algunos de nuestros clientes
              </h2>
              <div className="mt-2 h-1 w-12 rounded-full bg-primary" />
              <p className="mt-4 max-w-2xl text-center text-muted-foreground md:text-lg">
                Estas son algunas opiniones de algunos de nuestros clientes a nivel nacional. 
              </p>
            </div>
            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
