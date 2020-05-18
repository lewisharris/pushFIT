import React from 'react';
import WorkoutList from './WorkoutList';
import WorkoutStats from './WorkoutStats';
import AddExerciseBtn from './AddExerciseBtn';
import ClearWorkoutBtn from './ClearWorkoutBtn';
import StartWorkoutBtn from './StartWorkoutBtn';
import './ReviewDashboard.scss';

class ReviewDashboard extends React.Component {


    render(){
        return(
            <div className="review-dashboard-style">
                <WorkoutList            list = {this.props.list}
                                        delete = {this.props.delete}/>
                <div className="flex-right-style">
                    <WorkoutStats       list = {this.props.list}
                                        setRest = {this.props.setRest}
                                        rest = {this.props.rest}
                                        increment = {this.props.increment}
                                        decrement = {this.props.decrement}
                                        totalDur = {this.props.totalDur}/>
                    <AddExerciseBtn     toggle = {this.props.toggle}/>
                    <ClearWorkoutBtn    clearWorkout = {this.props.clearWorkout}/>
                    <StartWorkoutBtn    toggle = {this.props.toggle}
                                        list = {this.props.list}/>
                </div>
            </div>
        )
    }
}

export default ReviewDashboard