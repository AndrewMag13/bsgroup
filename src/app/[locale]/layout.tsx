import type { Metadata } from 'next'
import '../globals.css'
import { Inter } from 'next/font/google'
import { AbstractIntlMessages, NextIntlClientProvider } from 'next-intl'
import { ReactNode } from 'react'
import { getMessages } from 'next-intl/server'
import Footer from '@/widgets/footer/footer'
import Header from '@/widgets/header/header'

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
})
export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ru' }]
}

export const metadata: Metadata = {
  title: 'BSGroup',
  description: 'Built by BSGroup',
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
  const messages = await getMessages()

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <NextIntlClientProvider
          messages={
            JSON.parse(
              JSON.stringify(messages),
            ) as unknown as AbstractIntlMessages
          }
        >
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
