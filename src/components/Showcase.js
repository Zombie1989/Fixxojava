import React from 'react'
import LeftImage from '../assets/images/showcase-left.png'
import RightImage from '../assets/images/showcase-right.png'

const Showcase = () => {
  return (
    <section className="showcase grey">
      <div className="container">
        <img src={LeftImage} alt="placeholder" />
          <div className="showcase-text">
            <h1>SALE UP <br /> TO 50% OFF</h1>
            <p>Online shopping free home delivery over $100</p>
            <button className="btn-red">
                <div className="btn-box-left"></div>
                SHOP NOW
                <div className="btn-box-right"></div>
            </button>
          </div>
        <img src={RightImage} alt="placeholder" />

      </div>
    </section>
  )
}

export default Showcase