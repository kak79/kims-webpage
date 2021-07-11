import React from 'react' 

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/blogs">Blog</Link>
      {/* <Link to="/Portfolio">Portfolio</Link> */}
    </nav>
  )
}

export {NavBar};