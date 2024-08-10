import '../globals.css'

import type { Metadata, Viewport } from 'next'
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server'

import Footer from '@/widgets/footer/footer'
import Header from '@/widgets/header/header'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import localFont from 'next/font/local'
import ogImage from '../../../public/images/og.png'

// const inter = Inter({
//   subsets: ['latin', 'cyrillic'],
//   display: 'swap',
// })

const locales = ['en', 'ru']
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

const interLocal = localFont({
  src: '../../../public/fonts/Inter/InterVariable.woff2',
  fallback: ['system-ui', 'arial'],
  variable: '--font-inter',
  display: 'swap',
})
export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('home.meta')

  return {
    title: t('title'),
    description: t('desc'),
    icons: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/images/favicon-32x32COL.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/images/favicon-16x16COL.png',
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        url: '/images/apple-touch-icon.png',
      },
      {
        rel: 'android-chrome-192x192',
        type: 'image/icon',
        sizes: '192x192',
        url: '/images/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        type: 'image/icon',
        sizes: '512x512',
        url: '/images/android-chrome-512x512.png',
      },
    ],
    metadataBase: new URL('bsgroup.vercel.app'),
    openGraph: {
      title: t('title'),
      description: t('desc'),
      images: [
        {
          url: ogImage.src,
        },
      ],

      type: 'website',
    },
    twitter: {
      title: t('title'),
      description: t('desc'),
      images: [
        {
          url: ogImage.src,
        },
      ],

      card: 'summary_large_image',
    },
    manifest: '/manifest.json',
  }
}
export function viewport(): Viewport {
  return {
    initialScale: 1,
    viewportFit: 'cover',
    width: 'device-width',
  }
}
interface Props {
  children: ReactNode
  params: {
    locale: string
  }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Props) {
  unstable_setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <>
      <html lang={locale} className={`${interLocal.variable} font-sans`}>
        <body>
          <NextIntlClientProvider messages={messages}>
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  )
}
