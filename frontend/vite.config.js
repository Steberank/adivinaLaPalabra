import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'backendpalabra-production.up.railway.app',
      'adivinalapalabra-production.up.railway.app'
    ]
  }
});
