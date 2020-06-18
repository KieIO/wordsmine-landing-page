import React from 'react'
import ImgValue1 from '../../img/value1.png'
import ImgValue2 from '../../img/value2.png'

const Value = () => {
    return (
        <section className="value">
            <div class="value__disflex">
                <div class="value__img col-6">
                    <img src={ImgValue1} alt="value" ></img>
                </div>
                <div class="col-6 value__content-padding-left">
                    <h2>Your next win is just
a fact away</h2>
                    <p>From flashcards to help you learn francais, to games that make it easy to get a handle on history, use a variety of tools to conquer any challenge.</p>
                </div>
            </div>

<div className="banner__space"></div>

            <div class="value__disflex">
                <div class="col-6 value__content-padding">
                    <h2>Don’t get frustrated. Get it done.</h2>
                    <p>From flashcards to help you learn francais, to games that make it easy to get a handle on history, use a variety of tools to conquer any challenge.</p>
                </div>

                <div class="value__img col-6">
                    <img src={ImgValue2} alt="value" ></img>
                </div>
            </div>



        </section>
    );
}

export default Value;