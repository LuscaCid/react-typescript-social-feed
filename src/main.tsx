import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './pages/Feed/App.jsx'
import {FeedContext} from './hook/FeedContext.tsx'
import { AuthContextProvider } from './hook/AuthContext.tsx'
import './global.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <FeedContext>
        < App />
      </FeedContext>
    </AuthContextProvider>
    
  </React.StrictMode>,
)
