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
        (this.props.exercise !== 'Enter an Exercise')?
            this.setState({buttonText:'Exercise Added!'})
        :
        this.setState({buttonText : 'Enter an Exercise'})
        this.buttonChange = setTimeout(() => this.setState({buttonText:'Add Exercise'})
        ,500);
    };

    handleToggle = (event) => {
        event.preventDefault();
        this.props.toggle('Review');
        this.props.toggle('Input');
    }

    componentWillUnmount(){
        clearTimeout(this.buttonChange)
    }

    render(){
        return(
            <div className="submit-exercise">
                <button className={(this.state.buttonText ==="Enter an Exercise")?"error-buttons":'submit-buttons'}  
                                                                id="add-to-list" 
                                                                onClick={this.handleSubmit} 
                                                                type="submit" 
                                                                form="input-form">
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