import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'lg-max': {
          min: '1400px',
        },
        xs: {
          max: '460px',
        },
        xss: {
          max: '400px',
        },
      },
      fontFamily: {
        unbounded: [
          '__Unbounded_116e04',
          '__Unbounded_Fallback_116e04',
          'sans-serif',
        ],
        encodeSansExpanded: ['__Encode_Sans_Expanded_b50c6e', '__Onest_796408'],
        onest: ['__Onest_5f161b', '__Onest_Fallback_5f161b', 'sans-serif'],
      },
      container: {
        center: true,
      },
      height: {
        'screen-minus-135': 'calc(100vh - 135px)',
        'screen-minus-74': 'calc(100vh - 74px)',
      },
      lineHeight: {
        7: '77px',
        '28p': '28px',
        '47p': '47px',
        '23p4': '23.4px',
        '20p8': '20.8px',
        '26p4': '26.4px',
        '31p': '31px',
        'title-line': '1.2',
      },
      colors: {
        background: 'hsl(var(--background))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          1: 'hsl(var(--chart-1))',
          2: 'hsl(var(--chart-2))',
          3: 'hsl(var(--chart-3))',
          4: 'hsl(var(--chart-4))',
          5: 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xl1: '2.5rem',
        xl2: '3rem',
        xl3: '3.25rem',
        title: [
          '4rem',
          {
            lineHeight: '1.2',
          },
        ],
        desc1: '1.25rem',
        desc2: '1.125rem',
        subtitle: '2.25rem',
      },
      borderRadius: {
        xxl: '6.25em',
        xl: 'calc(var(--radius) + 10px)',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 15px)',
        'sm-md': 'calc(var(--radius) - 24px)',
        sm: 'calc(var(--radius) - 30px)',
      },
      letterSpacing: {
        tightest: '-0.125rem',
        tighter: '-0.063rem',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        'spinner-leaf-fade': {
          '0%, 100%': {
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'spinner-leaf-fade': 'spinner-leaf-fade 800ms linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
