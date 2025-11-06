// FILE: src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import RouterApp from './Routes/Router.jsx'
import './styles/tailwind.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterApp />
    <ToastContainer position="top-right" autoClose={2000} newestOnTop />
  </React.StrictMode>
)
