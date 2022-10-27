import React, { useState } from 'react'
import ProductCard from '../components/ProductCard'

const ProductGridSection = ({title}) => {

  const [products, setProducts] = useState ([
    { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, imgUrl: "" },
    { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, imgUrl: "" },
    { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, imgUrl: "" },
    { id: 1, productName: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, imgUrl: "" }
  ])


  return (
    <section className="product-grid">
      <div className="container">
        <h3>{title}</h3>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {
            products.map(product => <ProductCard item={product} />)
          }

        </div>
      </div>
    </section>
  )
}

export default ProductGridSection