import React from 'react';
import './Footer.scss'

class Footer extends React.Component {


    handleClick = () => {
        this.props.toggle('Help')
        this.props.toggle('About')
    }

    render(){
        return(
            <footer>
                <div>
                    <h2>Explore</h2>
                    <ul className="footer-list">
                        <li className="footer-list-item">Get Started</li>
                        <li className="footer-list-item" onClick={this.handleClick}>Help Guide</li>
                    </ul>
                </div>
                <a className="footer-portfolio-link" href="https://www.lewharris.co.uk" rel="noopener noreferrer" target="_blank">Designed and Developed by www.lewharris.co.uk</a>
            </footer>
        )
    }
}

export default Footer;