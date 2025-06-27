import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Paper, TextField, InputAdornment, Popover, IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import './HeroSection.css';
import lp1 from '../../../assets/styles/imgs/landingpage1.jpg'
import lp2 from '../../../assets/styles/imgs/landingpage2.jpg'
import lp3 from '../../../assets/styles/imgs/landingpage3.jpg'  
import lp4 from '../../../assets/styles/imgs/landingpage4.jpg'
import lp5 from '../../../assets/styles/imgs/landingpage5.jpg'
const backgroundImages = [
  lp1,
  lp2,
  lp3,
  lp4,
  lp5
]

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('hotel');
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [guests, setGuests] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentBgIndex, setCurrentBgIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentBgIndex((prevIndex) =>
          prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
        );
        setFade(true);
      }, 600); // duration of fade-out
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setGuests(
      `${adults} Adult${adults > 1 ? 's' : ''}${children > 0 ? `, ${children} Child${children > 1 ? 'ren' : ''}` : ''}`
    );
  }, [adults, children]);

  const handleGuestClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleGuestClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div id="webcrumbs">
            <div className="w-full bg-blue-600 text-white shadow-lg relative z-50 px-4 lg:px-8">
                <nav className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                            <span className="material-symbols-outlined text-blue-600 text-2xl">flight_takeoff</span>
                        </div>
                        <span className="ml-3 text-xl font-bold">TravelCo</span>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <a
                            href="#"
                            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
                        >
                            <span className="material-symbols-outlined text-sm">home</span>
                            <span>Home</span>
                        </a>

                        <a
                            href="#"
                            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
                        >
                            <span className="material-symbols-outlined text-sm">info</span>
                            <span>About Us</span>
                        </a>

                        <details className="relative">
                            <summary className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200 cursor-pointer list-none">
                                <span className="material-symbols-outlined text-sm">business_center</span>
                                <span>Services</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </summary>
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white text-gray-800 rounded-lg shadow-xl z-50 py-2">
                                <a
                                    href="#"
                                    className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
                                >
                                    <span className="material-symbols-outlined text-sm">hotel</span>
                                    <span>Hotels</span>
                                </a>
                                <a
                                    href="#"
                                    className="flex items-center space-x-2 px-4 py-2 hover:bg-blue-50 transition-colors duration-200"
                                >
                                    <span className="material-symbols-outlined text-sm">tour</span>
                                    <span>Tours</span>
                                </a>
                            </div>
                        </details>

                        <a
                            href="#"
                            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
                        >
                            <span className="material-symbols-outlined text-sm">contact_mail</span>
                            <span>Contact Us</span>
                        </a>

                        <details className="relative">
                            <summary className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200 cursor-pointer list-none">
                                <span className="material-symbols-outlined text-sm">language</span>
                                <span>English</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </summary>
                            <div className="absolute top-full right-0 mt-2 w-32 bg-white text-gray-800 rounded-lg shadow-xl z-50 py-2">
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    English
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    Japanese
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    Egyptian
                                </a>
                            </div>
                        </details>

                        <details className="relative">
                            <summary className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200 cursor-pointer list-none">
                                <span className="material-symbols-outlined text-sm">currency_rupee</span>
                                <span>INR</span>
                                <span className="material-symbols-outlined text-sm">expand_more</span>
                            </summary>
                            <div className="absolute top-full right-0 mt-2 w-24 bg-white text-gray-800 rounded-lg shadow-xl z-50 py-2">
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    INR
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    EUR
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    JPY
                                </a>
                                <a href="#" className="block px-4 py-2 hover:bg-blue-50 transition-colors duration-200">
                                    USD
                                </a>
                            </div>
                        </details>

                        <div className="flex items-center space-x-3 ml-6">
                            <button className="flex items-center space-x-1 px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-200">
                                <span className="material-symbols-outlined text-sm">login</span>
                                <span>Sign In</span>
                            </button>
                            <button className="flex items-center space-x-1 px-4 py-2 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200">
                                <span className="material-symbols-outlined text-sm">person_add</span>
                                <span>Sign Up</span>
                            </button>
                        </div>
                    </div>

                    <div className="lg:hidden">
                        <details className="relative">
                            <summary className="p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 cursor-pointer list-none">
                                <span className="material-symbols-outlined text-2xl">menu</span>
                            </summary>
                            <div className="absolute top-full right-0 mt-2 w-80 bg-white text-gray-800 rounded-lg shadow-xl z-50 py-4">
                                <div className="px-4 pb-4 border-b">
                                    <div className="flex space-x-3">
                                        <button className="flex items-center space-x-1 px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 flex-1">
                                            <span className="material-symbols-outlined text-sm">login</span>
                                            <span>Sign In</span>
                                        </button>
                                        <button className="flex items-center space-x-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 flex-1">
                                            <span className="material-symbols-outlined text-sm">person_add</span>
                                            <span>Sign Up</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="py-2">
                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined text-blue-600">home</span>
                                        <span>Home</span>
                                    </a>
                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined text-blue-600">info</span>
                                        <span>About Us</span>
                                    </a>

                                    <details className="px-4">
                                        <summary className="flex items-center space-x-3 py-3 hover:bg-blue-50 transition-colors duration-200 cursor-pointer list-none">
                                            <span className="material-symbols-outlined text-blue-600">
                                                business_center
                                            </span>
                                            <span>Services</span>
                                            <span className="material-symbols-outlined text-sm ml-auto">
                                                expand_more
                                            </span>
                                        </summary>
                                        <div className="ml-8 py-2">
                                            <a
                                                href="#"
                                                className="flex items-center space-x-3 py-2 hover:text-blue-600 transition-colors duration-200"
                                            >
                                                <span className="material-symbols-outlined text-sm">hotel</span>
                                                <span>Hotel</span>
                                            </a>
                                            <a
                                                href="#"
                                                className="flex items-center space-x-3 py-2 hover:text-blue-600 transition-colors duration-200"
                                            >
                                                <span className="material-symbols-outlined text-sm">tour</span>
                                                <span>Tour</span>
                                            </a>
                                        </div>
                                    </details>

                                    <a
                                        href="#"
                                        className="flex items-center space-x-3 px-4 py-3 hover:bg-blue-50 transition-colors duration-200"
                                    >
                                        <span className="material-symbols-outlined text-blue-600">contact_mail</span>
                                        <span>Contact Us</span>
                                    </a>
                                </div>

                                <div className="px-4 pt-4 border-t">
                                    <div className="grid grid-cols-2 gap-4">
                                        <details>
                                            <summary className="flex items-center space-x-2 py-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer list-none">
                                                <span className="material-symbols-outlined text-sm">language</span>
                                                <span>English</span>
                                                <span className="material-symbols-outlined text-xs">expand_more</span>
                                            </summary>
                                            <div className="ml-6 py-1">
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    English
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    Japanese
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    Egyptian
                                                </a>
                                            </div>
                                        </details>

                                        <details>
                                            <summary className="flex items-center space-x-2 py-2 hover:text-blue-600 transition-colors duration-200 cursor-pointer list-none">
                                                <span className="material-symbols-outlined text-sm">
                                                    currencyrupee
                                                </span>
                                                <span>INR</span>
                                                <span className="material-symbols-outlined text-xs">expand_more</span>
                                            </summary>
                                            <div className="ml-6 py-1">
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    INR
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    EUR
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    JPY
                                                </a>
                                                <a
                                                    href="#"
                                                    className="block py-1 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    USD
                                                </a>
                                            </div>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </nav>
                {/* Next: "Add search functionality with autocomplete suggestions" */}
            </div>
    <Box
      className="hero-section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100vw',
        overflow: 'hidden'
      }}
    >
      {/* Background image with fade transition */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          minHeight: '100vh',
          overflow: 'hidden',
          zIndex: 0,
          transition: 'opacity 0.6s ease-in-out',
          opacity: fade ? 1 : 0,
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${backgroundImages[currentBgIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ marginTop: '20px', marginBottom: '40px', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
          className="hero-content"
        >
          <Typography variant="h2" className="hero-title">
            Plan Your Next Vacation
          </Typography>
          <Typography variant="h5" className="hero-subtitle">
            Discover amazing places at exclusive deals.
          </Typography>
          <Box className="hero-tabs">
            <Button
              variant={activeTab === 'hotel' ? 'contained' : 'text'}
              className={activeTab === 'hotel' ? 'active-tab' : 'inactive-tab'}
              onClick={() => setActiveTab('hotel')}
            >
              Hotel
            </Button>
            <Button
              variant={activeTab === 'tour' ? 'contained' : 'text'}
              className={activeTab === 'tour' ? 'active-tab' : 'inactive-tab'}
              onClick={() => setActiveTab('tour')}
            >
              Tour
            </Button>
          </Box>
        </div>

        <div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: '60px' }}
        >
          <Paper
            elevation={0}
            className="search-box"
            style={{ background: 'rgba(135,206,250,0.85)', boxShadow: 'none' }}
          >
            <div className="search-fields">
              <TextField
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Where are you going?"
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  ),
                }}
                className="search-field"
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Check In"
                  value={checkIn}
                  onChange={(newValue) => setCheckIn(newValue)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayIcon />
                          </InputAdornment>
                        ),
                      },
                      className: "search-field",
                    }
                  }}
                  minDate={dayjs()}
                />
                <DatePicker
                  label="Check Out"
                  value={checkOut}
                  onChange={(newValue) => setCheckOut(newValue)}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      InputProps: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <CalendarTodayIcon />
                          </InputAdornment>
                        ),
                      },
                      className: "search-field",
                    }
                  }}
                  minDate={checkIn || dayjs()}
                  disabled={!checkIn}
                />
              </LocalizationProvider>
              <TextField
                label="Guests"
                value={guests}
                onClick={handleGuestClick}
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonIcon />
                    </InputAdornment>
                  ),
                  readOnly: true,
                }}
                className="search-field"
              />
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleGuestClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box sx={{ p: 2, minWidth: 200 }}>
                  <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <span>Adults</span>
                    <Box>
                      <IconButton size="small" onClick={() => setAdults(Math.max(1, adults - 1))}>
                        <RemoveIcon />
                      </IconButton>
                      <span style={{ margin: '0 8px' }}>{adults}</span>
                      <IconButton size="small" onClick={() => setAdults(adults + 1)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box display="flex" alignItems="center" justifyContent="space-between">
                    <span>Children</span>
                    <Box>
                      <IconButton size="small" onClick={() => setChildren(Math.max(0, children - 1))}>
                        <RemoveIcon />
                      </IconButton>
                      <span style={{ margin: '0 8px' }}>{children}</span>
                      <IconButton size="small" onClick={() => setChildren(children + 1)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  </Box>
                  <Box mt={2} textAlign="right">
                    <Button size="small" variant="contained" onClick={handleGuestClose}>Done</Button>
                  </Box>
                </Box>
              </Popover>
              <Button
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SearchIcon />}
                className="search-button"
              >
                Search
              </Button>
            </div>
          </Paper>
        </div>
      </Box>
    </Box>
    </div>
  );
};

export default HeroSection;