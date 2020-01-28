import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      {/* <Route exact path="/" component={Home} /> */}
      {/* <Route path="/portfolio" component={Portfolio} /> */}
      <div className="App">
        <Navbar />
        <Header />
        <Portfolio></Portfolio>
        <Timeline title='experience' />
        <Timeline title='education' />
        <About />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
