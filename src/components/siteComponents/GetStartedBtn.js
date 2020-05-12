import React from 'react';
import './GetStartedBtn.scss';

const GetStartedBtn = (props) => {
        return(
            <button className='GetStartedBtn' onClick={() => {props.toggle('Home'); props.toggle('PushFitApp')}}>Get Started</button>        
            )
}

export default GetStartedBtn;