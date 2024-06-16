import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Cards from './components/Cards'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Cards userName="Anum" Post="Software Engineering" urlA="/profile.jpg"/> 
    <Cards />
  </React.StrictMode>,
)
