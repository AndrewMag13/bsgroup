import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bsgroup.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      alternates: {
        languages: {
          en: 'https://bsgroup.vercel.app/en',
          ru: 'https://bsgroup.vercel.app/ru',
        },
      },
      priority: 1,
    },
    {
      url: 'https://bsgroup.vercel.app/terms',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      alternates: {
        languages: {
          en: 'https://bsgroup.vercel.app/en/terms',
          ru: 'https://bsgroup.vercel.app/ru/terms',
        },
      },
      priority: 0.8,
    },
    {
      url: 'https://bsgroup.vercel.app/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      alternates: {
        languages: {
          en: 'https://bsgroup.vercel.app/en/privacy',
          ru: 'https://bsgroup.vercel.app/ru/privacy',
        },
      },
      priority: 0.8,
    },
  ]
}
