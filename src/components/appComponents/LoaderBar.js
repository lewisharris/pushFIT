import React from 'react';

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
            <div className="loader-main">Get Ready. Starting in {this.state.count}</div>
        )
    }
};

export default LoaderBar;