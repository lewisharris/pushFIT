import React from 'react';
import './SubmitExerciseStyle.scss';

class SubmitExercise extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            buttonText:"Add Exercise"
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createExercise();
        this.setState({buttonText:'Added to Workout'})
        setTimeout(() => this.setState({buttonText:'Add Exercise'}),2000)
    };

    handleToggle = (event) => {
        event.preventDefault();
        this.props.toggle('Review');
        this.props.toggle('Input');
    }

    render(){
        const submitExerciseStyle = {
                background:'#303038',
                minWidth:300,
                maxWidth:400,
                display:'flex',
                flexDirection:'row',
                justifyContent:'space-around',
                height:58,
                margin:'0px auto',
                paggin:10,
                borderRadius:10,
                border:'none'
        }
        return(
            <div style={submitExerciseStyle}>
                <button className="submit-buttons"  id="add-to-list" onClick={this.handleSubmit} type="submit" form="input-form">
                    <object id="add-to-list-icon" type="image/svg+xml" data="images/add-to-list-icon.svg">
                            <img src="images/add-to-list-icon.svg" alt="add-to-list"></img>
                    </object>               
                        {this.state.buttonText}
                </button>
            <div id="submit-divider"></div>
                <button className="submit-buttons" id="view-list" type="button" onClick={this.handleToggle}>
                    <object id="view-workout-icon" type="image/svg+xml" data="images/view-workout-icon.svg">
                            <img src="images/view-workout-icon.svg" alt="submit"></img>
                    </object>
                    View Workout
                </button>
            </div>
        )
    }
}

export default SubmitExercise;