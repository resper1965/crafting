import type { Config } from 'tailwindcss'

const config: Config = {
    darkMode: ['class'],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
  	extend: {
  		colors: {
  			// Cores do Manual de Marca - Crafting Partners
  			crafting: {
  				grafite: '#232b2f',      // Grafite Noturno
  				azul: '#28474f',         // Azul Profundo
  				verde: '#4e5655',        // Verde Aço
  				cinzaAlvo: '#d3d4cc',    // Cinza Alvo
  				cinzaUrbano: '#939393',  // Cinza Urbano
  				branco: '#f9fbfd',        // Branco Neve
  				chumbo: '#1e1d24',       // Chumbo Mineral
  			},
  			primary: {
  				'50': '#e6f7ff',
  				'100': '#bae7ff',
  				'200': '#91d5ff',
  				'300': '#69c0ff',
  				'400': '#40a9ff',
  				'500': '#28474f',        // Azul Profundo do manual
  				'600': '#232b2f',        // Grafite Noturno
  				'700': '#1e1d24',        // Chumbo Mineral
  				'800': '#1a1a1a',
  				'900': '#0f0f0f',
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Roboto',
  				'sans-serif'
  			],
  			display: [
  				'Montserrat',
  				'sans-serif'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
