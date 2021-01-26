import React, { Component } from 'react';
import About from '../About';
import Footer from '../Footer';
import Home from '../Home';
import Portifolio from '../Portifolio';
import Profile from '../Profile';
import SocialMedia from '../SocialMedia';
import Work from '../Work';



export default class Index extends Component {
  render() {
    return (
      <div>
        
        <Home />
        <Work />
        <Portifolio />
        <Profile />
        <About />
        <SocialMedia />
        
        <Footer />
       
      </div>
    )
  }
}