import React from 'react';
import Duration from './Duration';
import AudioPlayer from './AudioPlayer';
import Completion from './Completion';
import CurrentExercise from './CurrentExercise';
import EndWorkout from './EndWorkout';

class Workout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isDesktop: false,

          };

        this.update = this.update.bind(this);
    }

  update() {
    this.setState({ isDesktop: window.innerWidth > 500 });
  }
    componentDidMount(){
        this.props.runWorkout();
        this.update();
        window.addEventListener("resize", this.update);
    }
      
    componentWillUnmount(){
        clearInterval(this.props.runWorkout);
        window.removeEventListener("resize", this.update)
    }

    render(){
        const workoutStyle = {
            minWidth:326,
            maxWidth:1200,
            background:'#27272F',
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            margin:'0px auto',
            justifyContent:'center'
        }  
        
        const isDesktop = this.state.isDesktop;
        return( isDesktop?(
                    <div style={workoutStyle}>
                        <Duration               totalDur = {this.props.totalDur}
                                            totalExercises = {this.props.totalExercises}
                                            totalRest = {this.props.totalRest}
                                            currentExercise = {this.props.currentExercise}
                                            progress = {this.props.currentProgress}
                                            list = {this.props.list}
                                            />
                        <AudioPlayer/>
                        
                        <Completion         endWorkout = {this.props.endWorkout} 
                                            progress = {this.props.currentProgress}
                                            list = {this.props.list}/>
                                            
                        <CurrentExercise    currentExercise = {this.props.currentExercise}
                                            progress = {this.props.currentProgress}
                                            currentTime = {this.props.currentTime} 
                                            currentExerciseLength = {this.props.currentExerciseLength}
                                            list = {this.props.list}/>
                    </div>
                )
                :<div style={workoutStyle}>
                        <CurrentExercise    currentExercise = {this.props.currentExercise}
                                            progress = {this.props.currentProgress}
                                            currentTime = {this.props.currentTime} 
                                            currentExerciseLength = {this.props.currentExerciseLength}
                                            list = {this.props.list}/>
                        <EndWorkout         endWorkout = {this.props.endWorkout}/>
                </div>
                

        )
    }
}

export default Workout;