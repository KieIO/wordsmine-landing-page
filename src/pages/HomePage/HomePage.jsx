import React, { useState } from 'react';
import '../../sass/index.scss'
import Feature from '../../components/Feature/Feature';
import Topic from '../../components/Topic/Topic';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import Description from '../../components/Description/Description';
import Value from '../../components/Value/Value';
import Feedback from '../../components/Feedback/Feedback';
import AppDownload from '../../components/AppDownload/AppDownload';
import CTA from '../../components/CTA/CTA';

function HomePage() {
    const [isCloseToolTip, setIsCloseToolTip] = useState(false);

    const closeToolTip = () => {
        setIsCloseToolTip(!isCloseToolTip);
    }

    return (
        <main className="landing-page">
            <Header closeToolTip={closeToolTip} isCloseToolTip={isCloseToolTip} />
            <Banner isCloseToolTip={isCloseToolTip} />
            <Value />
            <Description />
            {/* <Topic /> */}
            <Feature />
            <Feedback />
            <AppDownload />
            <CTA />
            <Footer />
        </main>
    );
}

export default HomePage;
