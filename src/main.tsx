import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {FeedContext} from './hook/FeedContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FeedContext>
      < App />

    </FeedContext>
  </React.StrictMode>,
)
