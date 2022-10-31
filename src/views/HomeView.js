import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import ProductGridSection from '../sections/ProductGridSection'

const HomeView = () => {

  window.top.document.title = 'Fixxo.'

  const [products, setProducts] = useState ([
    { id: 1, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/6698725/pexels-photo-6698725.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 2, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/6004828/pexels-photo-6004828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 3, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/11466692/pexels-photo-11466692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 4, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/13592506/pexels-photo-13592506.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 5, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/9562533/pexels-photo-9562533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 6, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/14162139/pexels-photo-14162139.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 7, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/3431419/pexels-photo-3431419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
    { id: 8, name: "Modern Black Blouse", category: "Fashion", price: "$30.00", rating: 5, img: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" }
  ])

  return (
    <>
      <header>
      <MainMenuSection />
      <ProductGridSection title="Featured Products" products={products}/>
      <FooterSection />
      </header>
    </>
  )
}

export default HomeView