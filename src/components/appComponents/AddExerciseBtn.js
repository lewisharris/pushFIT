import React from 'react';

class AddExerciseBtn extends React.Component {


    handleClick = (event) => {
        event.preventDefault();
        this.props.toggle('Input');
        this.props.toggle('Review');
        
    }
    render(){
        const addExerciseBtnStyle = {
            width:324,
            background:'#303038',
            color:'#4E5AC2',
            fontWeight:'bold',
            height:57,
            fontSize:16,
            borderRadius:15,
            border:'none',
            gridArea:'add-exercise',
            margin:5,
            cursor:'pointer'
        }

        const addExerciseSVG = {
            width:27,
            margin:10,
            verticalAlign:'middle'
        }
        return(
            <React.Fragment>
                <button className="add-exercise" style={addExerciseBtnStyle} onClick={this.handleClick}>
                    <object type="image/svg+xml" data="images/add-exercise-icon.svg" style={addExerciseSVG}>
                        <img src="images/add-exercise-icon.svg" alt="add-exercise"></img>
                    </object>   
                    Add a New Exercise
                </button>
            </React.Fragment>
        )
    }
}

export default AddExerciseBtn;