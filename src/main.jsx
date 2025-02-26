import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../coponentes/App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
