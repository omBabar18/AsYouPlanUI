import Auth from './components/auth.jsx';
import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import HomePage from './pages/HomePage.jsx';
import { WhyToChooseUsComponent } from './components/whyToChooseUs.jsx';
import Footer from './components/footer.jsx';
//import Footer from './components/Footer.jsx';
//import CustomerReview from './components/CustomerReview.jsx';
import CareersPage from './pages/Careers.jsx';
import HelpDesk from './pages/HelpDesk.jsx';

function App() {
  return (
    <div>
      {/* Uncomment components as needed */}
      {/* <Auth /> */}
      <NavBarComponent />
      <HomePage />
      <WhyToChooseUsComponent />
      {/* <CareersPage /> */}
      <HelpDesk />
      <Footer />
    </div>
  );
}

export default App;
