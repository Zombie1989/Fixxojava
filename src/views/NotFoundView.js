import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'

const NotFoundView =() => {
    return (
        <>
            <MainMenuSection />
            <div className="container d-flex justify-content-center align-items-center" style={{ height: "900px" }}>
                <div>404 - Page Not Found</div>
            </div>
            <div style={{ position: "fixed", bottom: "0", width: "100%" }}>
                <FooterSection />
            </div>
        </>
    )
}

export default NotFoundView