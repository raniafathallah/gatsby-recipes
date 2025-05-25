import React from "react"

import Menus from "./Menus/Menu"
import Footer from "./Footer"


import "normalize.css"
import "../../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <>
      <Menus />
      {children}
      <Footer />
    </>
  )
}

export default Layout