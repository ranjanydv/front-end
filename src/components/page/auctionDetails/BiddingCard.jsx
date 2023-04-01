import React from "react";
import {Link} from "react-router-dom";
import api from "../../common/api.js";

function BiddingCard(props) {
    const getBidder = async () => {
        await api.users.getSingleUser(props.user)
    }
    // getBidder().then((r) => {
    //     console.log(r)
    // })

    function randomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <>
            <li>
                <div className="row d-flex align-items-center">
                    <div className="col-7">
                        <div className="bidder-area">
                            <div className="bidder-img">
                                <img alt="images"
                                     src={`/images/bg/bidder${randomNumberInRange(0, 4)}.png`}/>
                            </div>
                            <div className="bidder-content">
                                <Link to={"#"}><h6>{props.user}</h6>
                                </Link>
                                <p>रु {props.amount}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-5 text-end">
                        <div className="bid-time">
                            <p>{props.time}</p>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}

export default BiddingCard
