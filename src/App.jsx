import { useState } from 'react'
// import Auth from './components/auth.jsx';
import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import {AsyouPlanLogoLoader} from './components/asYouPlanLogo.jsx';
import { NavBarComponentAfterSignUp } from './components/navBarAfterSignUp.jsx';
import {WhyToChooseUsComponent} from './components/whyToChooseUs.jsx';
import { ContactUsComponent } from './pages/contactUs.jsx';

function App() {
  return (
    <div>
      {/* <Auth /> */}
      {/* <NavBarComponent /> */}
      {/* <AsyouPlanLogoLoader /> */}
      {/* <NavBarComponentAfterSignUp /> */}
      {/* <WhyToChooseUsComponent /> */}
      <ContactUsComponent />
    </div>
  );
}

export default App;
