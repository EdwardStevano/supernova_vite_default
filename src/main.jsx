import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RouteConfig from './config/routes/routes'

// Style import
import './assets/styles/_mixStyle.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteConfig />
    </BrowserRouter>
  </React.StrictMode>,
)
