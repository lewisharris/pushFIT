import React from 'react';
import "./ClearWorkoutBtnStyle.scss";
import clearWorkoutImg from '../../images/delete-all-icon.svg';

class ClearWorkoutBtn extends React.Component {

    handleClick(event){
        event.preventDefault();
        this.props.clearWorkout();
    }

    render(){
        return(
            <React.Fragment>
                <button className="clear-all" onClick={this.handleClick.bind(this)}>
                    <object type="image/svg+xml" data={clearWorkoutImg} className="clear-workout-svg">
                        <img src={clearWorkoutImg} alt="delete"></img>
                    </object>
                    Clear All
                </button>
            </React.Fragment>
        )
    }
}

export default ClearWorkoutBtn;