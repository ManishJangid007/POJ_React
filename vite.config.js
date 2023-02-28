import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Plate of Joy",
        short_name: "POJ",
        theme_color: "#FFF4D8",
        background_color: "#fafafa",
        display: "standalone",
        scope: "/",
        start_url: "/",
        icons: [
          {
            "src": "assets/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png",
            "purpose": "maskable any"
          },
          {
            "src": "assets/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable any"
          }
        ]
      },
      workbox: {
        runtimeCaching: [{
          urlPattern: ({ url }) => url.pathname.startsWith("/api"),
          handler: "CacheFirst",
          options: {
            cacheName: "api-catch",
            cacheableResponse: {
              statuses: [0, 200]
            }
          }
        }]
      }
    })
  ],
})
