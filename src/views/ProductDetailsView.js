import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../sections/Footer'
import MainMenu from '../sections/MainMenu'

const ProductDetailsView = () => {

    const params = useParams()

    return (
        <>
        <MainMenu />
            <div className="container mt-5">
                <h1>{params.name}</h1>
            </div>
        <Footer />
        </>
    )
}

export default ProductDetailsView