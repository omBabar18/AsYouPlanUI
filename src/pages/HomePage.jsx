import React from 'react';
import Header from "./LandingPage/Header/Header";
import HeroSection from "./LandingPage/Hero/HeroSection";
import SearchBox from "./LandingPage/SearchBox/SearchBox";
import { Container } from "@mui/material";
import UpcomingEvents from './LandingPage/UpcomingEvents';

const HomePage = () => {
  return (
    <div className="home-page" style={{ position: 'relative' }}>
      <Header />
      <HeroSection />
      <UpcomingEvents />
      {/* <Container maxWidth="lg" className="search-container">
        <SearchBox />
      </Container> */}
    </div>
  );
};

export default HomePage;