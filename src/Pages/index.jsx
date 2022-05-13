import React, {Component} from 'react';
import Footer from '../Components/Footer/Footer';
import Hero from '../Components/HomePage/Hero/Hero';
import Perspective from '../Components/HomePage/Perspective/Perspective';
import TechInfo from '../Components/HomePage/TechInfo/TechInfo';
import TechNews from '../Components/HomePage/TechNews/TechNews';
import TechTrends from '../Components/HomePage/TechTrends/TechTrends';
import Testimonials from '../Components/HomePage/Testimonials/Testimonials';
import Works from '../Components/HomePage/Works/Works';
import Nav from '../Components/Nav/Nav';

import BackToTop from '../Components/BackToTop/BackToTop';



class IndexPage extends Component {

   

  render() {
    return (
      <div className="App">
        <div className="container-fluid p-0">
          <Nav />
          <Hero />
          <TechNews />
          <TechInfo />
          <TechTrends />
          <Testimonials />
          <Works />
          <Perspective />
          <Footer />
          <BackToTop />
        </div>
      </div>
    )
  }
}

export default IndexPage;