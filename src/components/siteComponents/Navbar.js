import React from 'react';
import './Navbar.scss';
import HelpIcon from "./HelpIcon";
import GoTrainBtnMobile from './GoTrainBtnMobile';
import { Link } from "react-router-dom";
import logo from '../../images/pushfit-logo.svg';

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            windowWidth:null
        }
    }

    trackWidth = () => { // determin which components are displayed on window width
        this.setState({windowWidth:window.innerWidth})
        }

    componentDidMount(){
        window.addEventListener('resize',this.trackWidth) //listen for window resize and run trackwidth function when changed
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.trackWidth)
    }

    render(){
        return(

            <nav className='main-nav'>
                <Link to="/" className="router-link">
                    <div className="logo">
                        <img src={logo} alt="pushfit" className="site-logo"></img>
                        <span className="router-link">pushFIT</span>
                    </div>
                </Link>

            {(window.innerWidth > 768)? // nav bar when desktop
            <ul className="navbar-list">
                <Link to="/pushfitapp" className="router-link"><li className="navbar-list-item focus-nav-icon">Get Started</li></Link>
                <Link to="/" className="router-link"><li className="navbar-list-item">about</li></Link>
                <Link to="/help" className="router-link"><li className="navbar-list-item">help</li></Link>
            </ul>
            : // alternate navbar when mobile/tablet
                <>
                    <GoTrainBtnMobile/> 
                    <HelpIcon/>
                </>
            }
            </nav>
        )
    }
}

export default Navbar