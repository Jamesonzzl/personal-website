import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { sitesOutput } from './build/sitesOutput'

export default defineConfig({
  plugins: [react(), sitesOutput()],
})
