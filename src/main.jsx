import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CompareProvider } from './contexts/CompareContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CompareProvider>
      <App />
    </CompareProvider>
  </React.StrictMode>,
)