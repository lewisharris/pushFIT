import React from 'react';
import './GoTrainBtnMobile.scss';

const GoTrainBtnMobile = (props) => {

    const handleClick = () => {
        props.mainToggle('PushFitApp');
    };

    return(
        <button className="go-train-mobile-btn" onClick={handleClick()} type="button">Go Train</button>
    )
}

export default GoTrainBtnMobile;