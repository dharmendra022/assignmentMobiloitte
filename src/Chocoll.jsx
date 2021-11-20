import React from "react";

const Chocoll = () => {
    return (
        <>
            <div>
                <div>
                    <div className="col1">
                        <span></span>
                        <label htmlFor="">Create</label>
                    </div>
                    <div className="col2">
                        <span></span>
                        <label htmlFor="">Fungy</label>
                    </div>
                </div>

                <form action="">
                    <div>
                        <label htmlFor="">Title</label>
                        <input type="text" placeholder="eg.Start with logo" />
                    </div>
                    <div>
                        <label htmlFor="">Descripation <span>Optional</span></label>
                        <input type="text" name="" id="" placeholder="after purchasing your item" />
                        <h3>Lorem ipsum dolor, sit amet consectetur adipisicing.</h3>
                    </div>

                    <div>
                        <label htmlFor="">Roylaties <span>Optional</span></label>
                        <input type="text" name="" id="" placeholder="eg. 10%" />
                        <h5>Suggestion 20%,27%,50%</h5>
                    </div>

                    <button className="btn">HIDE ADVANCED SETTING</button>
                    <div>

                        <div>
                            <label htmlFor="">Properties <span>optional</span></label>
                            <input type="text" name="" id="" placeholder="eg.Sim" />
                            <input type="text" name="" id="" placeholder="eg.M" />
                            <h5>Suggestion 20%,27%,50%</h5>
                        </div>

                        <div>
                            <label htmlFor="">Alternative text for NFT <span>optional</span></label>
                            <input type="text" name="" id="" placeholder="eg.Sim" />
                            <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, at!</h3>
                            <button>CREATE ITEM</button>
                        </div>
                    </div>


                </form>

            </div>
        </>
    )
}
export default Chocoll;
