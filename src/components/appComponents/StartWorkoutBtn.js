import React from 'react';

class StartWorkoutBtn extends React.Component {

    handleClick = (event) => {
        event.preventDefault();
        this.props.toggle('Intro');
        this.props.toggle('Review');
    }

    render(){
        const startWorkoutBtnStyle = {
            gridArea:'start-workout',
            width:324,
            height:88,
            background:'#7AD596',
            border:'none',
            padding:0,
            fontSize:27,
            fontWeight:'bold',
            borderRadius:10,
            color:'#303038',
            margin:5,
            boxShadow: 'inset 4px 4px 4px rgba(255,255,255,0.3)',
            cursor:'pointer'
        }
        return(
            <button style={startWorkoutBtnStyle} className="start-workout" type="button" onClick={this.handleClick}>Start Workout</button>
        )
    }
}

export default StartWorkoutBtn;