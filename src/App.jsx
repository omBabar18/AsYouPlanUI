import { useState } from 'react'
// import Auth from './components/auth.jsx';
import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import Footer from './components/Footer.jsx';
import CustomerReview from './components/CustomerReview.jsx';
import PaymentGatewayForm from './pages/paymentGatewayForm.jsx';
import CreateTicket from './components/createTicket.jsx';
function App() {
  return (
    <div>
      {/* <Auth /> */}
      {/* <NavBarComponent /> */}
      <CustomerReview/>
      
      {/* {<PaymentGatewayForm/>} */}
      {/* <Footer/> */}
      {/* {<CreateTicket/>} */}
    </div>
  );
}

export default App;
