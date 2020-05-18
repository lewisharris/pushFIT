import React from 'react';
import TotalDuration from './TotalDuration';
import "./DurationStyle.scss";

class Duration extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count: 0
        }
    };

    resetClock = () => {
        clearInterval(this.increaseElapsed);
        this.setState({count:0})
        
    };

    formatTime = (secs) => {
        let minutes = ('0' + (Math.floor(secs / 60))).slice(-2);
        let seconds = ('0' + (secs - minutes * 60)).slice(-2);
        return `${minutes}:${seconds}`;
    };

    componentDidMount(){
        this.increaseElapsed = setInterval(() => {this.setState({count: this.state.count + 1})},1000)
    };

    componentWillUnmount(){
        this.resetClock();
    };

    render(){
        return(
            <div className="duration-style">
                <h3>Workout Stats</h3>
                <hr></hr>
                <div className="duration-flex">
                    <p>Total Duration</p>
                    <TotalDuration  rest = {this.props.rest}
                                    list = {this.props.list}/>
                </div>
                <div className="duration-flex">
                    <p>Elapsed Time</p>
                    <p className="duration-highlight">{this.formatTime(this.state.count)}</p>
                </div>
                <div className="duration-flex">
                    <p>Number of Exercises</p>
                    <p className="duration-highlight">{this.props.totalExercises}</p>
                </div>
                <div className="duration-flex">
                    <p>Exercises Completed</p>
                    <p className="duration-highlight">{this.props.progress}/{this.props.totalExercises}</p>
                </div>
            </div>
        )
    }
}

export default Duration;