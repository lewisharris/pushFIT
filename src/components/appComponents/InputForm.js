import React from 'react';
import NumberInput from './NumberInput';
import "./InputFormStyle.scss";

class InputForm extends React.Component {

    render(){
        const formStyle = {
            background:'#303038',
            maxWidth:400,
            minWidth:300,
            minHeight:400,
            borderRadius:10,
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            margin:'10px auto',
            textAlign:'center'
        }
        return(
            <form style={formStyle} name="exercise" id="input-form">
                <label id="input-title" htmlFor="exercise-input">Exercise</label>
                <input type="text" name="exercise" id="exercise-input" placeholder={this.props.inputValue} onChange={(e) => this.props.handleInput(e)}></input>
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