import React from 'react';
import './sass/index.scss'
import Feature from './components/Feature/Feature';
import Topic from './components/Topic/Topic';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Description from './components/Description/Description';
import Value from './components/Value/Value';

function App() {
  return (
    <main className="landing-page">
      {/* HEADER */}
      <Header/>
      {/* BANNER */}
      <Banner/>
      {/* FEATURE */}
      <Feature/> 

      {/* DESCRIPTION  */}
      <Description/>

      {/* TOPIC  */}
      <Topic/>
      {/* VALUE  */}
      <Value/>
      {/* FEEBACK  */}
      
      {/* APP DOWLOAD  */}
      
      {/* CTA  */}

      {/* FOOTER  */}
      
    </main>
  );
}

export default App;
