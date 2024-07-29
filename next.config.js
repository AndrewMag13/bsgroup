/** @type {import('next').NextConfig} */
// import createNextIntlPlugin from 'next-intl/plugin';
// 'next-intl'
// import createNextIntlPlugin from 'next-intl/plugin';
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
  // dest: 'public',
  // register: true,
  // skipWaiting: true,
  // pwa: {
  //   dest: 'public'
  // }
}
module.exports = withPWA(withNextIntl({
  reactProductionProfiling: true,

  // webpack: (config, { isServer }) => {
  //   if (!isServer) {
  //     config.resolve.fallback.fs = false
  //     config.resolve.fallback.tls = false
  //     config.resolve.fallback.net = false
  //     config.resolve.fallback.child_process = false
  //   }

  //   return config
  // },
  // resolve: {
  //   extensions: [".ts", ".js"],
  //   fallback: {
  //     "child_process": false,
  //     // and also other packages that are not found
  //   }
  // }
}));