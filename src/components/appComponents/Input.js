import React from 'react';
import InputForm from './InputForm';
import SubmitExercise from './SubmitExercise';

class Input extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            exercise: 'Enter an Exercise',
            duration: 30
        }
        this.createExercise = this.createExercise.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.clearForm = this.clearForm.bind(this)
    }

    createExercise(event){
        const newExerciseObject = {
            key: Date.now(),
            exercise:this.state.exercise,
            duration:this.state.duration
            }
        if(this.state.exercise === null || this.state.exercise === 'Enter an Exercise'){
            this.setState(
                {exercise:'Enter an Exercise'}
            )
            return;
        }
        else{
        this.props.addExercise(newExerciseObject);
        this.clearForm();
        }
    }

    handleInput = (element) => {
            this.setState(
                {[element.target.name]: element.target.value }
            )
    };

    increment (event) {// Increase the duration by 1
        this.setState(
            {duration: parseInt(this.state.duration) + 1}
        )
    };

    decrement (event) { // reduce the duration by 1
        if(this.state.duration === 0){
            return
        }
        else{
            this.setState(
                {duration: parseInt(this.state.duration) - 1}
            )
        }
    };

    clearForm = () => {
        this.setState(
            {exercise:null}
        );
        document.getElementById("input-form").reset();
    }

    render(){
        const inputStyle = {
            textAlign:'center',
            width:'100%',
            margin:'0px auto'
        }
        const inputHeaderStyle = {
            fontSize:24,
            fontWeight:'bold',
            color:'#A3A3A7',
            margin:'0 auto'
        }
        return(
            <div style={inputStyle}>
                <h1>Build Your Workout</h1>
                <h2 style={inputHeaderStyle}>New Exercise</h2>
                <InputForm  handleInput = {this.handleInput}
                            inputValue = {this.state.exercise}
                            durationValue = {this.state.duration}
                            increment = {this.increment}
                            decrement = {this.decrement}/>
                <SubmitExercise createExercise ={this.createExercise}
                                toggle = {this.props.toggle}/>
            </div>
        )
    }
}

export default Input;