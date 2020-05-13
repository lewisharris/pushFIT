import React from 'react';
import "./HelpIcon.scss";
import { Link } from "react-router-dom";

const HelpIcon = props => {
    return(
        <Link to="/help"><button className="help-btn" type="button">Help</button></Link>
    )
}

export default HelpIcon;