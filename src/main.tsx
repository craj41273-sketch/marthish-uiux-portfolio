import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Theme } from '@astryxdesign/core/theme'

import App from './App'
import { portfolioTheme } from './theme/portfolioTheme'
import './index.css'

const root = document.getElementById('root')
if (!root) throw new Error('Root element #root was not found')

createRoot(root).render(
  <StrictMode>
    <Theme theme={portfolioTheme} mode="dark">
      <App />
    </Theme>
  </StrictMode>,
)
