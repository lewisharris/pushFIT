import React from 'react';
import './App.css';
import Home from './components/Home'
import PushFitApp from './components/appComponents/PushFitApp';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      Home:true,
      PushFitApp:false
    }
  }


  toggle = (component) => { // toggle pages
    if(this.state[component]){
        this.setState({[component]:false})
    }
    else{
        this.setState({[component]:true})
    }
}

  render(){
    return (
      <div className="App">
        {(this.state.Home === true)?<Home toggle={this.toggle}/> : null}
        {(this.state.PushFitApp === true)?<PushFitApp/> :  null}
      </div>
    );
  }
}

export default App;
