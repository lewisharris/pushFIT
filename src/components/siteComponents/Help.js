import React from 'react';
import Hero from './Hero';
import HelpGallery from './HelpGallery';
import DeviceSelector from './DeviceSelector';
import './Help.scss';
import BackButton from './BackButton';

class Help extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mobile:false,
            desktop:false,
            btn:true,
            backBtn:false
        }
    }

    toggleSlides = (component) => { // toggle slideshow for mobile or desktop
        if(this.state[component]){
            this.setState({[component]:false})
        }
        else{
            this.setState({[component]:true})
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
    }
    
    render(){
        return(
                <div className="help">
                    <Hero image="/images/help.svg" heroHeader='Getting Stuck?' heroText='Follow this guide to get started'/>
                    <div className="help-content">
                        {(this.state.backBtn)? <h2>Follow the step by step guide</h2>
                            : <h2 >Which Device are you using?</h2>}
                        <div className="help-options-container">
                            {(this.state.btn)? <DeviceSelector device = "mobile" deviceBtn="btn" backBtn="backBtn" toggle ={this.toggleSlides}/>
                                : null}
                            {(this.state.btn)? <DeviceSelector device = "desktop" deviceBtn="btn" backBtn="backBtn" toggle ={this.toggleSlides}/>
                                : null}
                            {(this.state.mobile)? <HelpGallery media="mobile"/>
                                : null}
                            {(this.state.desktop)? <HelpGallery media="desktop"/>
                                : null}
                        </div>
                        {(this.state.backBtn)? <BackButton mobile= {this.state.mobile} desktop = {this.state.desktop} deviceBtn="btn" backBtn="backBtn" toggle ={this.toggleSlides}/>
                            : null}
                    </div>
                </div> 
        )
    }
}

export default Help;