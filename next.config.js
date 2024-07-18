/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
'next-intl'
// import createNextIntlPlugin from 'next-intl/plugin';
// const createNextIntlPlugin = require('next-intl/plugin');
const withNextIntl = createNextIntlPlugin();

const nextConfig = {

}

export default withNextIntl(nextConfig);