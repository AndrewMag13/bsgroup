/** @type {import('next').NextConfig} */

const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  mode: 'production',
  skipWaiting: true,
  include: ['production', 'development'],


})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
// module.exports = withBundleAnalyzer({})
const config = {

}
module.exports = withBundleAnalyzer(withPWA(withNextIntl({
  reactProductionProfiling: true,
  experimental: {
    serverComponentsExternalPackages: ['telegraf']
  }
})));