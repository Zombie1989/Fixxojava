import React from 'react'
import closeUpLeft from '../assets/images/close-up-jacket1.png'
import closeUpRight from '../assets/images/close-up-jacket2.png'

const TopPicks = () => {
  return (
    <div className="top-picks">
        <div className="container">
          <div className="left-picks">
            <img src={closeUpLeft} alt="picture" />
            <div className="left-text">
              <h5>Pamela Reif's Top Picks</h5>
              <button className="btn-dark">
                <div className="btn-box-left"></div>
                SHOP NOW
                <div className="btn-box-right"></div>
              </button>
            </div>
          </div>
          <div className="right-picks">
            <div className="right-text">
              <h5>Let's Be Conscious</h5>
              <button className="btn-white">
                <div className="btn-box-left-dark"></div>
                FLASH SALE
                <div className="btn-box-right-dark"></div>
              </button>
            </div>
            <img src={closeUpRight} alt="picture" />
          </div>
        </div>
    </div>
  )
}

export default TopPicks