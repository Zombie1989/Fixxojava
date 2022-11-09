import React from 'react'
import saletwenty from '../assets/images/sale49.png'
import ProductCard from '../components/ProductCard'

const sale29 = ({items = []}) => {
  return (
    <div className="sale49">
        <div className="container">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-2 g-2 ">

                {
                items.map( product => <ProductCard key={product.articleNumber} item={product} />)
                }
                
            </div>
            <div className="image">
              <img src={saletwenty} alt="picture" />
              <div className="image-text">
                <h1>2 FOR USD $49</h1>
                <button className="btn-white">
                  <div className="btn-box-left-dark"></div>
                  FLASH SALE
                  <div className="btn-box-right-dark"></div>
                </button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default sale29
