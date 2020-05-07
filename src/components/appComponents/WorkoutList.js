import React from 'react';
import './WorkoutList.scss';

class WorkoutList extends React.Component {

    handleDelete(key){
        this.props.delete(key);
    }

    render(){
        const list = this.props.list.map(item => {
                return  <li className="exercise-list-item" key={item.key}>
                            <p className="exercise-text">{item.exercise} </p>
                            <div className="duration-circle">{item.duration}</div>
                            <button className="cancel-button" type="button" onClick={this.handleDelete.bind(this, item.key)}>
                                <object type="image/svg+xml" data="images/delete-icon.svg" className="delete-icon">
                                    <img src="images/delete-icon.svg" alt="delete"></img>
                                </object>
                            </button>
                        </li>
        });

        return(
            <div className="workout-list">
                <div className='workout-list-header-flex'>
                    <h3>Exercise</h3>
                    <h3>Time (s)</h3>
                </div>
                <hr></hr>
                {(this.props.list.length === 0)? <p>Workout Empty</p> : null}
                <ul>
                    {list}
                </ul>
            </div>
        )
    }
}

export default WorkoutList;