import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      whitesmoke: '#f5f5f5',
      based: '#1c1c1c',
      funded: '#161616',
      black: '#000000',
      blue: '#219CFF',
      emerald: '#62D6C5',
    },
    extend: {
      spacing: {
        '39': '156px',
        '15': '60px',
      },
      fontSize: {
        '16': '64px',
      },
      lineHeight: {
        16: '64px',
      },
    },
  },
  plugins: [],
}
export default config
