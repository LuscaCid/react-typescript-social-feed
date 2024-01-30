import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes/index.routes.tsx'
import { FeedContext } from './hook/FeedContext.tsx'
import { AuthContextProvider } from './hook/AuthContext.tsx'
import {Header} from './components/header'
import './global.css'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContextProvider>
      <FeedContext>
        <Header />
        < Routes />
      </FeedContext>
    </AuthContextProvider>
    
  </React.StrictMode>,
)
