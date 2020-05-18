import React from 'react';
import './App.scss';
import Home from './components/Home'
import { BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
            <Home toggle={this.toggle}/>
        </div>
      </Router>
    );
  }
}

export default App;
