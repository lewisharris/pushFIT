import React from 'react';
import './App.scss';
import Home from './components/Home'
import { BrowserRouter as Router } from "react-router-dom";


class App extends React.Component {

  render(){
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
            <Home/>
        </div>
      </Router>
    );
  }
}

export default App;
