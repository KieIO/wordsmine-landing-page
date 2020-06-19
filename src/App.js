import React from 'react';
import './sass/index.scss'
import Feature from './components/Feature/Feature';
import Topic from './components/Topic/Topic';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Value from './components/Value/Value';
import Feedback from './components/Feedback/Feedback';
import AppDownload from './components/AppDownload/AppDownload';
import CTA from './components/CTA/CTA';

function App() {
  return (
    <main className="landing-page">
      {/* HEADER */}
      <Header />
      {/* BANNER */}
      <Banner/>
      {/* FEATURE */}
      <Feature />

      {/* DESCRIPTION  */}
      <Description/>

      {/* TOPIC  */}
      <Topic />
      {/* VALUE  */}
      <Value/>

      {/* FEEBACK  */}
      <Feedback />

      {/* APP DOWLOAD  */}
      <AppDownload />

      {/* CTA  */}
      <CTA />

      {/* FOOTER  */}

    </main>
  );
}

export default App;
