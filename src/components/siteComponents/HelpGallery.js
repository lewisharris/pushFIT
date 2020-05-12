import React from 'react';
import './HelpGallery.scss'

class HelpGallery extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            count:0,
            mobile: [
                {   id:0,
                    image:"images/display-example.png",
                    header: 'mobile step 1',
                    desc:'this is where the description goes 1'      
                },
                {   id:1,
                    image:"mobile-image-2.jpg",
                    header: 'mobile step 2',
                    desc:'this is where the description goes 2'      
                },
                {   id:2,
                    image:"mobile-image-3.jpg",
                    header: 'mobile step 3',
                    desc:'this is where the description goes 3'      
                },
                {   id:3,
                    image:"mobile-image-4.jpg",
                    header: 'mobile step 4',
                    desc:'this is where the description goes 4'      
                },
                {   id:4,
                    image:"mobile-image-5.jpg",
                    header: 'mobile step 5',
                    desc:'this is where the description goes 5'      
                }
            ],
            desktop: [
                {   id:0,
                    image:"desktop-image-1.jpg",
                    header: 'desktop step 1',
                    desc:'this is where the description goes 1'      
                },
                {   id:1,
                    image:"desktop-image-2.jpg",
                    header: 'desktop step 2',
                    desc:'this is where the description goes 2'      
                },
                {   id:2,
                    image:"desktop-image-3.jpg",
                    header: 'desktop step 3',
                    desc:'this is where the description goes 3'      
                },
                {   id:3,
                    image:"desktop-image-4.jpg",
                    header: 'desktop step 4',
                    desc:'this is where the description goes 4'      
                },
                {   id:4,
                    image:"desktop-image-5.jpg",
                    header: 'desktop step 5',
                    desc:'this is where the description goes 5'      
                }
            ]
        }
    }

    handleDecrement = () => {
        if(this.state.count > 0){
            this.setState({count:this.state.count -1})
        }
        else{
            return
        }
    };

    handleIncrement = () => {
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