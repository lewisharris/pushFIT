import React from 'react';
import './TotalDuration.scss';

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

    return (<div className="total-duration-style">{totalWorkoutTime()}</div>)
};

export default TotalDuration;