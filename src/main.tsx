import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppThemeProvider } from './provider/ThemeProvider.tsx'
import './i18n/i18n.ts'
import { ParallaxProvider } from 'react-scroll-parallax'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ParallaxProvider>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
    </ParallaxProvider>
  </StrictMode>,
)
