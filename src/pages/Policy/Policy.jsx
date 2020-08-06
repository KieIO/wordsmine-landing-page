import React from 'react';
import './Policy.scss';

const Policy = () => {
    return (
        <section className="policy">
            <h1>Privacy Policy</h1>
            <div className="information">
                <h2>Information Collected</h2>
                <p>“Wordsmine!” (the extension) only stores information related to the account created, for such, name and other personal information. Besides that, we also store the vocabulary that users created in their account.</p>
            </div>
            <div className="analytics">
                <h2>Analytics</h2>
                <p>“Wordsmine!” contains no analytics or tracking software.</p>
            </div>
            <div className="consent">
                <h2>Your Consent</h2>
                <p>By using the extension you consent to our privacy policy.</p>
            </div>
        </section>
    );
};

export default Policy;