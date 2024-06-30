/** @type {import('next').NextConfig} */
const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  // i18n: {
  //   locales: ['ru', 'en'],
  //   defaultLocale: 'ru',
  // }
}

module.exports = withNextIntl(nextConfig);