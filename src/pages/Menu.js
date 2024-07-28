import React from "react";
// import menu list
import { MenuList } from "../helpers/MenuiList";


function Menu() {
  return (
    
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem , Key) =>{
        // return anew div
        return <div>{menuItem.name}</div>
      })}</div>
    </div>
  );
}

export default Menu;