import { useState } from 'react'
// import Auth from './components/auth.jsx';
import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div>
      {/* <Auth /> */}
      <NavBarComponent />
      <Footer/>
    </div>
  );
}

export default App;
