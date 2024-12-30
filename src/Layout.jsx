import React from 'react'

import Footer from './Components/footer/Footer'
import { Outlet } from 'react-router-dom'
import NavBar from './Components/NavBar/NavBar'

const Layout = () => {
  return (
    <div>
      <NavBar />

      <div className="w-full h-auto">
         <Outlet />
      </div>

      <Footer />

    </div>
  )
}

export default Layout
