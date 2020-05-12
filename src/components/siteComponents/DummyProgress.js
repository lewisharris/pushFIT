import React from 'react';
import './DummyProgress.scss';
import ProgressBar from '../appComponents/ProgressBar'

class DummyProgress extends React.Component {
    constructor(props){
        super(props)
        this.state= {
            count:0,
            totalCount:5
        }
    }


    componentDidMount(){
        this.incrementCount = setInterval(() => {
            if(this.state.count < 5){
                this.setState({count:this.state.count +1})
            }
            else{
                this.setState({count:0})
            }
        }, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.incrementCount);
    }
    render(){
        return(
            <div className="Dummy-progress-outer-container">
                <div className="Dummy-progress-inner-container">
                    <div>
                    <ProgressBar    progress = {this.state.count}
                                                textSize = {100}
                                                totalTime = {this.state.totalCount}
                                                size = {200}
                                                strokeWidth = {10}
                                                circleOneStroke = '#4fe5ff'
                                                circleTwoStroke = '#60888f'/>
                    </div>
                </div>
            </div>
        )
    }
}

export default DummyProgress;