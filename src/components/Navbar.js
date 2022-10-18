import React from 'react'

const Navbar = () => {
  return (
    <nav className="top-header grey">
      <div className="container">
        <div className="header-logo">
          <h1>Fixxo.</h1>
        </div>
        <div className="header-menu">
          <span className="active-page">Home</span>
          <a href="#" className="other-page mouse-over">Categories</a>
          <a href="#" className="other-page mouse-over">Products</a>
          <a href="contacts.html" className="other-page mouse-over">Contacts</a>
        </div>
        <div className="links">
          <a href="#"><i className="fa-solid fa-magnifying-glass mouse-over"></i></a>
          <a href="#"><i className="fa-solid fa-repeat mouse-over"></i></a>
          <a href="#">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">1</span>
            <i className="fa-regular fa-heart mouse-over"></i>
          </a>
          <a href="#">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">3</span>
            <i className="fa-regular fa-bag-shopping mouse-over"></i>
          </a>    
        </div>
      </div>
    </nav>
  )
}

export default Navbar