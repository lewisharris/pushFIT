import React from 'react';
import NumberInput from './NumberInput';
import "./InputFormStyle.scss";

class InputForm extends React.Component {
    constructor(props){
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount(){
        this.inputRef.current.focus();
    }

    render(){
        return(
            <form className="form-style" name="exercise" id="input-form">
                <label id="input-title" htmlFor="exercise-input">Exercise</label>
                <input ref={this.inputRef} type="text" name="exercise" id="exercise-input" placeholder={this.props.inputValue} onChange={(e) => this.props.handleInput(e)}></input>
                <hr id="form-line-break"></hr>
                <label>Duration</label>
                <NumberInput    handleInput={this.props.handleInput.bind(this)}
                                durationValue={this.props.durationValue}
                                increment = {this.props.increment}
                                decrement = {this.props.decrement}/>
            </form>
        )
    }
}

export default InputForm;