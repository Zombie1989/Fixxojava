import React from 'react'
import { NavLink } from 'react-router-dom'

const ProductCard = ({item}) => {
  return (
    <div className="col">
        <div className="card">
            <div className="card-img">
                <div className="card-menu">
                    <button className="menu-link"><i className="fa-regular fa-heart"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-code-compare"></i></button>
                    <button className="menu-link"><i className="fa-regular fa-bag-shopping"></i></button>
                </div>
                <NavLink to="/products/" className="btn-card">
                    <span className="btn-box-left"></span>
                    Quick View
                    <span className="btn-box-right"></span>
                </NavLink>
            </div>
            <div className="card-body">
                <p className="card-category">{item.category}</p>
                <h5 className="card-title">{item.name}</h5>
                <p className="card-rating">
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                    <i className="fa-sharp fa-solid fa-star"></i>
                </p>
                <div className="prices">
                    <p className="old-price">{item.price}</p>
                    <p className="regular-price">{item.price}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard