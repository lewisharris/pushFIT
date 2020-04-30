import React from 'react';
import Input from './Input';
import Review from './Review';
import Workout from './Workout';
import './PushFitAppStyle.scss';

class PushFitApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            workoutArray : [], // array that workout will be added to
            rest : 30, // chosen rest period between exercises
            TotalRest : null, // total rest period
            currentExercise : null,
            currentExerciseLength:null,
            currentTime : 0,
            currentProgress:0,
            totalDuration:0,
            Input:true,
            Review:false,
            Workout:false
        }
        this.clearWorkout = this.clearWorkout.bind(this);
        this.toggleState = this.toggleState.bind(this);
    }

    addExercise = (obj) => { // Add Exercise object to the main workout Array
        this.setState(
            {workoutArray : this.state.workoutArray.concat(obj)}
        )
    }

    deleteExercise = (key) => { // remove selected exercise from workout Array
        this.setState(prevState => ({
            workoutArray: prevState.workoutArray.filter(exercise => exercise.key !== key )
        }));
     }

    calculateTotalDuration = () => { //Calculate the total duration of the workout
        const restPeriod = (parseInt(this.state.rest) * (parseInt(this.state.workoutArray.length -1)));
        const totalExercise = parseInt(this.state.workoutArray.map(item => {return item.duration}).reduce(function(a,b){
            return a + b;
        },0));
        this.setState({totalDuration: restPeriod + totalExercise})
    };

    setRest = (element) => { // set the rest period
        this.setState(
            {rest: parseInt(element.target.value) }
        )
    };

    increment = (event) =>{// Increase the rest duration by 1
        if(this.state.rest === 0){return
        }
        else{
        this.setState(
            {rest: this.state.rest + 1}
        )};
    };

    decrement = (event) =>{ // Decrease the rest duration by 1
        if(this.state.rest === 0){
            return
        }
        else{
            this.setState(
                {rest: parseInt(this.state.rest) - 1}
            )
        }
    };

    clearWorkout () { // Clear all contents from the workout
        this.setState(
            {workoutArray:[]}
        )
    }

    endWorkout = () => { // End the workout/return to the review page
        this.toggleState('Review');
        this.toggleState('Workout');
    };

    runTimer = () => { // run the Workout
        let p = Promise.resolve();
        for (let e of this.state.workoutArray) {
                this.setState({
                    currentExerciseLength:e.duration})
                p = p.then(() => this.countdown(e.duration, e.exercise)
                     .then(() => {this.setState({currentProgress: this.state.currentProgress + 1})})
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
        const i = setInterval(() => {
        this.setCurrent(time, exercise);
        if (time === 0 || this.state.Workout === false) {
            clearInterval(i);
            resolve();
        }
        time--;
        }, 1000);
        });
    }

    toggleState (component){ // toggle pages
        if(this.state[component]){
            this.setState({[component]:false})
        }
        else{this.setState({[component]:true})}
    }

    render(){
        const appStyle = {
            background:'#27272F',
            color:'white',
            fontFamily:"'Varela Round', sans-serif",
            width:'100vw',
            height:'100vh',
            margin:0,
            padding:0
        };
        return(
            <div style={appStyle}>
                <h1 className="main-logo">pushFit</h1>
                <button className="leave-app"><div className='leave-app-arrow'></div>Leave Workout</button>
                
                {(this.state.Input === false) ? null
                :
                <Input  addExercise = {this.addExercise}
                        toggle = {this.toggleState}/>
                }

                {(this.state.Review === false) ? null
                :
                <Review workoutArray = {this.state.workoutArray}
                        setRest = {this.setRest}
                        rest = {this.state.rest}
                        increment = {this.increment}
                        decrement = {this.decrement}
                        totalDur = {this.state.totalDuration}
                        startWorkout = {this.startWorkout}
                        clearWorkout = {this.clearWorkout}
                        delete = {this.deleteExercise}
                        toggle = {this.toggleState}/>
                }

                {(this.state.Workout === false) ? null
                :
                <Workout    
                            list = {this.state.workoutArray}
                            rest = {this.state.rest} 
                            totalDur = {this.state.totalDuration}
                            totalRest = {this.state.TotalRest}
                            totalExercises = {this.state.workoutArray.length}  //this can drop
                            endWorkout = {this.endWorkout}  //this can drop
                            currentExercise = {this.state.currentExercise}  //this can drop
                            currentExerciseLength = {this.state.currentExerciseLength}  //this can drop
                            currentTime = {this.state.currentTime}  //this can drop
                            currentProgress = {this.state.currentProgress}  //this can drop
                            runWorkout = {this.runTimer}/> //this can drop
                }
            </div>
        )
    }
};

export default PushFitApp;