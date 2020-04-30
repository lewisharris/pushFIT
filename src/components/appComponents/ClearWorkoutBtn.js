import React from 'react';

class ClearWorkoutBtn extends React.Component {

    handleClick(event){
        event.preventDefault();
        this.props.clearWorkout();
    }

    render(){
        const clearExerciseBtnStyle = {
            width:324,
            height:58,
            lineHeight:'58px',
            color:'#ED747D',
            background:'#303038',
            fontSize:16,
            borderRadius:15,
            border:'none',
            gridArea:'clear-all',
            fontWeight:'bold',
            justifyContent:'center',
            margin:5,
            cursor:'pointer'
        }
        const clearWorkoutSVG = {
            width:27,
            margin:10,
            verticalAlign:'middle'
        }
        return(
            <React.Fragment>
                <button className="clear-all" style={clearExerciseBtnStyle}onClick={this.handleClick.bind(this)}>
                    <object type="image/svg+xml" data="images/delete-all-icon.svg" style={clearWorkoutSVG}>
                        <img src="images/delete-all-icon.svg" alt="delete"></img>
                    </object>
                    Clear All
                </button>
            </React.Fragment>
        )
    }
}

export default ClearWorkoutBtn;