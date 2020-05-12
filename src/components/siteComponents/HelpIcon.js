import React from 'react';
import "./HelpIcon.scss";

const HelpIcon = props => {

    const handleClick = () => {
        props.toggle('Help');
        props.toggle('About')
    }

    return(
        <button className="help-btn" onClick={ () => handleClick()} type="button">Help</button>
    )
}

export default HelpIcon;