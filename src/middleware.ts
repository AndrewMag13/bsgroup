import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ru'],
  defaultLocale: 'ru',
  localeDetection: true,
})

export const config = {
  matcher: ['/', '/(ru|en)/:path*', '/((?!_next|_vercel|.*\\..*).*)'],
}
