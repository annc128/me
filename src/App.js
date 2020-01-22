import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      {/* <Route path="/portfolio" component={Portfolio} /> */}
      <div className="App">
        <Navbar />
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
