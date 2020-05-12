import React from 'react';
import Navbar from './siteComponents/Navbar';
import Footer from './siteComponents/Footer';
import About from './siteComponents/About';
import Help from './siteComponents/Help';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Help: false,
            About:true
        }
    }

    togglePages = (component) => { // toggle pages
        if(this.state[component]){
            this.setState({[component]:false})
        }
        else{
            this.setState({[component]:true})
        }
    }

    render(){
        return(
            <div>
                <Navbar toggle={this.togglePages} mainToggle={this.props.toggle}/>
                {(this.state.About)? <About toggle = {this.props.toggle}/> : null}
                {(this.state.Help)? <Help toggle = {this.props.toggle}/> : null}
                <Footer toggle={this.togglePages}/>
            </div>
        )
    }
};

export default Home;