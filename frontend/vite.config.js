import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'https://backendpalabra-production.up.railway.app',
      'https://adivinalapalabra-production.up.railway.app'
    ]
  }
});
