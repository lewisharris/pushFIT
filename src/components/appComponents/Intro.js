import React from 'react';
import LoaderBar from './LoaderBar'

class Intro extends React.Component {

    componentDidMount(){
        this.timer = setTimeout(() => {
            this.props.toggle('Workout')
            this.props.toggle('Intro')
        },5000);
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render(){
        const introStyle = {
            height:'100vh',
            width:'100vw'
        }
        const loaderHeaderStyle = {
            margin:'50px auto',
            textAlign:'center',
            fontSize:60
        }
        
        return(
            <div style={introStyle}>
                <h1 style={loaderHeaderStyle}>pushFit</h1>
                <LoaderBar toggle = {this.props.toggle}/>
            </div>
        )
    }
}

export default Intro