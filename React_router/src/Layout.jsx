import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'

function Layout() {
  return (
    <>
    <Header />
    <div className="container mx-auto">
    <Outlet />
    </div>
    <Footer />
    </>
  )
}

export default Layout