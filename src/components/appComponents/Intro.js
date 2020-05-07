import React from 'react';
import LoaderBar from './LoaderBar';
import './Intro.scss';

class Intro extends React.Component {

    componentDidMount(){
        this.timer = setTimeout(() => {
            this.props.toggle('Workout')
            this.props.toggle('Intro')
        },5000);

        this.props.setFirstExerciseTime();
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render(){        
        return(
            <div className='intro-style'>
                <h1 className='loader-header-style'>pushFit</h1>
                <LoaderBar toggle = {this.props.toggle}/>
            </div>
        )
    }
}

export default Intro