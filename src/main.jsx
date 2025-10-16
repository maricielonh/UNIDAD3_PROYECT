import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
    ></script>


    
  </StrictMode>,

  



)
