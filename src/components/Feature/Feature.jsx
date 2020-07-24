import React from "react";
import ImgValue1 from "../../img/value1.png";
import ImgValue2 from "../../img/value2.png";
import Heading from "../Heading/Heading";
import "./Feature.scss";

const Feature = () => {
  return (
    <section className="feature u-padding-horizontal-section" id="feature">
      <div className="topic__heading">
        <Heading>What you can do with Wordsmine!?</Heading>
      </div>
      <div className="feature__disflex">
        <div className="feature__img col-6">
          <img src={ImgValue1} alt="feature"></img>
        </div>
        <div className="col-6 feature__content-padding-left">
          <h2>Save words from selection</h2>
          <p>You can collect any words from any pages.</p>
        </div>
      </div>

      <div className="feature__disflex">
        <div className="col-6 feature__content-padding">
          <h2>Save words from clipboard</h2>
          <p>
            You are in hurry? Don't worry, we also allow to you to save words on
            the go while surfing the net.
          </p>
        </div>

        <div className="feature__img col-6">
          <img src={ImgValue2} alt="feature"></img>
        </div>
      </div>

      <div className="feature__disflex">
        <div className="col-6 feature__content-padding">
          <h2>Collect words from mobile web</h2>
          <p>
            You are in hurry? Don't worry, we also allow to you to save words on
            the go while surfing the net.
          </p>
        </div>

        <div className="feature__img col-6">
          <img src={ImgValue2} alt="feature"></img>
        </div>
      </div>

      <div className="feature__disflex">
        <div className="col-6 feature__content-padding">
          <h2>Use flashcard mode to memorize your learning</h2>
          <p>
            You are in hurry? Don't worry, we also allow to you to save words on
            the go while surfing the net.
          </p>
        </div>

        <div className="feature__img col-6">
          <img src={ImgValue2} alt="feature"></img>
        </div>
      </div>

      <div className="feature__disflex">
        <div className="col-6 feature__content-padding">
          <h2>Lookup for definition from reliable sources</h2>
          <p>
            You are in hurry? Don't worry, we also allow to you to save words on
            the go while surfing the net.
          </p>
        </div>

        <div className="feature__img col-6">
          <img src={ImgValue2} alt="feature"></img>
        </div>
      </div>

      <div className="feature__disflex">
        <div className="col-6 feature__content-padding">
          <h2>Customize your definition as you want</h2>
          <p>
            You are in hurry? Don't worry, we also allow to you to save words on
            the go while surfing the net.
          </p>
        </div>

        <div className="feature__img col-6">
          <img src={ImgValue2} alt="feature"></img>
        </div>
      </div>
    </section>
  );
};

export default Feature;
