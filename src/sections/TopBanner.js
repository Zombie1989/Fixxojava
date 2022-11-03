import React from 'react'

const TopBannerSection = ({title, text}) => {
  return (
    <section className="sale-50">
        <div className="container">
            <div className="sale-text">
                <h1>{title}</h1>
                <p>{text}</p>
                <button className="btn-red">
                    <div className="btn-box-left"></div>
                    SHOP NOW
                    <div className="btn-box-right"></div>
                </button>
            </div>

        </div>
    </section>
  )
}

export default TopBannerSection