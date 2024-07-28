import React from 'react'
import { Link } from 'react-router-dom';
import Bannerbackimage from '../Myfilles/food2.jpg'
import '../styles/Home.css'

function Home() {
  return (
    //this div hold tags
    <div className='home' style={{ backgroundImage: `URL(${Bannerbackimage})` }}>

      {/* add a background image =strt style and url is the pass of the image */}
      <div className='headerContainer' >
        <h1>Pedro's pizzeria</h1>
        <p>pizza to fit any teaste</p>
        {/* when u click connctds u menu */}
        {/* this link mades the whole botton work like link */}
        <Link to='/menu'>
        <button> order now</button>
        </Link>
        
      </div>
      
    </div>
  )
}

export default Home
