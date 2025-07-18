//import { useState } from 'react'
import Auth from './components/auth.jsx';
import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import HomePage from './pages/HomePage.jsx';
import { WhyToChooseUsComponent } from './components/whyToChooseUs.jsx';
import Footer from './components/footer.jsx';
//import Footer from './components/Footer.jsx';
//import CustomerReview from './components/CustomerReview.jsx';
import CareersPage from './pages/Careers.jsx';

function App() {
  return (
    <div>
      {/* <Auth /> */} 
      {/* <NavBarComponent /> */}
      {/* <HomePage/> */}
      {/* <WhyToChooseUsComponent /> */}
      {/* <Footer/> */}
      {/* Add more components as needed */}
      {/* <Footer /> */}
      <CareersPage />
    </div>
  );
}

export default App;
