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
            isDesktop: window.innerWidth,
            list:this.props.list,
            rest:this.props.rest,
            currentExercise : null,
            currentExerciseLength:null,
            currentTime : 0,
            currentProgress:0,
          };

        this.updateView = this.updateView.bind(this);
    }

    runTimer = () => { // run the Workout
        let p = Promise.resolve();
        for (let e of this.state.list) {
                p = p.then(()=>{this.setState({currentExerciseLength:e.duration})})
                            .then(() => this.countdown(e.duration, e.exercise)     
                                .then(() => {this.setState({currentProgress: this.state.currentProgress + 1})})
                                    .then(()=>{this.setState({currentExerciseLength:this.state.rest})})
                                        .then(() => this.countdown(this.state.rest, 'rest')));
        }
        p.then(() => this.setState({ 
            currentTime : null,
            currentExercise : 'You Finished. Well Done!'
            }
        ));
    };

    setCurrent = (time, exercise) => { // set the current Exercise
        this.setState({ currentTime : time,
                        currentExercise : exercise
                        }
                    )
    };

    countdown = (time, exercise) => { // create the countdown
    return new Promise(resolve => {
        var highAudio = new Audio('./sounds/high-beep.mp3');
        var lowAudio = new Audio('./sounds/low-beep.mp3');
        const i = setInterval(() => {
        this.setCurrent(time, exercise);
        if(time < 4 && time > 0){
            highAudio.play();
        }
        if (time === 0) {
            lowAudio.play();
            clearInterval(i);
            resolve();
        }
        time--;
        }, 1000);
        });
    }

    updateView() {
        this.setState({ isDesktop: window.innerWidth > 500 });
    }
    componentDidMount(){
        this.runTimer();
        window.addEventListener("load", this.updateView);
    };
      
    componentWillUnmount(){
        clearInterval(this.props.runTimer);
        window.removeEventListener("load", this.updateView)
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
                        <Duration           totalExercises = {this.state.list.length}
                                            totalRest = {this.props.totalRest}
                                            currentExercise = {this.state.currentExercise}
                                            progress = {this.state.currentProgress}
                                            list = {this.state.list}
                                            rest = {this.props.rest}
                                            />
                        <AudioPlayer/>
                        
                        <Completion         endWorkout = {this.props.endWorkout} 
                                            progress = {this.state.currentProgress}
                                            list = {this.state.list}/>
                                            
                        <CurrentExercise    currentExercise = {this.state.currentExercise}
                                            progress = {this.state.currentProgress}
                                            currentTime = {this.state.currentTime} 
                                            currentExerciseLength = {this.state.currentExerciseLength}
                                            list = {this.state.list}/>
                    </div>
                )
                :<div style={workoutStyle}>
                        <CurrentExercise    currentExercise = {this.state.currentExercise}
                                            progress = {this.state.currentProgress}
                                            currentTime = {this.state.currentTime} 
                                            currentExerciseLength = {this.state.currentExerciseLength}
                                            list = {this.state.list}/>
                        <EndWorkout         endWorkout = {this.props.endWorkout}/>
                </div>
                

        )
    }
}

export default Workout;