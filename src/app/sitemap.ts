import { APP_URL } from '@/shared/constants/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${APP_URL}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          en: `${APP_URL}/en`,
          ru: `${APP_URL}/ru`,
        },
      },
    },
  ]
}
