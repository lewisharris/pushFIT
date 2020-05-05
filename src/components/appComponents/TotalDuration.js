import React from 'react';

const TotalDuration = (props) => {

    const totalWorkoutTime = () => {
        const {rest,list} = props;
        const workTime = list.map(e =>{return e.duration}).reduce((a,b)=> {return a +b},0);
        const restTime = rest * (list.length);
        if(restTime <= 0){
            return formatTime(0)
        }
         else{
             return formatTime((workTime + restTime)- rest);
        }
    }

    const formatTime = (secs) => {
        let minutes = ('0' + (Math.floor(secs / 60))).slice(-2);
        let seconds = ('0' + (secs - minutes * 60)).slice(-2);
        return `${minutes}:${seconds}`;
    };

    const totalDurationStyle = {
        minWidth:23,
        background:'#5968EB',
        height:20,
        color:'#303038',
        fontWeight:'bold',
        borderRadius:5,
        fontSize:16,
        padding:5,
        textAlign:'center'
    }
    return (<div style={totalDurationStyle}>{totalWorkoutTime()}</div>)
};

export default TotalDuration;