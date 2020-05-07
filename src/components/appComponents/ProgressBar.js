import React, {useEffect, useState, useRef } from 'react';
import './ProgressBar.scss'


// <p className="progress-text">{this.props.currentTime}{this.props.suffix}</p>
const ProgressBar = (props) => { 

    const [offset, setOffset] = useState(0);
    const circleRef = useRef(null);

    const { 
        size,
        textSize, 
        progress,
        suffix,
        totalTime,
        strokeWidth, 
        circleOneStroke, 
        circleTwoStroke,
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = - ((totalTime - progress) / totalTime) * circumference;
        setOffset(progressOffset);
        circleRef.current.style = 'transition: stroke-dashoffset 1000ms linear;';
    }, [setOffset, circumference, progress, offset,totalTime]);




        return(
            <div className='progress-bar'>
                <svg
                    className="progress-svg"
                    height= {size}
                    width= {size}>

  
                    <circle 
                        className = "svg-circle-bg"
                        stroke = {circleOneStroke}
                        cx = {center}
                        cy = {center}
                        r = {radius}
                        strokeWidth = {strokeWidth - 0.2}
                    />

                    <circle
                        className = "svg-circle"
                        stroke = {circleTwoStroke}
                        cx = {center}
                        cy = {center}
                        r = {radius}
                        strokeWidth = {strokeWidth}
                        strokeDasharray = {circumference}
                        strokeDashoffset = {offset}
                        ref={circleRef}
                    />


                    <text className="svg-circle-text" fontSize={textSize} x={center} y={center}>
                    {progress}{suffix}
                    </text>


                </svg>
            </div>
    )
}


export default ProgressBar;