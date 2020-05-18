import React from 'react';
import ProgressBar from './ProgressBar';
import './completion.scss'
import EndWorkout from './EndWorkout';

class Completion extends React.Component {


    render(){
        const suffix = `/${this.props.list.length}`;

        return(
            <div className = "completion-style">
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