import React from 'react';
import './GetStartedBtn.scss';
import { Link } from "react-router-dom";

const GetStartedBtn = (props) => {
        return(
            <Link to="/pushfitapp"> <button className='GetStartedBtn'>Get Started</button> </Link>
            )
}

export default GetStartedBtn;