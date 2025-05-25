import * as React from "react"
import Menu from "./components/Menus/Menus";
//import Menu from "./components/Menus/Menus";

export default function Home() {

  const menuData = [
    { label: 'Home' },
    { label: 'About' },
    { 
      label: 'Services', 
      submenu: [
        { label: 'Web Development' },
        { label: 'SEO' }
      ]
    },
    { label: 'Contact' }
  ];
  

  return <div> gatsby 

<Menu menuData={menuData} title="Main Menu" />

  </div>
}
