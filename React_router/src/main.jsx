import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import AboutUs from './Components/About-us.jsx'
import ContactUs from './Components/Contact-us.jsx'
import Github, { GithubInfo } from './Components/Github.jsx'
import User from './Components/User.jsx'

const  router = createBrowserRouter ( 
  createRoutesFromElements (
    <Route path='/' element={<Layout />} >
      <Route path='' element={<Home />} />
      <Route path='About' element={<AboutUs />} />
      <Route path='contact-us' element={<ContactUs />} />
      <Route 
      loader={GithubInfo}
      path='Github'
       element={<Github />} />
       <Route path='User/' element={<User />} >
       <Route path=':userid' element={<User />} />
       </Route>
       <Route path='*' element={<div>Not Found</div>} />
    </Route>

    
) 
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router ={router} />
  </React.StrictMode>
)
