import React from 'react';
import "./deviceSelector.scss";

const DeviceSelector = props => {

    const handleClick = () => {
        props.toggle(props.device); 
        props.toggle(props.deviceBtn);
        props.toggle(props.backBtn);
    }
    return(
        <button className="device-selector" onClick={handleClick}>
            <img src={'images/' + props.device + '.svg'} alt={props.device + '.svg'} className="help-device-icon"></img>
            <h3>{props.device}</h3>
        </button>
    )
}

export default DeviceSelector;