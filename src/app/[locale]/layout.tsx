import type { Metadata } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { getMessages, unstable_setRequestLocale } from 'next-intl/server'
import Footer from '@/widgets/footer/footer'
import Header from '@/widgets/header/header'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})
const locales = ['en', 'ru']
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'BSGroup',
  description: 'Built by BSGroup',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/icons/favicon-16x16.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/icons/apple-touch-icon.png',
    },
    {
      rel: 'android-chrome-192x192',
      type: 'image/icon',
      sizes: '192x192',
      url: '/icons/android-chrome-192x192.png',
    },
    {
      rel: 'android-chrome-512x512',
      type: 'image/icon',
      sizes: '512x512',
      url: '/icons/android-chrome-512x512.png',
    },
  ],
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
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
