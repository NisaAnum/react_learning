import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './components/login.jsx'
import Profile from './components/profile.jsx'
import ContextProvider from './context/contextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <ContextProvider>
      <div className="bg-gray-500 w-full h-screen grid place-items-center">
        <div className="w-full max-w-lg text-center">
          <App />
          <Login />
          <Profile />
        </div>
      </div>
    </ContextProvider>
     
  </React.StrictMode>,
)
