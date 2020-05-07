import React from 'react';
import Input from './Input';
import Review from './Review';
import Workout from './Workout';
import Intro from './Intro';
import './PushFitAppStyle.scss';

class PushFitApp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            workoutArray : [], // array that workout will be added to
            rest : 30, // chosen rest period between exercises
            TotalRest : null, // total rest period
            totalDuration:0,
            firstExerciseLength:30,
            Input:true,
            Review:false,
            Workout:false,
            Intro:false
        }
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

    setRest = (element) => { // set the rest period
        this.setState(
            {rest: parseInt(element.target.value) }
        )
    };

    increment = (event) =>{// Increase the rest duration by 1
        this.setState(
            {rest: this.state.rest + 1}
        );
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

    clearWorkout = () => { // Clear all contents from the workout
        this.setState(
            {workoutArray:[]}
        )
    }

    endWorkout = () => { // End the workout/return to the review page
        this.toggleState('Review');
        this.toggleState('Workout');
    };

    toggleState (component){ // toggle pages
        if(this.state[component]){
            this.setState({[component]:false})
        }
        else{
            this.setState({[component]:true})
        }
    }

    calculateTotalDuration = () => { //Calculate the total duration of the workout
        const restPeriod = (parseInt(this.state.rest) * (parseInt(this.state.workoutArray.length -1)));
        const totalExercise = parseInt(this.state.workoutArray.map(item => {return item.duration}).reduce(function(a,b){
            return a + b;
        },0));
        this.setState({totalDuration: restPeriod + totalExercise})
    };

    setFirstExerciseTime = () => {
        if(this.state.workoutArray.length !== 0){
            this.setState({firstExerciseLength: this.state.workoutArray[0].duration})
        }
        else{
            return
        }
    }

    render(){
        return(
            <div className='app-container'>
                <h1 className="main-logo">pushFit</h1>
                <button className="leave-app"><div className='leave-app-arrow'></div>Leave Workout</button>
                
                {(this.state.Input === false) ? null
                :
                <Input  addExercise = {this.addExercise}
                        toggle = {this.toggleState}/>
                }

                {(this.state.Review === false) ? null
                :
                <Review list = {this.state.workoutArray}
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
                
                {(this.state.Intro === false)? null : <Intro    toggle = {this.toggleState}
                                                                setFirstExerciseTime = {this.setFirstExerciseTime}/>
                }
                {(this.state.Workout === false) ? null
                :
                <Workout    
                            list = {this.state.workoutArray}
                            rest = {this.state.rest} 
                            totalDur = {this.state.totalDuration}
                            totalRest = {this.state.TotalRest}
                            endWorkout = {this.endWorkout} 
                            firstExerciseLength = {this.state.firstExerciseLength}         
                            />
                }
            </div>
        )
    }
};

export default PushFitApp;