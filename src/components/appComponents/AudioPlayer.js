import React from 'react';
import Equalizer from './Equalizer';
import "./AudioPlayerStyle.scss"

class AudioPlayer extends React.Component {
    render(){
        const audioPlayerStyle = {
            background: '#303038',
            margin:10,
            padding:40,
            flexGrow:'1',
            borderRadius:10,
            display:'flex',
            flexDirection:'column',
            alignItems: 'center',
            justifyContent:'space-between'
        }
        return(
            <div style={audioPlayerStyle}>
                <Equalizer/>
                <p id="track-info">Track Name - Untitled Artist</p>
                    <div id="play-pause-stop-flex">
                        <button className="music-button">
                            <object type="image/svg+xml" data="images/play-icon.svg" className="music-icon">
                                <img src="images/play-icon.svg" alt="play"></img>
                            </object>
                        </button>
                        <button className="music-button">
                            <object type="image/svg+xml" data="images/pause-icon.svg" className="music-icon">
                                <img src="images/pause-icon.svg" alt="pause"></img>
                            </object>
                        </button>
                        <button className="music-button">
                            <object type="image/svg+xml" data="images/stop-icon.svg" className="music-icon">
                                <img src="images/stop-icon.svg" alt="stop"></img>
                            </object>
                        </button>
                    </div>
            </div>
        )
    }
}

export default AudioPlayer;