import { useState } from 'react'
// import Auth from './components/auth.jsx';
import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import Footer from './components/Footer.jsx';
import CustomerReview from './components/CustomerReview.jsx';

function App() {
  return (
    <div>
      {/* <Auth /> */}
      <NavBarComponent />
      <CustomerReview/>
      <Footer/>
    </div>
  );
}

export default App;
