import React from 'react'
import ImgValue1 from '../../img/value1.png'
import ImgValue2 from '../../img/value2.png'

const Feature = () => {
    return (
        <section className="feature u-padding-horizontal-section" id="feature">
            <div className="feature__disflex">
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
            </div>



        </section>
    );
}

export default Feature;