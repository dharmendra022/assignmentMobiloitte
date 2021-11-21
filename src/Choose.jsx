import React from "react";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimelapseIcon from '@mui/icons-material/Timelapse';
const Choose = () => {
    return (
        <>
            <div className="card1">
                <div className="card2">
                    <h3>Enter price to show users purchase your NFT</h3>

                    <div className="box">
                        <div className="price">
                            <div className="tim">
                                <span><LocalOfferIcon /></span>
                                <h3>Fixed Price</h3>
                            </div>

                        </div>

                        <div className="timed">
                            <div className="tim">
                                <span><TimelapseIcon /></span>
                                <h3>Timed Aucation</h3>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="price1">
                    <h3>Price</h3>
                    <input type="text" className="tex" />




                </div>
                <div>
                    <div>
                        <label className="text1">
                            Service Fess <span className="per">2.5%</span>
                        </label>
                    </div>
                    <div>
                        <label className="text2">
                            You will recive <span className="dol"> 0.63$TH </span> <span className="per">$6.95885785</span>
                        </label>
                    </div>

                </div>
            </div>
        </>
    )
}
export default Choose;