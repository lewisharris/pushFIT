import React from 'react';
import ProgressBar from './ProgressBar';
import "./CurrentExerciseStyle.scss";

class CurrentExercise extends React.Component {

    nextExercise = () => {
        if(this.props.progress >= this.props.list.length -1){
            return 'Last Exercise';
        }
        else{
            return `Next Exercise: ${this.props.list[this.props.progress + 1].exercise}`;
        }
    }
    render(){
        const currentExerciseStyle = {
            background:'#303038',
            width:'auto',
            minWidth:326,
            flexGrow:'2',
            margin:10,
            borderRadius:10,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            textAlign:'center',
            padding:'20px auto'
        }
        return(
           <div style={currentExerciseStyle}>
                    <h1>{this.props.currentExercise}</h1>
                    <h2>{this.nextExercise()}</h2>
                <div>
                    <div id="exercise-progress-container">
                        <div className="current-exercise-bar-outer-container">
                            <div className="current-exercise-bar-inner-container">
                                <ProgressBar    progress = {this.props.currentTime}
                                                textSize = {100}
                                                totalTime = {this.props.currentExerciseLength}
                                                size = {200}
                                                strokeWidth = {10}
                                                circleOneStroke = '#5FFF90'
                                                circleTwoStroke = '#E83744'
                                                />
                            </div>
                        </div>
                    </div>
                </div>

           </div> 
        )
    }
}

export default CurrentExercise;