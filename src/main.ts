import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PiniaColada, PiniaColadaQueryHooksPlugin } from '@pinia/colada'
import './style.css'
import App from './App.vue'

const pinia = createPinia()

// Configure Pinia Colada with global error handling
createApp(App)
  .use(pinia)
  .use(PiniaColada, {
    plugins: [
      PiniaColadaQueryHooksPlugin({
        onSuccess: (data: unknown) => {
          console.log('[Pinia Colada] Query success:', data)
        },
        onError: (error: unknown) => {
          // Log error for tracking/debugging
          console.error('[Pinia Colada] Query error:', error)

          // Optional: Send to error tracking service (Sentry, LogRocket, etc.)
          // trackError(error)
        }
      })
    ]
  })
  .mount('#app')
