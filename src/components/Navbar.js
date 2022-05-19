import React from 'react'

 function Navbar() {
  return (
    <div className='container fade-in three hero-foot' id='navMenu'>
      <hr/>
        <nav className='navbar' >
            <div className='navbar-menu' >
                <a className='navbar-item' href='#about' >About</a>
                {/* <a className='navbar-item' href='#blog'>Blog</a> */}
                <a className='navbar-item' href='#contact'>Contact</a>
            </div>
        </nav>
      <hr/>
    </div>
  )
}

export default Navbar;
