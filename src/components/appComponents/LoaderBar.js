import React from 'react';
import './LoaderBar.scss';

class LoaderBar extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:5
        }
    }

    componentDidMount(){
        this.countdownValue = setInterval(()=>{this.setState({count:this.state.count - 1})},1000)
    };
    componentWillUnmount(){
        clearInterval(this.countdownValue)
    }

    render(){
        return(
            <div className="loader-main">
                <h2>Get Ready. Starting in </h2>
                <p className="loader-countdown">{this.state.count}</p>
                <div className="loader"></div>
            </div>
        )
    }
};

export default LoaderBar;