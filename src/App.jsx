import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
// import Auth from './components/auth.jsx';
// import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
// import Footer from './components/Footer.jsx';
import Navbar from "./components/Navbar.jsx"
import Footer_F from './components/Footer_F.jsx';
import AddNewTour from './pages/AddTour/AddTour.jsx';
function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <Auth /> */}
        {/* <NavBarComponent /> */}
        {/* <Footer_F/> */}
        {/* <Navbar/> */}
        <AddNewTour />
      </div>
    </BrowserRouter>
  );
}

export default App;
