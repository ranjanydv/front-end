import React from 'react'
import Counter from '../../common/Counter'

function AuctionInfo(props) {
    const handleBid = (e) => {
        e.preventDefault()
    }


    const countdownDate = new Date("Jul 30, 2023, 11:00:00")
    return (
        <>
            <div className="row g-4 mb-50">
                <div
                    className="col-xl-6 col-lg-7 d-flex flex-row align-items-start justify-content-lg-start justify-content-center flex-md-nowrap flex-wrap gap-4">
                    <div
                        className="tab-content mb-4 d-flex justify-content-lg-start justify-content-center  wow fadeInUp"
                        data-wow-duration="1.5s" data-wow-delay=".4s">
                        <div className="tab-pane big-image fade show active" id="gallery-img1">
                            <div
                                className="auction-gallery-timer d-flex align-items-center justify-content-center flex-wrap">
                                <h3 id="countdown-timer-1"><Counter date={countdownDate}/></h3>
                            </div>
                            <img alt="images" src={props.product.image} className="img-fluid ratio-image"/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-5">
                    <div className="product-details-right  wow fadeInDown" data-wow-duration="1.5s"
                         data-wow-delay=".2s">
                        <h3>{props.product.name}</h3>
                        <p className="para">
                            {props.product.description}
                        </p>
                        <h4>Bidding Price: <span> रु {props.product.price}</span></h4>
                        <div className="bid-form">
                            <div className="form-title">
                                <h5>Bid Now</h5>
                                <p>Bid Amount : Minimum Bid रु 1000.00</p>
                            </div>
                            <form>
                                <div className="form-inner gap-2">
                                    <input type="text" placeholder="रु 00.00"/>
                                    {/*<button className="eg-btn btn--primary btn--sm" onSubmit={(e) => e.preventDefault()}*/}
                                    <button className="eg-btn btn--primary btn--sm" onSubmit={e => handleBid(e)}
                                            type="submit">Place Bid
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuctionInfo