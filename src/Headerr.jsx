import React from "react";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, IconButton } from '@material-ui/core';

import { SearchOutlined } from '@material-ui/icons';

const Headerr = () => {
    return (
        <>
            <div className="header">
                <h1>Fungy</h1>
                {/* <TextField
                    id="standard-bare"
                    variant="outlined"
                    className="search"
                    defaultValue="Search "
                    InputProps={{
                        endAdornment: (

                            <IconButton>
                                <SearchOutlined />

                            </IconButton>
                        ),
                    }}
                /> */}
                <input type="search" className="search" placeholder="Search" />
                <h3>Explore</h3>
                <h3>My Items</h3>
                <h3>Fallowing</h3>
                <h3>Activity</h3>
                <h3>How It Works</h3>
                <h3>Commubity</h3>
                <span className="notification"><NotificationsNoneIcon /></span>
                <button className="btnHeader">O TWON</button>
                <img src="./images/gulab.jpg" alt="" className="ima" />


            </div>
            <hr />

        </>
    )
}
export default Headerr;