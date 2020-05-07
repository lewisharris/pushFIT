import React from 'react';
import "./ClearWorkoutBtnStyle.scss"

class ClearWorkoutBtn extends React.Component {

    handleClick(event){
        event.preventDefault();
        this.props.clearWorkout();
    }

    render(){
        return(
            <React.Fragment>
                <button className="clear-all" onClick={this.handleClick.bind(this)}>
                    <object type="image/svg+xml" data="images/delete-all-icon.svg" className="clear-workout-svg">
                        <img src="images/delete-all-icon.svg" alt="delete"></img>
                    </object>
                    Clear All
                </button>
            </React.Fragment>
        )
    }
}

export default ClearWorkoutBtn;