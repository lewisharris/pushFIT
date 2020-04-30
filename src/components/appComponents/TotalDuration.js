import React from 'react';

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

const TotalDuration = (props) => {
    return (<div style={totalDurationStyle}>{props.totalDur}</div>)
};

export default TotalDuration;