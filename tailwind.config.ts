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
        '15': '60px',
        '25': '100px',
        '39': '156px',
      },
      fontSize: {
        '16': '64px',
        '40': '40px',
      },
      lineHeight: {
        16: '64px',
      },
      width: {
        360: '360px',
      },
      borderRadius: {
        default: '30px',
      },
    },
    
  },
  plugins: [],
}
export default config
