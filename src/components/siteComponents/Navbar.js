import React from 'react';
import './Navbar.scss';
import HelpIcon from "./HelpIcon";
import GoTrainBtnMobile from './GoTrainBtnMobile';
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            windowWidth:null
        }
    }

    toggle = () => {
        this.setState({goTrain: !this.state.goTrain})
    }

    trackWidth = () => {
        this.setState({windowWidth:window.innerWidth})
        }

    componentDidMount(){
        window.addEventListener('resize',this.trackWidth)
    }

    componentWillUnmount(){
        window.removeEventListener('resize',this.trackWidth)
    }

    render(){
        return(
            <nav className='main-nav'>
                <div className="logo">
                <img src="images/pushfit-logo.svg" alt="pushfit" className="site-logo"></img>
                <span>pushFIT</span>
                </div>

            {(window.innerWidth > 768)?
            <ul className="navbar-list">
                <Link to="/pushfitapp" className="router-link"><li className="navbar-list-item focus-nav-icon">Get Started</li></Link>
                <Link to="/" className="router-link"><li className="navbar-list-item">about</li></Link>
                <Link to="/help" className="router-link"><li className="navbar-list-item">help</li></Link>
            </ul>
            :
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