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
      "<strong>Save words from selection</strong><p>You can store any words from any pages. All the vocabularies are saved for later reviewing just in one place</p>",
  },
  {
    key: 2,
    img: "",
    content:
      "<strong>Save words from clipboard</strong><p>You are in hurry? Don't worry, we also allow to you to save words on the go while surfing the net</p>",
  },
  {
    key: 3,
    img: "",
    content: "<strong>Collect words from mobile</strong><p>Catch some new words when browsing web in mobile, we can capture them too</p>",
  },
  {
    key: 4,
    img: "",
    content: "<strong>Use flashcard mode to memorize your learning</strong><p>No more forgetting every new word you see everyday, we help put them to stay engraved in your memory</p>",
  },
  {
    key: 5,
    img: "",
    content: "<strong>Lookup for definition from reliable sources</strong><p>Learn to use your words wisely in proper context, word definition is provided from different reputable sources</p>",
  },
  {
    key: 6,
    img: "",
    content: "<strong>Customize your definition as you want</strong><p>Personalize the word definition to your desire so it can be more memorable only for you</p>",
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
