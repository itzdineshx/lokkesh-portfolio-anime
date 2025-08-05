import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'anime': ['M PLUS Rounded 1c', 'sans-serif'],
				'japanese': ['Noto Sans JP', 'sans-serif'],
				'creepy': ['Creepster', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'anime-red': 'hsl(var(--anime-red))',
				'anime-blue': 'hsl(var(--anime-blue))',
				'anime-gold': 'hsl(var(--anime-gold))',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'power-up': {
					'0%': { width: '0%' },
					'100%': { width: 'var(--power-width)' }
				},
				'power-charge': {
					'0%': { transform: 'scale(1)', boxShadow: '0 0 10px hsl(var(--primary) / 0.3)' },
					'50%': { transform: 'scale(1.05)', boxShadow: '0 0 30px hsl(var(--primary) / 0.7)' },
					'100%': { transform: 'scale(1)', boxShadow: '0 0 10px hsl(var(--primary) / 0.3)' }
				},
				'ki-blast': {
					'0%': { transform: 'scale(0) rotate(0deg)', opacity: '0' },
					'50%': { transform: 'scale(1.2) rotate(180deg)', opacity: '1' },
					'100%': { transform: 'scale(1) rotate(360deg)', opacity: '1' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(1deg)' },
					'50%': { transform: 'translateY(-20px) rotate(0deg)' },
					'75%': { transform: 'translateY(-10px) rotate(-1deg)' }
				},
				'sakura-fall': {
					'0%': { transform: 'translateY(-100vh) rotate(0deg)', opacity: '1' },
					'100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' }
				},
				'aura-pulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.3' },
					'50%': { transform: 'scale(1.1)', opacity: '0.7' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.8)' }
				},
				'super-glow': {
					'0%': { boxShadow: '0 0 10px hsl(var(--primary) / 0.3)' },
					'25%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--accent) / 0.3)' },
					'50%': { boxShadow: '0 0 30px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--accent) / 0.5), 0 0 50px hsl(var(--secondary) / 0.3)' },
					'75%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--accent) / 0.3)' },
					'100%': { boxShadow: '0 0 10px hsl(var(--primary) / 0.3)' }
				},
				'slide-in-left': {
					'0%': { transform: 'translateX(-100%) scale(0.8)', opacity: '0' },
					'100%': { transform: 'translateX(0) scale(1)', opacity: '1' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%) scale(0.8)', opacity: '0' },
					'100%': { transform: 'translateX(0) scale(1)', opacity: '1' }
				},
				'slide-up-bounce': {
					'0%': { transform: 'translateY(100%) scale(0.9)', opacity: '0' },
					'60%': { transform: 'translateY(-10%) scale(1.05)', opacity: '1' },
					'80%': { transform: 'translateY(5%) scale(0.98)', opacity: '1' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '1' }
				},
				'fade-in-up': {
					'0%': { transform: 'translateY(30px) scale(0.95)', opacity: '0' },
					'100%': { transform: 'translateY(0) scale(1)', opacity: '1' }
				},
				'fade-in-scale': {
					'0%': { transform: 'scale(0.5)', opacity: '0' },
					'50%': { transform: 'scale(1.1)', opacity: '0.7' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slash-effect': {
					'0%': { transform: 'scaleX(0) rotate(-45deg)', opacity: '0' },
					'50%': { transform: 'scaleX(1) rotate(-45deg)', opacity: '1' },
					'100%': { transform: 'scaleX(0) rotate(-45deg)', opacity: '0' }
				},
				'energy-burst': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(3)', opacity: '0' }
				},
				'shockwave': {
					'0%': { transform: 'scale(1)', opacity: '0.8' },
					'100%': { transform: 'scale(2)', opacity: '0' }
				},
				'card-flip': {
					'0%': { transform: 'rotateY(0deg)' },
					'100%': { transform: 'rotateY(180deg)' }
				},
				'text-reveal': {
					'0%': { clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)' },
					'100%': { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
				},
				'typing': {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Enhanced Power Animations
				'power-up': 'power-up 2s ease-out forwards',
				'power-charge': 'power-charge 1.5s ease-in-out infinite',
				'ki-blast': 'ki-blast 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				// Enhanced Floating & Movement
				'float': 'float 4s ease-in-out infinite',
				'sakura-fall': 'sakura-fall 8s linear infinite',
				'aura-pulse': 'aura-pulse 2s ease-in-out infinite',
				// Enhanced Glow Effects
				'glow': 'glow 2s ease-in-out infinite',
				'super-glow': 'super-glow 3s ease-in-out infinite',
				// Enhanced Slide Animations
				'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-up-bounce': 'slide-up-bounce 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				// Enhanced Fade Animations
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'fade-in-scale': 'fade-in-scale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				// Combat Effects
				'slash-effect': 'slash-effect 0.6s ease-out',
				'energy-burst': 'energy-burst 0.5s ease-out',
				'shockwave': 'shockwave 0.8s ease-out',
				// UI Animations
				'card-flip': 'card-flip 0.6s ease-in-out',
				'text-reveal': 'text-reveal 1s ease-out',
				'typing': 'typing 2s steps(40, end)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
