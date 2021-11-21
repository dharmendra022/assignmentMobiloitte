import React from 'react';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import MusicVideoIcon from '@mui/icons-material/MusicVideo';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LanguageIcon from '@mui/icons-material/Language';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const Room = () => {
    return (
        <><div>
            <h3 className="room1">Room Category</h3>
            <div className="room">

                <div>

                    <h5><PieChartOutlineIcon /> Art</h5>
                    <h5><MusicVideoIcon /> Music</h5>
                    <h5><SportsEsportsIcon /> Games</h5>

                </div>
                <div>
                    <h5><AddCircleOutlineIcon /> Notw</h5>
                    <h5><SentimentSatisfiedIcon /> Memes</h5>
                    <h5><EmojiPeopleIcon /> Punts</h5>


                </div>
                <div>
                    <h5><AttachMoneyIcon /> DOPI</h5>
                    <h5><LanguageIcon /> Domains</h5>
                    <h5><StarPurple500Icon /> Star</h5>

                </div>
                <div>
                    <h5><CameraAltIcon /> Photography</h5>

                </div>
            </div>
        </div>
        </>
    )
}
export default Room;