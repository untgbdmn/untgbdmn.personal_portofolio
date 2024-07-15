import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import imagePresets from 'vite-plugin-image-presets';

export default defineConfig({
  plugins: [
    react(),
    imagePresets({
      default: {
        preset: 'cover',
        modifiers: {
          format: 'webp',
          width: 800,
          quality: 75,
        },
      },
    }),
  ],
  base: "/untgbdmn.personal_portofolio/"
});
