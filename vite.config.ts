import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served from https://<user>.github.io/cloud-cheatsheet/ on GitHub Pages.
// Base is only applied for the production build; dev stays at '/'.
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/cloud-cheatsheet/' : '/',
  plugins: [react(), tailwindcss()],
}))
