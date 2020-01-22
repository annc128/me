import React from 'react';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';

function Home() {
  return (
      <div className="Home">
        <Header />
        <Portfolio></Portfolio>
        <About />

      </div>
  );
}
export default Home;

