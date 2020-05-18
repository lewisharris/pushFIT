import React from 'react';
import Navbar from './siteComponents/Navbar';
import Footer from './siteComponents/Footer';
import About from './siteComponents/About';
import Help from './siteComponents/Help';
import Hamburger from './siteComponents/Hamburger';
import PushFitApp from '../components/appComponents/PushFitApp';
import {Switch, Route, useLocation } from "react-router-dom";

const Home = props => {
    window.scrollTo(0, 0)
    let location = useLocation();

    const checkWindowSize = () => {
        if(window.innerWidth <= 700){
            return true
        }
        else{
            return false
        }
    }

    window.addEventListener('resize', checkWindowSize);

        return(
                <div>
                    {(location.pathname.indexOf('pushfitapp') > -1)? null : <Navbar/>}

                    {(checkWindowSize === true)? <Hamburger/> : null}
                    <Switch>
                        <Route path="/pushFIT" exact basename={process.env.PUBLIC_URL} component={About}/>
                        <Route path="/help" component={Help}/>
                        <Route path="/pushfitapp" component={PushFitApp}/>
                    </Switch>
                    {(location.pathname.indexOf('pushfitapp') > -1)? null : <Footer/>}
                </div>
        )
};
export default Home;