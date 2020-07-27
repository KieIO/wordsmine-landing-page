import React from "react";
import ImgDes1 from "../../img/flashcard.jpg";
import "./Description.scss";

const Description = () => {
  return (
    <section className="description u-padding-horizontal-section" id="overview">
      <div className="description__content-padding">
        {/* <h2>Fit your learning <br />into your busy day</h2> */}
        <h2>
          What is Wordsmine?
          <br />
        </h2>
        <p>
          Wordsmine is the first second language learning app that helps you
          collect vocabulary you see in daily Internet-surfing activities, and
          learn them faster by giving you scientific approaches and
          contextualized examples taken from reliable sources.
        </p>
      </div>

      <div className="description__img">
        <img src={ImgDes1} alt="banner"></img>
      </div>
    </section>
  );
};

export default Description;
