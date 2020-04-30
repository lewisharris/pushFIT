import React from 'react';


class EndWorkout extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.endWorkout();
    }

    render(){
        return(
            <button className="end-workout" type="button" onClick={this.handleClick.bind(this)}>End Workout</button>
        )
    }
}


export default EndWorkout;