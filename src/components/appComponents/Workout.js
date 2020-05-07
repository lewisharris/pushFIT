import React from 'react';
import Duration from './Duration';
import AudioPlayer from './AudioPlayer';
import Completion from './Completion';
import CurrentExercise from './CurrentExercise';
import EndWorkout from './EndWorkout';
import MobileOptions from './MobileOptions';
import MediaQuery from 'react-responsive'

class Workout extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list:this.props.list,
            rest:this.props.rest,
            currentExercise : null,
            currentExerciseLength:this.props.firstExerciseLength,
            currentTime : this.props.firstExerciseLength,
            currentProgress:0,
          };
    }

    runTimer = () => { // run the Workout
        var lowAudio = new Audio('./sounds/low-beep.mp3');
        lowAudio.play();
        let p = Promise.resolve();
        for (let e of this.state.list) {
                p = p.then( () => this.setState({currentExerciseLength:e.duration}))
                        .then( () => this.countdown(e.duration, e.exercise))
                            .then( () => { 
                                            if(this._isMounted){
                                                this.setState({currentExerciseLength:this.state.rest})
                                            }})
                                .then( () => { 
                                            if(this._isMounted){
                                                this.setState({currentProgress: this.state.currentProgress + 1})
                                            }})
                                    .then( () => this.countdown(this.state.rest, 'Take a Rest'))
        }
        p.then(() => {
            if(this._isMounted){
                this.setState({ 
                    currentTime : null,
                    currentExercise : 'You Finished. Well Done!'
                    })
                }
            });
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
            this.i = setInterval(
                () => {
                    if(this._isMounted === false){
                        clearInterval(this.i)
                        console.log('cancelled ' + exercise)
                        resolve();
                    }
                    else{
                        this.setCurrent(time, exercise);
                        console.log(time)
                        if(time < 4 && time > 0){
                            highAudio.play();
                            }
                        if (time === 0) {
                            lowAudio.play();
                            clearInterval(this.i)
                            resolve();
                            }
                        time--;
                        }
                    }
                , 1000);
            }
        );
    }

    componentDidMount(){
        this._isMounted = true;
        window.scrollTo(0, 0)
        this.runTimer();
    };
      
    componentWillUnmount(){
        this._isMounted = false;
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

        return(<div style={workoutStyle}>
                        <MobileOptions/>
                        <CurrentExercise    currentExercise = {this.state.currentExercise}
                                            progress = {this.state.currentProgress}
                                            currentTime = {this.state.currentTime} 
                                            currentExerciseLength = {this.state.currentExerciseLength}
                                            list = {this.state.list}/>
            <MediaQuery maxDeviceWidth={450}>
                        <EndWorkout         endWorkout = {this.props.endWorkout}/>
            </MediaQuery>
            <MediaQuery minDeviceWidth={450}>
                    
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
        </MediaQuery>
                </div>
        )
    }
}

export default Workout;