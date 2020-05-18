import React from 'react';
import './Hero.scss';
import Mouse from './Mouse';

const Hero = props => {
        return(
            <div className="hero-container">
                <img className="hero-image" alt={props.image} src={props.image}></img>
                <div>
                    <h1 className="hero-header">{props.heroHeader}</h1>
                    <p className="hero-text">{props.heroText}</p>
                </div>
                <Mouse/>
            </div>
        )
}

export default Hero;