import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DepenseContextProvide from './component/utils/DepenseContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DepenseContextProvide>
      <App />
    </DepenseContextProvide>
  </React.StrictMode>,
)
