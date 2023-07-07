import React from 'react'

import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navContainer'>
        <ul className='navList'>
  <li><Link to="/home">Home</Link></li>
  <li><Link to ="/posts">Posts</Link></li>
  <li><Link to="/Contact">Contact</Link></li>
  <li><Link to="/About">About</Link></li>
  <li><Link to="/tasklist">Tasklist</Link></li>
</ul>
    </div>
  )
}

export default Navbar