import { MetadataRoute } from 'next'
import { products, getCategories } from '~/data/products'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arcipres.com'
  
  // Páginas estáticas principales
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/showcase`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/profile`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Páginas de productos individuales
  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // Páginas de categorías (si las implementas en el futuro)
  const categories = getCategories()
  const categoryPages = categories
    .filter(cat => cat !== 'Todo') // Excluir "Todo" ya que es la página principal de productos
    .map((category) => ({
      url: `${baseUrl}/products?category=${encodeURIComponent(category)}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    }))

  return [
    ...staticPages,
    ...productPages,
    ...categoryPages,
  ]
}
