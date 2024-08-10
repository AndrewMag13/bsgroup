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
const config = {

}
module.exports = withPWA(withNextIntl({
  reactProductionProfiling: true,
  experimental: {
    serverComponentsExternalPackages: ['telegraf']
  }
}));