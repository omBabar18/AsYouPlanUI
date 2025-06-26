//import { useState } from 'react'
// import Auth from './components/auth.jsx';
import { NavBarComponent } from './components/navbarBeforeSignup.jsx';
import HomePage from './pages/HomePage';
import { CssBaseline } from '@mui/material';

function App() {
  return (
    <div>
      {/* <Auth /> */}
      <>
      <NavBarComponent/>
      <CssBaseline />
      <HomePage />
    </>
    </div>
  );
}

export default App;
