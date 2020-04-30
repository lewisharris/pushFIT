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

    increaseElapsed = () => {
        setInterval(() => {this.setState({count: this.state.count + 1})},1000)
    };

    resetClock = () => {
        this.setState({count:0})
    };

    formatTime = (secs) => {
        let minutes = ('0' + (Math.floor(secs / 60))).slice(-2);
        let seconds = ('0' + (secs - minutes * 60)).slice(-2);
        return `${minutes}:${seconds}`;
    };

    componentDidMount(){
        this.increaseElapsed();
    };

    componentWillUnmount(){
        clearInterval(this.increaseElapsed);
        this.resetClock();
    };

    render(){
        // Style for component can be found below for quick access. 
        // All styling for children are to be found on relevant stylesheet
        const durationStyle = {
            width:324,
            display:'flex',
            flexDirection:'column',
            background:'#303038',
            borderRadius:10,
            margin:10,
            flexGrow:'2'
        }
        return(
            <div style={durationStyle}>
                <h3>Workout Stats</h3>
                <hr></hr>
                <div className="duration-flex">
                    <p>Total Duration</p>
                    <TotalDuration  totalDur = {this.formatTime(this.props.totalDur)}/>
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