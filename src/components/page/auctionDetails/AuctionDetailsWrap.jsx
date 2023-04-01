import React, {useEffect, useState} from 'react'

import api from "../../common/api.js";

import Header from "../../common/Header.jsx";
import Footer from "../../common/Footer.jsx";
import AuctionInfo from "./AuctionInfo.jsx";
import AuctionTab from "./AuctionTab.jsx";

function AuctionDetailsWrap() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        setLoading(true)
        const productId = "64242fdabe16c0a2b82e378e"
        await api.products.getSingleProduct(productId).then((r) => {
            console.log(r.data.product)
            setProduct(r.data.product)
        })
        setLoading(false)
    }
    return (
        <>
            <Header/>
            <div className="auction-details-section pt-120 pb-120">
                <img alt="images" src={'/images/bg/section-bg.png'} className="img-fluid section-bg-top"/>
                <img alt="images" src={'/images/bg/section-bg.png'} className="img-fluid section-bg-bottom"/>
                {loading ? (
                    <div className={'text-center'}>Loading...</div>
                ) : (
                    <div className="container">
                        <AuctionInfo product={product}/>
                        <AuctionTab product={product}/>
                    </div>
                )}
            </div>
            <Footer/>
        </>
    )
}

export default AuctionDetailsWrap