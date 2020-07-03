import React from 'react'
import ImgDes1 from '../../img/flashcard.jpg'
const Description = () => {
  return (
    <section className="description u-padding-horizontal-section" id="overview">
      <div className="description__content-padding">
        <h2>Fit your learning <br />into your busy day</h2>
        <p>Busy bee? No problem. We can capture new phrases whenever you get a free moment in your day. Little sprints that help you enlarge your word bank quickly.</p>
      </div>

      <div className="description__img">
        <img src={ImgDes1} alt="banner" ></img>
      </div>
    </section>
  );
}

export default Description;