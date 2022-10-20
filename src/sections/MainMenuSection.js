import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'

const MainMenuSection = () => {
  return (
    <nav className="header container">
      <div className="header-logo">
        <h1>Fixxo.</h1>
      </div>
      <div className="header-menu">
        <NavLink className="header-link" to="/" end>Home</NavLink>
        <NavLink className="header-link" to="/categories" end>Categories</NavLink>
        <NavLink className="header-link" to="/products" end>Products</NavLink>
        <NavLink className="header-link" to="/contacts" end>Contacts</NavLink>
      </div>
      <div className="menu-icons">
        <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
        <MenuIcon link="/compare" icon="fa-regular fa-code-compare"/>
        <MenuIcon quantity="3" link="/wishlist" icon="fa-regular fa-heart"/>
        <MenuIcon quantity="7" link="/shoppingcart" icon="fa-regular fa-bag-shopping"/> 
      </div>
    </nav>
  )
}

export default MainMenuSection