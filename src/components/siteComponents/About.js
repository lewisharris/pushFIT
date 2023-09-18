import React from "react";
import "./AboutStyle.scss";
import Hero from "./Hero";
import GetStartedBtn from "./GetStartedBtn";
import MediaOptions from "./MediaOptions";
import DummyProgress from "./DummyProgress";
import mobileImg from "../../images/mobile.svg";
import desktopImg from "../../images/desktop.svg";
import tvImg from "../../images/tv.svg";
import displayExampleImg from "../../images/display-example.png";
import AppLinkingImg from "../../images/app-linking.svg";
import sofaImg from "../../images/sofa-image.svg";

class About extends React.Component {
  render() {
    return (
      <div>
        <Hero
          image={sofaImg}
          heroHeader="Get fit from home"
          heroText="Workout from your living room"
        />

        <div className="media-options-flex-container">
          <h2 className="media-options-header">Work out anywhere</h2>
          <div className="media-options-flex">
            <MediaOptions img={mobileImg} text="Workout using mobile" />
            <MediaOptions img={desktopImg} text="PC or laptop" />
            <MediaOptions img={tvImg} text="TV" />
          </div>
        </div>

        <div className="section-dark">
          <img
            src={AppLinkingImg}
            alt="link-your-apps"
            className="section-image"
          ></img>
          <h2 className="section-header">
            Coming soon...
            <br />
            Seamlessly Connect your favourite songs to fuel your workouts
          </h2>
        </div>

        <div className="section-color">
          <h2 className="section-header">
            Build a high intensity HIIT workout
          </h2>
          <img
            src={displayExampleImg}
            alt="example-of-app"
            className="section-image"
          ></img>
          <p className="section-light-text">
            Choose the length of time you want to perform each exercise and your
            rest period to suit your needs and push your limits.
          </p>
        </div>

        <div className="section-light">
          <h2 className="section-header-dark">Create your own workout</h2>
          <GetStartedBtn toggle={this.props.toggle} />
        </div>

        <div className="section-dark">
          <h2 className="section-header">
            Easily Keep up with your workout with visual and audio cues
          </h2>
          <DummyProgress />
          <GetStartedBtn toggle={this.props.toggle} />
        </div>
      </div>
    );
  }
}

export default About;
