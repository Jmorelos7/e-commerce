import React from 'react'
import { Link } from 'react-router-dom'
import './styles/headerNavbar.css'

const Header = () => {
  return (
    <div className='navbar'>
      <div className='fixed'>
        <nav className='nav'>
          <div className='title-e'>
        <h1 className='title'><Link to='/'>e-commerce</Link></h1>
        </div>
      <ul className='icon__only'>
        <div className='div__icons'>
        <li className='icon'><Link to='/login'><i className="fa thin fa-user"></i></Link></li>
        <li className='icon'><Link to='/cart'><i className="fa solid fa-cart-shopping"></i></Link></li>
        <li className='icon'><Link to='/purchases'><i className="fa solid fa-bag-shopping"></i></Link></li>
        </div>
      </ul>
      </nav>
      </div>
    </div>
  )
}

export default Header
