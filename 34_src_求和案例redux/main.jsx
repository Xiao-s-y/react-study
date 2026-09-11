import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './redux/store.js'



import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 
      <App />
  
  </StrictMode>,
  store.subscribe(() => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
     
          <App />
      
      </StrictMode>,
    )
  }
)
)
