import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        "body": ['var(--body-font)'],
        "title": ['var(--title-font)'],
        "cv": ['var(--cv-font)']
      },
      colors:{
        "primary": "#1727eb",
        "darkprimary": "#1e40af",
        "offwhite": "#f1f1f1",
        "darkwhite": "#e5e7eb",
        "offblack": "#171717",
        "bodycolor": "#6b7280",
        "offbodycolor": "#9ca3af",
        "titlecolor" :"#1f2937",
        "bordercolor": "#d4d4d4"
      },
      fontSize: {
        "title": "2rem",
        "subtitle": "1rem",
        "body": "0.9rem",
      }
    },
  },
  plugins: [],
}
export default config
