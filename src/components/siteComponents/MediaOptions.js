import React from 'react';
import './MediaOptions.scss';


const MediaOptions = props => {
    return (
        <div className="media-options">
            <img src={props.img} alt={props.img} className="media-options-img"></img>
            <div className="media-options-text">{props.text}</div>
        </div>
    )
}

export default MediaOptions;