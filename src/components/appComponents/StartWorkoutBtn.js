import React from 'react';
import "./StartWorkoutBtn.scss";

class StartWorkoutBtn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            btnMessage: 'Start Workout'
        }
    }

    notifyEmptyWorkout = () => {
        this.setState({btnMessage: 'Empty Workout'})
    };

    revertBtn = () => {setTimeout( () => {this.setState({btnMessage: 'Start Workout'})},500)}

    handleClick = (event) => {
        if(this.props.list.length === 0){
        this.notifyEmptyWorkout();
        this.revertBtn();
        return}
        else{
        event.preventDefault();
        this.props.toggle('Intro');
        this.props.toggle('Review');
        }
    }

    componentWillUnmount(){
        clearTimeout(this.revertBtn)
    }

    render(){

        return(
            <button     className={(this.state.btnMessage === "Start Workout")?"start-workout":"start-workout-fail"} 
                        type="button" 
                        onClick={this.handleClick}>

                {this.state.btnMessage}

            </button>
        )
    }
}

export default StartWorkoutBtn;