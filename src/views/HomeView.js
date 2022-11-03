import React, {useContext} from 'react'
import MainMenu from '../sections/MainMenu'
import TopBanner from '../sections/TopBanner'
import ProductGrid from '../sections/ProductGrid'
import Footer from '../sections/Footer'
import { ProductContext } from '../contexts/contexts'

const HomeView = () => {
  const productContext = useContext(ProductContext)

  window.top.document.title = 'Fixxo.'

  return (
    <>
      <header>
      <MainMenu />
      <TopBanner title="Sale Up To 50% OFF" text="Online shopping free home delivery over $100" />
      </header>
      <ProductGrid title="Featured Products" items={productContext.featuredProducts} />
      <Footer />
    </>
  )
}

export default HomeView