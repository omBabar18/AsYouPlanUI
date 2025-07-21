// import Auth from './components/auth.jsx';
import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import CustomerReview from './components/CustomerReview.jsx';
import Navbar from './components/Navbar.jsx';
import SignInSignUp from './components/signInsignUp';
import ContactPAge from './components/ContactPAge';

function App() {
  return (
   

<BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/auth" element={<SignInSignUp />} />
    <Route path="/contact" element={<ContactPAge />} />
    {/* other routes */}
  </Routes>
  <Footer/>
</BrowserRouter>

  );
}

export default App;
