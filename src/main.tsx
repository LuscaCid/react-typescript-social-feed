import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes } from './routes/index.routes.tsx'
import { FeedContext } from './hook/FeedContext.tsx'
import { AuthContextProvider } from './hook/AuthContext.tsx'
import {Header} from './components/header'
import { ThemeProvider } from 'styled-components'
import './global.css'
import { defaultTheme } from './styles/defaultTheme.ts'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <AuthContextProvider>
        <FeedContext>
          <Header />
          < Routes />
        </FeedContext>
      </AuthContextProvider>  
    </ThemeProvider>
    
  </React.StrictMode>,
)
