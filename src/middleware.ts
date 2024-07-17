import createMiddleware from 'next-intl/middleware'
import { locales } from './i18n'

export default createMiddleware({
  locales,
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'always',
  alternateLinks: false,
})

export const config = {
  matcher: [
    '/',
    '/(ru|en)/:path*',
    '/(ru|en):path*',
    '/((?!_next|_vercel|.*\\..*).*)',
  ],
}
