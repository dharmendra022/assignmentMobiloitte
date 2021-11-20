import React from "react";
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimelapseIcon from '@mui/icons-material/Timelapse';
const Choose = () => {
    return (
        <>
            <div className="card1">
                <div className="card2">
                    <h3>Enter price to show users purchase your NFT</h3>
                    <div className="price">
                        <span><LocalOfferIcon /></span>
                        <h3>Fixed Price</h3>

                    </div>
                    <div className="timed">
                        <span><TimelapseIcon /></span>
                        <h3>Timed Aucation</h3>

                    </div>
                </div>

                <div className="price1">
                    <h3>Price</h3>
                    <input type="text" />


                </div>
                <div>
                    <div>
                        <label className="text1">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, incidunt.
                        </label>
                    </div>
                    <div>
                        <label className="text2">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae?
                        </label>
                    </div>
                    <hr />
                    <div>
                        <label className="text3">
                            Lorem ipsum dolor sit amet.
                        </label>
                    </div>
                    <div>
                        <label className="text4">
                            Lorem ipsum dolor sit amet consectetur adipisicing.
                        </label>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Choose;