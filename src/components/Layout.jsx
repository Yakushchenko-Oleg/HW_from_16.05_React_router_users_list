// import React from 'react'

import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import Bunner from "./Bunner"

const Layout = () => {
  return (
    <>
      <Bunner/>
      <Navbar/>
      <div className="pagesCont">
          <Outlet/>
      </div>
      <Footer/>
    </>
    
  )
}

export default Layout
