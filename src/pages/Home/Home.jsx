import './Home.css';

import React from 'react';

import { Hero } from 'components/Hero/Hero';

const Home = () => (
  <div className="container">
    <h1 className="title">
      Start your own phonebook with <p>PhoneMe!</p>
    </h1>
    <Hero />
  </div>
);
export default Home;
