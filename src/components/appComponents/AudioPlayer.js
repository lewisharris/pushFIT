import React from 'react';
import Equalizer from './Equalizer';
import "./AudioPlayerStyle.scss"

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
                            <object type="image/svg+xml" data="images/prev-icon.svg" className="music-icon">
                                <img src="images/prev-icon.svg" alt="play"></img>
                            </object>
                        </button>
                        <button className="music-button">
                            <object type="image/svg+xml" data="images/pause-icon.svg" className="music-icon">
                                <img src="images/pause-icon.svg" alt="pause"></img>
                            </object>
                        </button>
                        <button className="music-button">
                            <object type="image/svg+xml" data="images/next-icon.svg" className="music-icon">
                                <img src="images/next-icon.svg" alt="stop"></img>
                            </object>
                        </button>
                    </div>
            </div>
        )
    }
}

export default AudioPlayer;