import React from 'react';
import './Hamburger.scss';

const Hamburger = (props) => {
    return(
        <div className="hamburger">
            <div className="hamburger-top"></div>
            <div className="hamburger-middle"></div>
            <div className="hamburger-bottom"></div>
        </div>
    )
}

export default Hamburger;