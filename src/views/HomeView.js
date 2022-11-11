import React, {useContext} from 'react'
import MainMenu from '../sections/MainMenu'
import TopBanner from '../sections/TopBanner'
import ProductGrid from '../sections/ProductGrid'
import Saletwenty from '../sections/sale29'
import Saleforty from '../sections/sale49'
import WebpageInfo from '../sections/webpageInfo'
import Footer from '../sections/Footer'
import { FeaturedProductsContext, SaleOneProductsContext } from '../contexts/contexts'
import TopPicks from '../sections/TopPicks'


const HomeView = () => {
  const products = useContext(FeaturedProductsContext)
  const products2 = useContext(SaleOneProductsContext)

  window.top.document.title = 'Fixxo.'

  return (
    <>
      <header style={{  
        background: "rgb(230,230,230)",
        background: "linear-gradient(90deg, rgba(230,230,230,1) 0%, rgba(244,244,244,1) 100%)"}}>
      <MainMenu />
      <TopBanner title="Sale Up To 50% OFF" text="Online shopping free home delivery over $100" />
      </header>
      <ProductGrid title="Featured Products" items={products} />
      <TopPicks />
      <Saletwenty title="2 FOR USD $29" items={products2} />
      <Saleforty title="2 FOR USD $49" items={products2} />
      <WebpageInfo />
      <Footer />
    </>
  )
}

export default HomeView