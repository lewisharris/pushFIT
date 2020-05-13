import React from 'react';
import './GoTrainBtnMobile.scss';
import { Link } from "react-router-dom";

const GoTrainBtnMobile = (props) => {


    return(
        <Link to="/pushfitapp"><button className="go-train-mobile-btn" type="button">Go Train</button></Link>
    )
}

export default GoTrainBtnMobile;