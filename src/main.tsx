import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AppThemeProvider } from './provider/ThemeProvider.tsx'
import './i18n/i18n.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <AppThemeProvider>
        <App />
      </AppThemeProvider>
  </StrictMode>,
)
