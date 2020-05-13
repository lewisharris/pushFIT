import React from 'react';
import './Footer.scss'
import {Link} from "react-router-dom";

class Footer extends React.Component {


    render(){
        return(
            <footer>
                <div>
                    <h2>Explore</h2>
                    <ul className="footer-list">
                        <Link to="/pushfitapp" className="router-link"><li className="footer-list-item">Get Started</li></Link>
                        <Link to="/help" className="router-link"><li className="footer-list-item">Help Guide</li></Link>
                    </ul>
                </div>
                <a className="footer-portfolio-link" href="https://www.lewharris.co.uk" rel="noopener noreferrer" target="_blank">Designed and Developed by www.lewharris.co.uk</a>
            </footer>
        )
    }
}

export default Footer;