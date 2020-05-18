import React from 'react';
import "./deviceSelector.scss";

const DeviceSelector = props => {

    const handleClick = () => {
        props.toggle(props.device); 
        props.toggle(props.deviceBtn);
        props.toggle(props.backBtn);
    }

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return(
        <button className="device-selector" onClick={handleClick}>
            <img src={props.icon} alt={props.device} className="help-device-icon"></img>
            <h3>{capitalizeFirstLetter(props.device)}</h3>
        </button>
    )
}

export default DeviceSelector;