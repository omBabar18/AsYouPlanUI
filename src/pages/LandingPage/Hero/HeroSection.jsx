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
          style={{ marginTop: '20px', marginBottom: '10px', color: '#fff', textShadow: '0 2px 8px rgba(0,0,0,0.7)' }}
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
  );
};

export default HeroSection;