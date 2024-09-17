import React from 'react';
import Navigation from './nav';
import Intro from './intro';
import AboutPage from './about';
import CardGroup from './cards';
import BioGrid from './bios';
import RelatedWorks from './papers';
import Footer from './footer';
import { Box } from '@chakra-ui/react';
import './index.css';

function App() {
  return (
    <Box height="100vh" overflow="hidden">
      <Navigation isDarkBackground={false} />
      <Box className="snap-container" height="100%" paddingTop="100px"> 
        <section className="snap-section">
          <Intro />
        </section>
        <section className="snap-section">
          <AboutPage />
        </section>
        <section className="snap-section">
          <CardGroup />
        </section>
        <section className="snap-section">
          <BioGrid />
        </section>
        <section className="snap-section">
          <RelatedWorks />
          <Footer />
        </section>
      </Box>
      
    </Box>
  );
}

export default App;