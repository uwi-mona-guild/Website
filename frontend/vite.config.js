import { defineConfig } from 'vite'           // Helper function for Vite
import react from '@vitejs/plugin-react'      // React plugin for Vite (important for .jsx and .tsx files)
import tailwindcss from '@tailwindcss/vite'   // Vite support for Tailwind CSS

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],           // Plugins for Vite
  server: {
    port: parseInt(process.env.VITE_FRONTEND_PORT) || 5173    // Port to host site on (default is localhost:5173)
  }
})