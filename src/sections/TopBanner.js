import React from 'react'
import WomanLeft from '../assets/images/woman-on-chair.png'
import WomanRight from '../assets/images/person-sitting.png'

const TopBannerSection = ({title, text}) => {
  return (
    <section className="sale-50">
        <div className="container">
            <img src={WomanLeft} alt="picture" />
            <div className="sale-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <button className="btn-red">
                  <div className="btn-box-left"></div>
                  SHOP NOW
                  <div className="btn-box-right"></div>
                </button>
            </div>
            <img src={WomanRight} alt="picture" />
        </div>
    </section>
  )
}

export default TopBannerSection