import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/figma_practice2/',
  plugins: [
    tailwindcss(),
  ],
})