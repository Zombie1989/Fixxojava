import React, { useEffect, useState } from 'react';
import './style.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactsView from './views/ContactsView';
import ProductsView from './views/ProductsView';
import ProductDetailsView from './views/ProductDetailsView';
import NotFoundView from './views/NotFoundView';
import { ProductContext, FeaturedProductsContext, SaleOneProductsContext } from './contexts/contexts'

function App() {
  const [products, setProducts] = useState([])
  const [featured, setFeatured] = useState([])
  const [saleOne, setSaleOne] = useState([])

  useEffect(() => {
    const fetchAllData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products')
      setProducts(await result.json())
    }
    fetchAllData()

    const fetchFeaturedData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=8')
      setFeatured(await result.json())
    }
    fetchFeaturedData()

    const fetchSaleOneData = async () => {
      const result = await fetch('https://win22-webapi.azurewebsites.net/api/products?take=4')
      setSaleOne(await result.json())
    }
    fetchSaleOneData()


  }, [setProducts, setFeatured, setSaleOne])  


  return (
    <BrowserRouter>
      <ProductContext.Provider value={products}>
      <FeaturedProductsContext.Provider value={featured}>
      <SaleOneProductsContext.Provider value={saleOne}>
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/contacts" element={<ContactsView />} />
          <Route path="/products" element={<ProductsView />} />
          <Route path="/products/:id" element={<ProductDetailsView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
      </SaleOneProductsContext.Provider>
      </FeaturedProductsContext.Provider >
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
