import React, { useState } from 'react';
import Logo from '../Myfilles/logoo.webp';
//this serves as link
import {Link} from 'react-router-dom'
//this is icon link you can dowload from (Material Icons - Material UI) as npm
// import ReorderIcon from '@mui/icons-material/Reorder';
// import '../styles/Navbar.css'; // Import CSS for Navbar
function Navbar() {
//show the logo
  const [openLinks, setOpenlinks] =useState(false)

  //we want to change the leffside base on the value of the state ln10
  //ln 16 id (if open links is true) :=else  close
  //tell ur bottone when to click to call function togglenavar (tog=change the value of open links from false to true and if its true , true to false)

  const toggleNavbar =()=>{
    setOpenlinks(!openLinks)
  }
  return (
    <div className='navbar'>
      <div className='leftside' id={openLinks ? 'open' : 'close'}>
        <img src={Logo} alt="Food logo" />
        {/* <div className='hidenlinks'>
        <Link to='/ '> home</Link>
         <Link to='/menu'> menu</Link>
         <Link to='/about'> about</Link>
         <Link to='/contact'> contact</Link>
        </div> */}
      </div>
      <div className='rightside'>
         <Link to='/ '> home</Link>
         <Link to='/menu'> menu</Link>
         <Link to='/about'> about</Link>
         <Link to='/contact'> contact</Link>
         <button onClick={toggleNavbar}> 
         {/* <ReorderIcon /> */}
         </button>
      </div>
    </div>
  );
}

export default Navbar;