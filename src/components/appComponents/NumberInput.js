import React from 'react';
import './NumberInput.scss'

class NumberInput extends React.Component {
    handleIncrement = (event) => {
        event.preventDefault();
        this.props.increment();
    }

    handleDecrement = (event) => {
        event.preventDefault();
        this.props.decrement();
    }

    render(){
        return(
            <div>
                <button className="inc-dec" id='decrement' onClick={this.handleDecrement} type="button">-</button>
                <input className="numInput" min='0' max='90'type="number" name="duration" value={this.props.durationValue} onChange={(e) => this.props.handleInput(e)}></input>
                <button className="inc-dec" id='increment' onClick={this.handleIncrement} type="button">+</button>
            </div>
        )
    }
}

export default NumberInput;