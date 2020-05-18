import React from 'react';
import './WorkoutList.scss';
import ListItem from './ListItem';

class WorkoutList extends React.Component {

    handleDelete(key){
        this.props.delete(key);
    }

    render(){

        const list = this.props.list.map(item => {
                return  <ListItem
                        key = {item.key}
                        id={item.key}
                        duration = {item.duration}
                        exercise = {item.exercise}
                        handleDelete = {this.handleDelete.bind(this, item.key)}/>
                    }
                );

        return(
            <div className="workout-list">
                <div className='workout-list-header-flex'>
                    <h3 className="exercise-header">Exercise</h3>
                    <h3 className="time-header">Time (s)</h3>
                </div>
                <hr></hr>
                {(this.props.list.length === 0)? <p>Workout Empty</p> : null}
                <ul className = "workout-list-scroller">
                    {list}
                </ul>
            </div>
        )
    }
}

export default WorkoutList;