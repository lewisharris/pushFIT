import React from 'react';
import NumberInput from './NumberInput';
import TotalDuration from './TotalDuration';
import './workoutStats.scss'

class WorkoutStats extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            difficulty : null
        }
    }
    calcDifficulty () {
        const {list,rest} = this.props;
        const workoutTime = list.map(e => {return e.duration}).reduce((a,b)=> {return a+ b},0);
        const totalRest = rest * list.length;
        const diff = workoutTime - totalRest;
        if(diff <= -30 ){
            return 'easy';
        }
        else if(diff > -30 && diff <= 30){
            return 'average';
        }
        else{
            return 'hard';
        }
    };

    formatTime = (secs) => {
        let minutes = ('0' + (Math.floor(secs / 60))).slice(-2);
        let seconds = ('0' + (secs - minutes * 60)).slice(-2);
        return `${minutes}:${seconds}`;
    };

    componentDidMount(){
        this.calcDifficulty();
    }

    render(){
        const workoutStatsStyle = {
            background:'#303038',
            borderRadius:15,
            color:'#5968EB',
            display:'flex',
            flexDirection:'column',
            minWidth:324,
            margin:5,
            flexGrow:'0'
        }
        return(
            <div className="stats" style={workoutStatsStyle}>
                <h3>Workout Stats</h3>
                <hr></hr>
                <div className='stats-flex'>
                    <h4>Rest Period</h4>
                    <NumberInput durationValue = {this.props.rest}
                                handleInput = {this.props.setRest}
                                increment = {this.props.increment}
                                decrement = {this.props.decrement}
                                />
                </div>
                <div className='stats-flex'>
                    <h4>Difficulty</h4>
                    <p className="show-difficulty">{this.calcDifficulty()}</p>
                </div>
                <div className='stats-flex'>
                    <h4>Total Duration</h4>
                    <TotalDuration  rest={this.props.rest}
                                    list = {this.props.list}/>
                </div>
            </div>
        )
    }
}

export default WorkoutStats;