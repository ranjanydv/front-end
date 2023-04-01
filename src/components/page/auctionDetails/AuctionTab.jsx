import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import BiddingCard from "./BiddingCard.jsx";

function AuctionTab(props) {
    const [bids, setBids] = useState([]);
    const [loading, setLoading] = useState(false);

    // to get bid information
    useEffect(() => {
        setLoading(true)
        getAllBids()
    }, [props]);

    // useEffect(() => {
    //     return () => {
    //         effect
    //     };
    // }, []);


    const getAllBids = async () => {
        await setBids(props.product.bids)
        setLoading(false)
    }
    console.log(bids)

    // const countdownDate = new Date("Jul 30, 2023, 01:00:00")
    const scrollTop = () => window.scrollTo({top: 0, behavior: "smooth"})
    return (
        <>
            <div className="row d-flex justify-content-center g-4">
                <div className="col-lg-8">
                    <ul className="nav nav-pills d-flex flex-row justify-content-start gap-sm-4 gap-3 mb-45 wow fadeInDown"
                        data-wow-duration="1.5s" data-wow-delay=".2s" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link  details-tab-btn" id="pills-home-tab"
                                    data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab"
                                    aria-controls="pills-home" aria-selected="true">Bidding History
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active wow fadeInUp" data-wow-duration="1.5s"
                             data-wow-delay=".2s" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <div className="bid-list-area">
                                <ul className="bid-list">
                                    {loading ? (
                                        <div className="row d-flex justify-content-center">
                                            <h6 className="text-center">... Loading</h6>
                                        </div>
                                    ) : (
                                        <>
                                            {bids && bids.map((bid, index) => {
                                                return (
                                                    <BiddingCard amount={bid.bidAmount} user={bid.bidder}
                                                                 time={bid.timestamp} key={index}/>
                                                    // <li key={index}>
                                                    //     <div className="row d-flex align-items-center">
                                                    //         <div className="col-7">
                                                    //             <div className="bidder-area">
                                                    //                 <div className="bidder-img">
                                                    //                     <img alt="images"
                                                    //                          src={`/images/bg/bidder${randomNumberInRange(0, 4)}.png`}/>
                                                    //                 </div>
                                                    //                 <div className="bidder-content">
                                                    //                     <Link to={"#"}><h6>Anon User {index + 1}</h6>
                                                    //                     </Link>
                                                    //                     <p>रु {bid.bidAmount}</p>
                                                    //                 </div>
                                                    //             </div>
                                                    //         </div>
                                                    //         <div className="col-5 text-end">
                                                    //             <div className="bid-time">
                                                    //                 <p>{bid.timestamp}</p>
                                                    //             </div>
                                                    //         </div>
                                                    //     </div>
                                                    // </li>
                                                )
                                            })}
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="blog-sidebar">
                        <div className="sidebar-banner wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">
                            <span>Cars</span>
                            <h3>Toyota AIGID A Clasis Cars Sale</h3>
                            <Link to={`/auction-details`} onClick={scrollTop}
                                  className="eg-btn btn--primary card--btn">Details</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuctionTab