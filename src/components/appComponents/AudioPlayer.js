import React from 'react';
import Equalizer from './Equalizer';
import "./AudioPlayerStyle.scss";
import prevIcon from '../../images/prev-icon.svg';
import pauseIcon from '../../images/pause-icon.svg';
import nextIcon from '../../images/next-icon.svg';

class AudioPlayer extends React.Component {
    render(){

        return(
            <div className='audio-player'>
                <h3>Audio Player</h3>
                <hr></hr>
                <Equalizer/>
                <p id="track-info">Track Name - Untitled Artist</p>
                    <div id="play-pause-stop-flex">
                        <button className="music-button">
                            <object type="image/svg+xml" data={prevIcon} className="music-icon">
                                <img src={prevIcon} alt="play"></img>
                            </object>
                        </button>
                        <button className="music-button">
                            <object type="image/svg+xml" data={pauseIcon}  className="music-icon">
                                <img src={pauseIcon} alt="pause"></img>
                            </object>
                        </button>
                        <button className="music-button">
                            <object type="image/svg+xml" data={nextIcon} className="music-icon">
                                <img src={nextIcon} alt="stop"></img>
                            </object>
                        </button>
                    </div>
            </div>
        )
    }
}

export default AudioPlayer;