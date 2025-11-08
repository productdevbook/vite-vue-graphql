import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { PiniaColada, PiniaColadaQueryHooksPlugin } from '@pinia/colada'
import './style.css'
import App from './App.vue'
import router from './router'
import { useErrorOverlay } from './composables/useErrorOverlay'

const pinia = createPinia()
const { show } = useErrorOverlay()

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

          // Show full-page overlay
          const message = error instanceof Error
            ? error.message
            : 'An unexpected error occurred. Please try again.'

          show(message)

          // Optional: Send to error tracking service (Sentry, LogRocket, etc.)
          // trackError(error)
        }
      })
    ]
  })
  .use(router)
  .mount('#app')
