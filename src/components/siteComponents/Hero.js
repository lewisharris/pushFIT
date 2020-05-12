import React from 'react';
import './Hero.scss';
import Mouse from './Mouse';

class Hero extends React.Component {
    render(){
        return(
            <div className="hero-container">
                <img className="hero-image" alt={this.props.image} src={this.props.image}></img>
                <h1 className="hero-header">{this.props.heroHeader}</h1>
                <p className="hero-text">{this.props.heroText}</p>
                <Mouse/>
            </div>
        )
    }
}

export default Hero;