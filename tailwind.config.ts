import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        céu: '#41B6E6',
        sol: '#FFD166',
        folha: '#7BC950',
        coral: '#FF6B6B',
        uva: '#7C3AED',
        noite: '#172554'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(23, 37, 84, 0.12)'
      },
      borderRadius: {
        '3xl': '1.75rem'
      }
    }
  },
  plugins: []
};

export default config;
