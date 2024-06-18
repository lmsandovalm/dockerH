/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx,html}', // Asegúrate de incluir todas las rutas relevantes para tus archivos fuente
  ],
  darkMode: 'media', // Puedes eliminar esta línea si no estás utilizando dark mode
  theme: {
    extend: {
      colors: {
        'custom-blue': '#0a0a27',
      }
    },
  },
  plugins: [
    // Tus plugins de Tailwind CSS aquí
  ],
};