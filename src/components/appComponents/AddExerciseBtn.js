import React from 'react';
import './AddExerciseBtnStyle.scss';
import addExerciseImg from '../../images/add-exercise-icon.svg';

class AddExerciseBtn extends React.Component {


    handleClick = (event) => {
        event.preventDefault();
        this.props.toggle('Input');
        this.props.toggle('Review');
        
    }
    render(){
        return(
            <React.Fragment>
                <button className="add-exercise-btn-style" onClick={this.handleClick}>
                    <object type="image/svg+xml" data={addExerciseImg} className='add-exercise-svg'>
                        <img src={addExerciseImg} alt="add-exercise"></img>
                    </object>   
                    Add a New Exercise
                </button>
            </React.Fragment>
        )
    }
}

export default AddExerciseBtn;