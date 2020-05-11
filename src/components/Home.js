import React from 'react';
import Navbar from './siteComponents/Navbar';
import About from './siteComponents/About';
import Help from './siteComponents/Help';
import Footer from './siteComponents/Footer';

class Home extends React.Component {

    togglePage = () => {

    }

    render(){
        return(
            <div>
                <Navbar toggle = {this.togglePage}/>
                <About/>
                <Help/>
                <Footer/>
            </div>
        )
    }
};

export default Home;