import React from 'react';
import Header from '../components/Header';
import AboutMe from '../components/AboutMe';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Service from '../components/Service';
import Portfolio from '../components/Portfolio';
import Review from '../components/Review';
import ContactMe from '../components/ContactMe';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Education />
      <Experience />
      <Service />
      <Portfolio />
      <Review />
      <ContactMe />
    </div>
  );
};

export default Home;