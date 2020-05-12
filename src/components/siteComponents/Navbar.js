import React from 'react';
import './Navbar.scss';
import Hamburger from './Hamburger';
import HelpIcon from "./HelpIcon";
import GoTrainBtnMobile from './GoTrainBtnMobile';

class Navbar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            windowWidth:null,
            goTrain:false
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
                <li className="navbar-list-item focus-nav-icon" onClick={() => {this.props.toggle('Home'); this.props.toggle('PushFitApp')}}>Get Started</li>
                <li className="navbar-list-item"><a href="#">about</a></li>
                <li className="navbar-list-item"><a href="#">help</a></li>
            </ul>
            :
            <>
            <Hamburger toggle = {this.toggle}/>
            {(this.state.goTrain)? 
                <>
                    <GoTrainBtnMobile toggle={this.props.mainToggle}/> 
                    <HelpIcon toggle={this.props.toggle}/>
                </>
                : null}
            </>
            }
            </nav>
        )
    }
}

export default Navbar