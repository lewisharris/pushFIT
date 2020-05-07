import React from 'react';
import ProgressBar from './ProgressBar';
import "./CurrentExerciseStyle.scss";

class CurrentExercise extends React.Component {

    renderCurrentExercise = () => {
        if(this.props.progress === 0){
            return this.props.list[0].exercise;
        }
        else {
            return this.props.currentExercise;
        }
    }
    renderNextExercise(){
        const {currentExercise,progress,list} = this.props;
        if(currentExercise === 'Take a Rest' && progress < list.length){
            return `Next Exercise: ${list[progress].exercise}`
        }
        else{
            return ''
        }
    }


    render(){
        return(
           <div className = 'current-exercise'>
                    <h1 className='current-exercise-text'>{this.renderCurrentExercise()}</h1>
                    <h2 className='next-exercise-text'>{this.renderNextExercise()}</h2>
                <div>
                    <div id="exercise-progress-container">
                        <div id="exercise-progress-container-inner">
                                <ProgressBar    progress = {this.props.currentTime}
                                                textSize = {100}
                                                totalTime = {this.props.currentExerciseLength}
                                                size = {200}
                                                strokeWidth = {10}
                                                circleOneStroke = '#4fe5ff'
                                                circleTwoStroke = '#60888f'/>
                        </div>
                    </div>
                </div>

           </div> 
        )
    }
}

export default CurrentExercise;