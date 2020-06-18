import React from 'react';
import './sass/index.scss'
import Feature from './components/Feature/Feature';
import Topic from './components/Topic/Topic';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <main className="landing-page">
      {/* HEADER */}
      <Header/>
      {/* BANNER */}

      {/* FEATURE */}
      <Feature/> 

      {/* DESCRIPTION  */}

      {/* TOPIC  */}
      <Topic/>
      {/* VALUE  */}
      
      {/* FEEBACK  */}
      
      {/* APP DOWLOAD  */}
      
      {/* CTA  */}

      {/* FOOTER  */}
        <Footer/>
    </main>
  );
}

export default App;
