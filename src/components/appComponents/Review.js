import React from 'react';
import ReviewDashboard from './ReviewDashboard';
import './Review.scss';

class Review extends React.Component {

    render(){
        return(
            <div className="review-style">
                <h1>View Workout</h1>
                <ReviewDashboard    list = {this.props.list}
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