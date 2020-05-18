import React from 'react';
import './HelpGallery.scss';
import mobileImg1 from '../../images/mobile-step-1.jpg';
import mobileImg2 from '../../images/mobile-step-2.jpg';
import mobileImg3 from '../../images/mobile-step-3.jpg';
import mobileImg4 from '../../images/mobile-step-4.jpg';
import mobileImg5 from '../../images/mobile-step-5.jpg';

import desktopImg1 from '../../images/desktop-step-1.jpg';
import desktopImg2 from '../../images/desktop-step-2.jpg';
import desktopImg3 from '../../images/desktop-step-3.jpg';
import desktopImg4 from '../../images/desktop-step-4.jpg';
import desktopImg5 from '../../images/desktop-step-5.jpg';

class HelpGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            mobile: [
                {   id:0,
                    image: mobileImg1,
                    header: 'Enter your exercise',
                    desc:"Enter your chosen exercise and select the duration you want to perform it for, Then simply hit enter or 'Add Exercise' to add to your workout. To then view your workout, click the 'View Workout' Icon"     
                },
                {   id:1,
                    image: mobileImg2,
                    header: 'Review your workout',
                    desc:"Your exercise will appear in the list also showing the duration circle, with green for easy, amber for avergage, and red for hard. To add new exercises hit the 'Add a new Exercise' button which will take you to the previous page."      
                },
                {   id:2,
                    image: mobileImg3,
                    header: 'Adjust rest period and start workout',
                    desc:'Choose your chosen rest period. This will be the time allocated between each exercise. Then start workout.'      
                },
                {   id:3,
                    image: mobileImg4,
                    header: 'Start Workout',
                    desc:'Your workout will begin with the countdown timer running. Perform the exercise until the timer runs out and then rest.'      
                },
                {   id:4,
                    image: mobileImg5,
                    header: 'Take a rest',
                    desc:'During the rest period, the next exercise will be shown so you can get ready.'      
                }
            ],
            desktop: [
                {   id:0,
                    image: desktopImg1,
                    header: 'Enter your exercise',
                    desc:"Enter your chosen exercise and select the duration you want to perform it for, Then simply hit enter or 'Add Exercise' to add to your workout. To then view your workout, click the 'View Workout' Icon"      
                },
                {   id:1,
                    image: desktopImg2,
                    header: 'Review your workout',
                    desc:"Your exercise will appear in the list also showing the duration circle, with green for easy, amber for avergage, and red for hard. To add new exercises hit the 'Add a new Exercise' button which will take you to the previous page."      
                },
                {   id:2,
                    image: desktopImg3,
                    header: 'Adjust rest period and start workout',
                    desc:'Choose your chosen rest period. This will be the time allocated between each exercise. Then start workout.'      
                },
                {   id:3,
                    image: desktopImg4,
                    header: 'Start Workout',
                    desc:'Your workout will begin with the countdown timer running. Perform the exercise until the timer runs out and then rest.'      
                },
                {   id:4,
                    image: desktopImg5,
                    header: 'Take a rest',
                    desc:'During the rest period, the next exercise will be shown so you can get ready.'      
                }
            ]
        }
    }

    handleDecrement = () => { //move to the previous step in the help gallery
        if(this.state.count > 0){
            this.setState({count:this.state.count -1})
        }
        else{
            return
        }
    };

    handleIncrement = () => { //move to the next step in the help gallery
        if(this.state.count < this.state[this.props.media].length -1){
            this.setState({count:this.state.count + 1})
        }
        else{
            return
        }
    };
    render(){
        const count = this.state.count;
        const media = this.props.media;
        return(
            <div className="gallery-container">
                <h3 className="gallery-header">{this.state[media][count].header}</h3>
                <img className="gallery-image" src={this.state[media][count].image} alt={media[count].image}></img>
                <p className="gallery-text">{this.state[media][count].desc}</p>
                <button onClick={this.handleDecrement} className="gallery-btn-prev"><div className="button-icon-prev"></div></button>
                <button onClick={this.handleIncrement} className="gallery-btn-next"><div className="button-icon-next"></div></button>
            </div>
        )
    }

}
export default HelpGallery;