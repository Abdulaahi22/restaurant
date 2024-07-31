import React from "react";
// import menu list
import { MenuList } from "../helpers/MenuiList";
import MenuItem from "../components/MenuItem";
// css 
import "../styles/Menu.css"


function Menu() {
  return (
    
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem , Key) =>{
        // return anew div
        return <MenuItem

                Key={Key}
                image={menuItem.image} name={menuItem.name} price={menuItem.price}
                
                />
      })}</div>
    </div>
  );
}

export default Menu;