import React from 'react';
import './App.scss';
import Home from './components/Home'
import { HashRouter as Router } from "react-router-dom";


class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
            <Home/>
        </div>
      </Router>
    );
  }
}

export default App;
