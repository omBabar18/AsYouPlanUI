import { useState } from 'react'
// import Auth from './components/auth.jsx';
// import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import {AsyouPlanLogoLoader} from './components/asYouPlanLogo.jsx';
import { NavBarComponentAfterSignUp } from './components/navBarAfterSignUp.jsx';
import {WhyToChooseUsComponent} from './components/whyToChooseUs.jsx';

function App() {
  return (
    <div>
      {/* <Auth /> */}
      {/* <NavBarComponent /> */}
      {/* <AsyouPlanLogoLoader /> */}
      <NavBarComponentAfterSignUp />
      <WhyToChooseUsComponent />
    </div>
  );
}

export default App;
