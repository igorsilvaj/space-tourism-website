import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: "0px", // => @media (min-width: 0px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1440px", // => @media (min-width: 1024px) { ... }
    },
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#D0D6F9',
        tertiary: '#0B0D17',
      },
      fontFamily: {
        bellefair: ['var(--font-bellefair)'],
        barlow: ['var(--font-barlow)'],
        'barlow-condensed': ['var(--font-barlow-condensed)'],
      },
      fontSize: {
        base: ['18px', {
          lineHeight: '32px',
        }],
        buttonText: ['32px', {
          letterSpacing: '2px',
        }],
        heading1: '150px',
        heading2: '100px',
        heading3: '56px',
        heading4: '32px',
        heading5: ['28px', {
          letterSpacing: '4.75px',
        }],
        subheading1: '28px',
        subheading2: ['14px', {
          letterSpacing: '2.35px',
        }],
        navText: ['16px', {
          letterSpacing: '2.7px',
        }],


        tabletTextBase: ['16px', {
          lineHeight: '28px',
        }],
        tabletButtonText: ['32px', {
          letterSpacing: '2px',
        }],
        tabletHeading1: '150px',
        tabletHeading2: '80px',
        tabletHeading3: '40px',
        tabletHeading4: '24px',
        tabletHeading5: ['20px', {
          letterSpacing: '3.38px',
        }],
        tabletSubheading1: '28px',
        tabletSubheading2: ['14px', {
          letterSpacing: '2.36px',
        }],
        tabletNavText: ['16px', {
          letterSpacing: '2.7px',
        }],


        mobileTextBase: ['15px', {
          lineHeight: '25px',
        }],
        mobileButtonText: ['20px', {
          letterSpacing: '1.25px',
        }],
        mobileHeading1: '80px',
        mobileHeading2: '56px',
        mobileHeading3: '24px',
        mobileHeading4: '16px',
        mobileHeading5: ['16px', {
          letterSpacing: '2.7px',
        }],
        mobileSubheading1: '28px',
        mobileSubheading2: ['14px', {
          letterSpacing: '2.36px',
        }],
        mobileNavText: ['14px', {
          letterSpacing: '2.36px',
        }],
      },
      keyframes: {
        openMenu: {
          '0%': { opacity: '0' },
          '50%': { opacity: '0.5' },
          '100%': {opacity: '1'},
        }
      },
      animation: {
        openMenu: 'openMenu 0.5s ease-in-out',
      }
    },
  },
  plugins: [],
}
export default config
