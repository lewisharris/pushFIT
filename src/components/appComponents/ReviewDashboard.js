import React from 'react';
import WorkoutList from './WorkoutList';
import WorkoutStats from './WorkoutStats';
import AddExerciseBtn from './AddExerciseBtn';
import ClearWorkoutBtn from './ClearWorkoutBtn';
import StartWorkoutBtn from './StartWorkoutBtn';

class ReviewDashboard extends React.Component {


    render(){
        const reviewDashboardStyle = {
            margin:'0px auto',
            display: 'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            padding:20
        }

        const flexRightStyle = {
            display:"flex",
            flexDirection:"column",
            flexGap:10,
        }
        return(
            <div style={reviewDashboardStyle}>
                <div>
                    <WorkoutList        list = {this.props.list}
                                        delete = {this.props.delete}/>
                </div>
                <div style={flexRightStyle}>
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