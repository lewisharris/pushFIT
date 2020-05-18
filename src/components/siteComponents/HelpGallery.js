import React from 'react';
import './HelpGallery.scss'

class HelpGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            mobile: [
                {   id:0,
                    image:"images/mobile-step-1.jpg",
                    header: 'Enter your exercise',
                    desc:"Enter your chosen exercise and select the duration you want to perform it for, Then simply hit enter or 'Add Exercise' to add to your workout. To then view your workout, click the 'View Workout' Icon"     
                },
                {   id:1,
                    image:"images/mobile-step-2.jpg",
                    header: 'Review your workout',
                    desc:"Your exercise will appear in the list also showing the duration circle, with green for easy, amber for avergage, and red for hard. To add new exercises hit the 'Add a new Exercise' button which will take you to the previous page."      
                },
                {   id:2,
                    image:"images/mobile-step-3.jpg",
                    header: 'Adjust rest period and start workout',
                    desc:'Choose your chosen rest period. This will be the time allocated between each exercise. Then start workout.'      
                },
                {   id:3,
                    image:"images/mobile-step-4.jpg",
                    header: 'Start Workout',
                    desc:'Your workout will begin with the countdown timer running. Perform the exercise until the timer runs out and then rest.'      
                },
                {   id:4,
                    image:"images/mobile-step-5.jpg",
                    header: 'Take a rest',
                    desc:'During the rest period, the next exercise will be shown so you can get ready.'      
                }
            ],
            desktop: [
                {   id:0,
                    image:"images/desktop-step-1.jpg",
                    header: 'Enter your exercise',
                    desc:"Enter your chosen exercise and select the duration you want to perform it for, Then simply hit enter or 'Add Exercise' to add to your workout. To then view your workout, click the 'View Workout' Icon"      
                },
                {   id:1,
                    image:"images/desktop-step-2.jpg",
                    header: 'Review your workout',
                    desc:"Your exercise will appear in the list also showing the duration circle, with green for easy, amber for avergage, and red for hard. To add new exercises hit the 'Add a new Exercise' button which will take you to the previous page."      
                },
                {   id:2,
                    image:"images/desktop-step-3.jpg",
                    header: 'Adjust rest period and start workout',
                    desc:'Choose your chosen rest period. This will be the time allocated between each exercise. Then start workout.'      
                },
                {   id:3,
                    image:"images/desktop-step-4.jpg",
                    header: 'Start Workout',
                    desc:'Your workout will begin with the countdown timer running. Perform the exercise until the timer runs out and then rest.'      
                },
                {   id:4,
                    image:"images/desktop-step-5.jpg",
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