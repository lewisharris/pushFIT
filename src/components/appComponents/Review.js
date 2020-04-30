import React from 'react';
import ReviewDashboard from './ReviewDashboard';

class Review extends React.Component {

    render(){
        const reviewStyle = {
            textAlign:'center',
            width:'100%',
            margin:'0px auto',
            background:'#27272F'
        }
        
        
        return(
            <div style={reviewStyle}>
                <h1>View Workout</h1>
                <ReviewDashboard    workoutArray = {this.props.workoutArray}
                                    setRest = {this.props.setRest}
                                    rest = {this.props.rest}
                                    increment = {this.props.increment}
                                    decrement = {this.props.decrement}
                                    totalDur = {this.props.totalDur}
                                    startWorkout = {this.props.startWorkout}
                                    clearWorkout = {this.props.clearWorkout}
                                    delete = {this.props.delete}
                                    runWorkout = {this.props.runWorkout}
                                    toggle = {this.props.toggle}
                                />
            </div>
        )
    }
}

export default Review;