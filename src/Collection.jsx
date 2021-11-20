import React from "react";

const Collection = () => {
    return (
        <>
            <div className="choose1">
                <h1>Create your collection</h1>
                <h3>Upload file</h3>
                <div className="choose">
                    <h5>JPG,PNG,MP4,MP3,MAX 100Mb</h5>
                    <button>CHOOSE FILE</button>

                </div>


                <h3>Upload cover</h3>
                <div className="upload">
                    <h5>JPG,PNG,MP4,MP3,MAX 100Mb</h5>
                    <button>CHOOSE FILE</button>
                </div>
                <h5>Plese add to cover images to your media file</h5>





                <div className="prev">
                    <h3>Preview</h3>
                    <div className="preview">
                        <h5>Upload file to preview your new NFT</h5>

                    </div>
                </div>

            </div >

        </>
    )
}
export default Collection;