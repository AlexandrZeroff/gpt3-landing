import React from "react";
import './App.css';
import { Navbar, Brand, Cta } from './components';
import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';

const App = () => {
  return (
    <div>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
