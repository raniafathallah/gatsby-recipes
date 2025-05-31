import React from "react"

import Menus from "./Menus/Menu"
import Footer from "./Footer"


import "normalize.css"
import "../../assets/css/main.css"
import "../../assets/css/style.css"
import "../../assets/css/footer.css"


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