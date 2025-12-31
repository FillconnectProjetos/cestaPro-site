/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: '#EBE9FE', // Light accents (lilac-y)
                    DEFAULT: '#8B7CF6', // Lilás Pro - Primary Brand Color
                    dark: '#6F5CC2', // Roxo Ação - Hover/Focus
                },
                graphite: {
                    DEFAULT: '#3B3F46', // Grafite Âncora - Structural
                    light: '#4B5563', // Secondary text
                },
                neutral: {
                    50: '#F9FAFB', // Background off-white
                    100: '#F3F4F6',
                    200: '#E5E7EB',
                    300: '#D1D5DB',
                    400: '#9CA3AF',
                    500: '#6B7280',
                    600: '#4B5563',
                    700: '#374151',
                    800: '#1F2937',
                    900: '#2D2D2D', // Text Neutral - Main text
                }
            },
            fontFamily: {
                sans: ['Outfit', 'Inter', 'sans-serif'],
            },
            container: {
                center: true,
                padding: '1rem',
                screens: {
                    sm: '640px',
                    md: '768px',
                    lg: '1024px',
                    xl: '1280px',
                    '2xl': '1280px', // Max width constraint
                },
            },
            backgroundImage: {
                'hero-gradient': 'radial-gradient(circle at 50% 0%, #EBE9FE 0%, #FFFFFF 50%)',
                'card-gradient': 'linear-gradient(180deg, #FFFFFF 0%, #FAFAFA 100%)',
            },
            boxShadow: {
                'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
                'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
                'glow': '0 0 15px rgba(139, 124, 246, 0.3)', // Lilás Pro glow
                'glow-hover': '0 0 25px rgba(139, 124, 246, 0.5)',
            }
        },
    },
    plugins: [],
}
