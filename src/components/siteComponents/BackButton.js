import React from 'react';
import "./BackButton.scss";

const BackButton = (props) => {

    const handleClick = () => {        
        if(props.mobile === true){
            props.toggle('mobile')
        }
        if(props.desktop === true){
            props.toggle('desktop')
        }
        props.toggle(props.deviceBtn);
        props.toggle(props.backBtn);
    }


    return(
        <button className="back-button" onClick={handleClick}>Go back</button>
    )
}

export default BackButton;