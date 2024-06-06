import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    server: {
      host: '0.0.0.0', // Specify your host here (e.g., 'localhost' or '0.0.0.0')
      port: 3000       // Specify your port here
    }
  });