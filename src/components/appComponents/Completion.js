import React from 'react';
import ProgressBar from './ProgressBar';
import './completion.scss'
import EndWorkout from './EndWorkout';

class Completion extends React.Component {


    render(){
        const completionStyle = {
            width:324,
            background:'#303038',
            minWidth:324,
            borderRadius:10,
            display:'flex',
            flexDirection:'column',
            margin:10,
            flexGrow:'1'
        }

        const suffix = `/${this.props.list.length}`;

        return(
            <div style={completionStyle}>
                <h3>Completion</h3>
                <hr></hr>
                <div id="progress-container">
                    <ProgressBar
                            progress = {this.props.progress}//currentExercise
                            totalTime = {this.props.list.length}//total exercises
                            size = {150}
                            strokeWidth = {4}
                            circleOneStroke = '#E83744'
                            circleTwoStroke = '#5FFF90'
                            suffix = {suffix}/>
                </div>

                <EndWorkout endWorkout = {this.props.endWorkout}/>
            </div>
        )
    }
}

export default Completion