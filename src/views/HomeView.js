import React, {useContext} from 'react'
import MainMenu from '../sections/MainMenu'
import TopBanner from '../sections/TopBanner'
import ProductGrid from '../sections/ProductGrid'
import Footer from '../sections/Footer'
import { ProductContext } from '../contexts/contexts'
import TopPicks from '../sections/TopPicks'

const HomeView = () => {
  const productContext = useContext(ProductContext)

  window.top.document.title = 'Fixxo.'

  return (
    <>
      <header style={{  
        background: "rgb(230,230,230)",
        background: "linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(244,244,244,1) 100%)"}}>
      <MainMenu className="colorGradient" />
      <TopBanner title="Sale Up To 50% OFF" text="Online shopping free home delivery over $100" />
      </header>
      <ProductGrid title="Featured Products" items={productContext.featuredProducts} />
      <TopPicks />
      <Footer />
    </>
  )
}

export default HomeView