import React, { useState } from 'react';
import { 
  Paper, 
  TextField, 
  Button, 
  InputAdornment, 
  IconButton,
  MenuItem
} from '@mui/material';
import { 
  Search as SearchIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon
} from '@mui/icons-material';
//import { motion } from 'framer-motion';
import './SearchBox.css';

const SearchBox = () => {
  const [location, setLocation] = useState('');
  const [checkIn, setCheckIn] = useState('06/25/2025');
  const [checkOut, setCheckOut] = useState('06/26/2025');
  const [guests, setGuests] = useState('1 Adult - 0 Child');

  return (
    <div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{marginTop:'60px',marginBottom:'60px'}}
    >
      <Paper elevation={3} className="search-box">
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
                  <LocationIcon />
                </InputAdornment>
              ),
            }}
            className="search-field"
          />
          <TextField
            label="Check in - Out"
            value={`${checkIn} - ${checkOut}`}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CalendarIcon />
                </InputAdornment>
              ),
            }}
            className="search-field"
          />
          <TextField
            label="Guests"
            value={guests}
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
            className="search-field"
          />
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
  );
};

export default SearchBox;