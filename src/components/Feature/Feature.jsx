import React from "react";
// import ImgValue1 from '../../img/value1.png'
// import ImgValue2 from '../../img/value2.png'

import "./Feature.scss";
import FeatureItem from "./FeatureItem/FeatureItem";
import Heading from "../Heading/Heading";

const features = [
  {
    key: 1,
    img: "",
    content:
      "Save words from selection. You can collect any words from any pages.",
  },
  {
    key: 2,
    img: "",
    content:
      "Save words from clipboard. You are in hurry? Don't worry, we also allow to you to save words on the go while surfing the net.",
  },
  {
    key: 3,
    img: "",
    content: "Collect words from mobile web",
  },
  {
    key: 4,
    img: "",
    content: "Use flashcard mode to memorize your learning",
  },
  {
    key: 5,
    img: "",
    content: "Lookup for definition from reliable sources",
  },
  {
    key: 6,
    img: "",
    content: "Customize your definition as you want",
  },
];

const Feature = () => {
  return (
    <section
      className="feature u-padding-horizontal-section u-margin-vertical-section"
      id="feature"
    >
      <Heading>What you can do with Wordsmine?</Heading>
      <div className="content">
        {features.map((item) => (
          <FeatureItem key={item.key} img={item.img} content={item.content} />
        ))}
      </div>

      {/* <div className="feature__disflex">
                <div className="feature__img col-6">
                    <img src={ImgValue1} alt="feature" ></img>
                </div>
                <div className="col-6 feature__content-padding-left">
                    <h2>Your next win is just a fact away</h2>
                    <p>From flashcards to help you learn francais, to games that make it easy to get a handle on history, use a variety of tools to conquer any challenge.</p>
                </div>
            </div>

            <div className="feature__disflex">
                <div className="col-6 feature__content-padding">
                    <h2>Don’t get frustrated. Get it done.</h2>
                    <p>From flashcards to help you learn francais, to games that make it easy to get a handle on history, use a variety of tools to conquer any challenge.</p>
                </div>

                <div className="feature__img col-6">
                    <img src={ImgValue2} alt="feature" ></img>
                </div>
            </div> */}
    </section>
  );
};

export default Feature;
