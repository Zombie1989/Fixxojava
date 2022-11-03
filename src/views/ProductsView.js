import React, { useContext } from 'react'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'
import ProductGrid from '../sections/ProductGrid'
import { ProductContext } from '../contexts/contexts'


const ProductsView = () => {
  const productContext = useContext(ProductContext)

  window.top.document.title = 'Products | Fixxo.'
  
  return (
    <>
      <MainMenu />
      <ProductGrid title="Products" items={productContext.all} />
      <Footer />

    </>
  )
}

export default ProductsView