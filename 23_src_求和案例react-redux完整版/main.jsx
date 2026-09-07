import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import store from './redux/store'
import {Provider} from 'react-redux'



import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    //provider是让所有的容器组件都能接收到store
    <Provider store={store}>
        <App />
    </Provider>
    
  
  </StrictMode>
 /*  store.subscribe(() => {
    createRoot(document.getElementById('root')).render(
      <StrictMode>
     
          <App />
      
      </StrictMode>,
    )
  }
) */
)
