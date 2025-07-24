"use client"

import { useState, useRef, useEffect } from "react"
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  Button,
  Card,
  CardContent,
  Typography,
  Chip,
  IconButton,
  Switch,
  Slider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Grid,
  Paper,
  Collapse,
  Alert,
} from "@mui/material"
import {
  Add as AddIcon,
  Remove as RemoveIcon,
  ExpandMore as ExpandMoreIcon,
  LocationOn,
  Hotel,
  DirectionsCar,
  CalendarToday,
  AttachMoney,
  PhotoLibrary,
  Business,
  TrendingUp,
  Close as CloseIcon,
} from "@mui/icons-material"
import { motion, AnimatePresence } from "framer-motion"
import "./AddNewTour.css"

// Enhanced Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      staggerChildren: 0.15,
      ease: "easeOut",
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -30, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { 
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

const chipVariants = {
  hidden: { scale: 0, opacity: 0, rotate: -10 },
  visible: {
    scale: 1,
    opacity: 1,
    rotate: 0,
    transition: { 
      type: "spring", 
      stiffness: 600, 
      damping: 25,
      duration: 0.4,
    },
  },
  exit: {
    scale: 0,
    opacity: 0,
    rotate: 10,
    transition: { duration: 0.3 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

const buttonVariants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
}

// Reusable TagInput component
const TagInput = ({ label, placeholder, initialTags = [], onChange, icon }) => {
  const [tags, setTags] = useState(initialTags)
  const [inputValue, setInputValue] = useState("")
  const inputRef = useRef(null)

  const addTag = (value) => {
    const trimmedValue = value.trim()
    if (!trimmedValue || tags.some((tag) => tag === trimmedValue)) {
      return
    }
    const newTags = [...tags, trimmedValue]
    setTags(newTags)
    setInputValue("")
    onChange(newTags)
  }

  const removeTag = (tagToRemove) => {
    const newTags = tags.filter((tag) => tag !== tagToRemove)
    setTags(newTags)
    onChange(newTags)
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      addTag(inputValue)
    }
  }

  return (
    <motion.div variants={itemVariants} className="form-field">
      <label>{label}</label>
      <div className="tag-input-container">
        <div className="tag-input">
          {tags.map((tag, index) => (
            <motion.div key={tag} variants={chipVariants} initial="hidden" animate="visible" exit="exit">
              <div className="tag">
                <span>{tag}</span>
                <button
                  type="button"
                  className="tag-remove"
                  onClick={() => removeTag(tag)}
                >
                  ×
                </button>
              </div>
            </motion.div>
          ))}
          <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, minWidth: '120px' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// Country Input Component
const CountryInput = ({ country, index, onCountryChange, onCityAdd, onRemove }) => {
  const [cityInput, setCityInput] = useState("")

  const handleAddCity = () => {
    if (cityInput.trim()) {
      onCityAdd(index, cityInput.trim())
      setCityInput("")
    }
  }

  const handleCityKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAddCity()
    }
  }

  return (
    <motion.div 
      variants={cardVariants} 
      initial="hidden" 
      animate="visible" 
      whileHover="hover"
      layout
      className="card"
    >
      <div className="form-grid">
        <div className="form-field">
          <label>Country Name</label>
          <input
            type="text"
            value={country.name}
            onChange={(e) => onCountryChange(index, "name", e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label>Nights</label>
          <input
            type="number"
            value={country.nights}
            onChange={(e) => onCountryChange(index, "nights", Number.parseInt(e.target.value) || 0)}
            min="1"
          />
        </div>
        <div className="form-field">
          <motion.button
            type="button"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="btn btn-danger"
            onClick={() => onRemove(index)}
          >
            Remove
          </motion.button>
        </div>
      </div>
      
      <div className="form-field">
        <label>Cities:</label>
        <div className="tag-input-container">
          <div className="tag-input">
            {country.cities.map((city, cityIndex) => (
              <motion.div key={cityIndex} variants={chipVariants} initial="hidden" animate="visible" exit="exit">
                <div className="tag">
                  <span>{city}</span>
                  <button
                    type="button"
                    className="tag-remove"
                    onClick={() => onCityAdd(index, city, true)}
                  >
                    ×
                  </button>
                </div>
              </motion.div>
            ))}
            <input
              type="text"
              placeholder="City + nights"
              value={cityInput}
              onChange={(e) => setCityInput(e.target.value)}
              onKeyDown={handleCityKeyDown}
              style={{ border: 'none', outline: 'none', background: 'transparent', flex: 1, minWidth: '120px' }}
            />
          </div>
        </div>
        <motion.button
          type="button"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="btn btn-secondary"
          onClick={handleAddCity}
        >
          Add City
        </motion.button>
      </div>
    </motion.div>
  )
}

// Hotel Input Component
const HotelInput = ({ hotel, index, onHotelChange, onRemove }) => {
  return (
    <motion.div variants={itemVariants} initial="hidden" animate="visible" exit="hidden" layout>
      <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="City"
                value={hotel.city}
                onChange={(e) => onHotelChange(index, "city", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                type="number"
                label="Nights"
                value={hotel.nights}
                onChange={(e) => onHotelChange(index, "nights", Number.parseInt(e.target.value) || 0)}
                inputProps={{ min: 1 }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <IconButton color="error" onClick={() => onRemove(index)} className="mt-2">
                  <RemoveIcon />
                </IconButton>
              </motion.div>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Hotel Name + Star"
                placeholder="E.g., Taj (5*)"
                value={hotel.name}
                onChange={(e) => onHotelChange(index, "name", e.target.value)}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Meal Plan</InputLabel>
                <Select
                  value={hotel.mealPlan}
                  onChange={(e) => onHotelChange(index, "mealPlan", e.target.value)}
                  label="Meal Plan"
                >
                  <MenuItem value="CP">CP</MenuItem>
                  <MenuItem value="MAP">MAP</MenuItem>
                  <MenuItem value="AP">AP</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Room Type</InputLabel>
                <Select
                  value={hotel.roomType}
                  onChange={(e) => onHotelChange(index, "roomType", e.target.value)}
                  label="Room Type"
                >
                  <MenuItem value="Deluxe">Deluxe</MenuItem>
                  <MenuItem value="Standard">Standard</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                type="number"
                label="No. of Rooms"
                value={hotel.numRooms}
                onChange={(e) => onHotelChange(index, "numRooms", Number.parseInt(e.target.value) || 0)}
                inputProps={{ min: 1 }}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Transfer Input Component
const TransferInput = ({ transfer, index, onTransferChange, onRemove }) => {
  return (
    <motion.div variants={itemVariants} initial="hidden" animate="visible" exit="hidden" layout>
      <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Transfer Type</InputLabel>
                <Select
                  value={transfer.type}
                  onChange={(e) => onTransferChange(index, "type", e.target.value)}
                  label="Transfer Type"
                >
                  <MenuItem value="Private">Private</MenuItem>
                  <MenuItem value="SIC from hotel/pickup">SIC from hotel/pickup</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth>
                <InputLabel>Car Type</InputLabel>
                <Select
                  value={transfer.carType}
                  onChange={(e) => onTransferChange(index, "carType", e.target.value)}
                  label="Car Type"
                >
                  <MenuItem value="Sedan">Sedan</MenuItem>
                  <MenuItem value="SUV">SUV</MenuItem>
                  <MenuItem value="Tempo">Tempo</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={3}>
              <TextField
                fullWidth
                type="number"
                label="Seating Capacity"
                value={transfer.seatingCapacity}
                onChange={(e) => onTransferChange(index, "seatingCapacity", Number.parseInt(e.target.value) || 0)}
                inputProps={{ min: 0 }}
              />
            </Grid>
            <Grid item xs={12} md={1}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <IconButton color="error" onClick={() => onRemove(index)} className="mt-2">
                  <RemoveIcon />
                </IconButton>
              </motion.div>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Itinerary Day Component
const ItineraryDayInput = ({ day, index, onItineraryChange, onRemove }) => {
  return (
    <motion.div variants={itemVariants} initial="hidden" animate="visible" exit="hidden" layout>
      <Card className="mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardContent>
          <Box className="flex justify-between items-center mb-4">
            <Typography variant="h6" className="font-bold text-blue-600">
              Day {index + 1}
            </Typography>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <IconButton color="error" onClick={() => onRemove(index)} size="small">
                <CloseIcon />
              </IconButton>
            </motion.div>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="date"
                label="Date"
                value={day.date}
                onChange={(e) => onItineraryChange(index, "date", e.target.value)}
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Highlight"
                value={day.highlight}
                onChange={(e) => onItineraryChange(index, "highlight", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Arrival/Departure"
                value={day.arrDep}
                onChange={(e) => onItineraryChange(index, "arrDep", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={3}
                label="Activities/Sightseeing"
                value={day.activities}
                onChange={(e) => onItineraryChange(index, "activities", e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" className="mb-2">
                Meals Included:
              </Typography>
              <Box className="flex gap-4">
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={day.meals.breakfast}
                      onChange={(e) => onItineraryChange(index, "meals", { ...day.meals, breakfast: e.target.checked })}
                    />
                  }
                  label="Breakfast"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={day.meals.lunch}
                      onChange={(e) => onItineraryChange(index, "meals", { ...day.meals, lunch: e.target.checked })}
                    />
                  }
                  label="Lunch"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={day.meals.dinner}
                      onChange={(e) => onItineraryChange(index, "meals", { ...day.meals, dinner: e.target.checked })}
                    />
                  }
                  label="Dinner"
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Hotel & City"
                value={day.hotelCity}
                onChange={(e) => onItineraryChange(index, "hotelCity", e.target.value)}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </motion.div>
  )
}

// Policy Point Component
const PolicyPointInput = ({ policy, index, onPolicyChange, onRemove }) => {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      layout
      className="flex gap-2 mb-2"
    >
      <TextField
        fullWidth
        value={policy}
        onChange={(e) => onPolicyChange(index, e.target.value)}
        size="small"
        variant="outlined"
      />
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <IconButton color="error" onClick={() => onRemove(index)} size="small">
          <CloseIcon />
        </IconButton>
      </motion.div>
    </motion.div>
  )
}

function AddNewTour() {
  // All state variables (keeping the same as original)
  const [tourType, setTourType] = useState([])
  const [maxPeople, setMaxPeople] = useState("")
  const [minPeople, setMinPeople] = useState("")
  const [daysBeforeDept, setDaysBeforeDept] = useState("")
  const [duration, setDuration] = useState(0)
  const [market, setMarket] = useState("India")
  const [tourTitle, setTourTitle] = useState("")
  const [smallDesc, setSmallDesc] = useState("")
  const [countries, setCountries] = useState([{ name: "", nights: "", cities: [] }])
  const [arrivalCity, setArrivalCity] = useState("")
  const [departureCity, setDepartureCity] = useState("")
  const [incFlights, setIncFlights] = useState(false)
  const [incHotels, setIncHotels] = useState(false)
  const [incTransfers, setIncTransfers] = useState(false)
  const [incMeals, setIncMeals] = useState(false)
  const [incTrain, setIncTrain] = useState(false)
  const [hotels, setHotels] = useState([
    { city: "", nights: "", name: "", mealPlan: "CP", roomType: "Deluxe", numRooms: "", occupancy: "Single" },
  ])
  const [transferIncluded, setTransferIncluded] = useState(false)
  const [transfers, setTransfers] = useState([{ type: "Private", carType: "Sedan", seatingCapacity: "" }])
  const [itineraryDays, setItineraryDays] = useState([
    {
      date: "",
      highlight: "",
      arrDep: "",
      activities: "",
      meals: { breakfast: false, lunch: false, dinner: false },
      hotelCity: "",
    },
  ])
  const [policies, setPolicies] = useState(["All packages inclusive of taxes."])
  const [priceValidFrom, setPriceValidFrom] = useState("")
  const [priceValidTo, setPriceValidTo] = useState("")
  const [priceAdult, setPriceAdult] = useState("")
  const [priceChild, setPriceChild] = useState("")
  const [priceInfant, setPriceInfant] = useState("")
  const [commissionCustomer, setCommissionCustomer] = useState("")
  const [commissionInfluencer, setCommissionInfluencer] = useState("")
  const [themeTags, setThemeTags] = useState([])
  const [durRange, setDurRange] = useState(3)
  const [budgetRange, setBudgetRange] = useState(50000)
  const [seasonTags, setSeasonTags] = useState([])
  const [galleryImgs, setGalleryImgs] = useState(null)
  const [videosInput, setVideosInput] = useState("")
  const [tourBrochure, setTourBrochure] = useState(null)
  const [featuredTour, setFeaturedTour] = useState(false)
  const [payModeTags, setPayModeTags] = useState([])
  const [cancellationAllowed, setCancellationAllowed] = useState(false)
  const [vendorName, setVendorName] = useState("")
  const [quotationRef, setQuotationRef] = useState("")
  const [currencyConv, setCurrencyConv] = useState(false)
  const [visaTool, setVisaTool] = useState(false)
  const [visaLinkField, setVisaLinkField] = useState("")
  const [insuranceSuggest, setInsuranceSuggest] = useState(false)
  const [foodTools, setFoodTools] = useState(false)
  const [activityRestrictions, setActivityRestrictions] = useState("")
  const [flightTrainTool, setFlightTrainTool] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  // Helper functions (keeping the same logic)
  const getAllCities = () => {
    const cityNames = new Set()
    countries.forEach((country) => {
      country.cities.forEach((city) => {
        cityNames.add(city.split("(")[0].trim())
      })
    })
    return Array.from(cityNames)
  }

  useEffect(() => {
    if (duration > 0 && itineraryDays.length !== duration + 1) {
      const initialItinerary = Array.from({ length: duration + 1 }, () => ({
        date: "",
        highlight: "",
        arrDep: "",
        activities: "",
        meals: { breakfast: false, lunch: false, dinner: false },
        hotelCity: "",
      }))
      setItineraryDays(initialItinerary)
    } else if (duration === 0) {
      setItineraryDays([])
    }
  }, [duration])

  // All handler functions (keeping the same logic)
  const handleAddCountry = () => {
    setCountries([...countries, { name: "", nights: "", cities: [] }])
  }

  const handleCountryChange = (index, field, value) => {
    const newCountries = [...countries]
    newCountries[index][field] = value
    setCountries(newCountries)
  }

  const handleCityAdd = (countryIndex, cityValue, isRemove = false) => {
    const newCountries = [...countries]
    if (isRemove) {
      newCountries[countryIndex].cities = newCountries[countryIndex].cities.filter((city) => city !== cityValue)
    } else {
      newCountries[countryIndex].cities.push(cityValue)
    }
    setCountries(newCountries)
  }

  const handleRemoveCountry = (index) => {
    setCountries(countries.filter((_, i) => i !== index))
  }

  const handleAddHotel = () => {
    setHotels([
      ...hotels,
      { city: "", nights: "", name: "", mealPlan: "CP", roomType: "Deluxe", numRooms: "", occupancy: "Single" },
    ])
  }

  const handleHotelChange = (index, field, value) => {
    const newHotels = [...hotels]
    newHotels[index][field] = value
    setHotels(newHotels)
  }

  const handleRemoveHotel = (index) => {
    setHotels(hotels.filter((_, i) => i !== index))
  }

  const handleAddTransfer = () => {
    setTransfers([...transfers, { type: "Private", carType: "Sedan", seatingCapacity: "" }])
  }

  const handleTransferChange = (index, field, value) => {
    const newTransfers = [...transfers]
    newTransfers[index][field] = value
    setTransfers(newTransfers)
  }

  const handleRemoveTransfer = (index) => {
    setTransfers(transfers.filter((_, i) => i !== index))
  }

  const handleAddItineraryDay = () => {
    setItineraryDays([
      ...itineraryDays,
      {
        date: "",
        highlight: "",
        arrDep: "",
        activities: "",
        meals: { breakfast: false, lunch: false, dinner: false },
        hotelCity: "",
      },
    ])
    setDuration(itineraryDays.length)
  }

  const handleItineraryChange = (index, field, value) => {
    const newItineraryDays = [...itineraryDays]
    newItineraryDays[index][field] = value
    setItineraryDays(newItineraryDays)
  }

  const handleRemoveItineraryDay = (index) => {
    setItineraryDays(itineraryDays.filter((_, i) => i !== index))
    setDuration(itineraryDays.length - 2)
  }

  const handleAddPolicyPoint = () => {
    setPolicies([...policies, ""])
  }

  const handlePolicyChange = (index, value) => {
    const newPolicies = [...policies]
    newPolicies[index] = value
    setPolicies(newPolicies)
  }

  const handleRemovePolicyPoint = (index) => {
    setPolicies(policies.filter((_, i) => i !== index))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)

    const formData = {
      tourType,
      maxPeople: Number.parseInt(maxPeople) || 0,
      minPeople: Number.parseInt(minPeople) || 0,
      daysBeforeDept: Number.parseInt(daysBeforeDept) || 0,
      duration: Number.parseInt(duration) || 0,
      market,
      tourTitle,
      smallDesc,
      countries,
      arrivalCity,
      departureCity,
      inclusions: { incFlights, incHotels, incTransfers, incMeals, incTrain },
      hotels,
      transferIncluded,
      transfers: transferIncluded ? transfers : [],
      itineraryDays,
      policies,
      pricing: {
        priceValidFrom,
        priceValidTo,
        priceAdult: Number.parseInt(priceAdult) || 0,
        priceChild: Number.parseInt(priceChild) || 0,
        priceInfant: Number.parseInt(priceInfant) || 0,
      },
      commissionCustomer: Number.parseInt(commissionCustomer) || 0,
      commissionInfluencer: Number.parseInt(commissionInfluencer) || 0,
      filters: {
        themeTags,
        durRange: Number.parseInt(durRange) || 0,
        budgetRange: Number.parseInt(budgetRange) || 0,
        seasonTags,
      },
      gallery: {
        videosInput: videosInput
          .split(",")
          .map((url) => url.trim())
          .filter(Boolean),
      },
      otherOptions: {
        featuredTour,
        payModeTags,
        cancellationAllowed,
      },
      vendorDetails: {
        vendorName,
        quotationRef,
      },
      upsellTools: {
        currencyConv,
        visaTool,
        visaLinkField: visaTool ? visaLinkField : "",
        insuranceSuggest,
        foodTools,
        activityRestrictions,
        flightTrainTool,
      },
    }
    console.log(formData)
  }

  const handleReset = () => {
    // Reset all state variables to initial values
    setTourType([])
    setMaxPeople("")
    setMinPeople("")
    setDaysBeforeDept("")
    setDuration(0)
    setMarket("India")
    setTourTitle("")
    setSmallDesc("")
    setCountries([{ name: "", nights: "", cities: [] }])
    setArrivalCity("")
    setDepartureCity("")
    setIncFlights(false)
    setIncHotels(false)
    setIncTransfers(false)
    setIncMeals(false)
    setIncTrain(false)
    setHotels([
      { city: "", nights: "", name: "", mealPlan: "CP", roomType: "Deluxe", numRooms: "", occupancy: "Single" },
    ])
    setTransferIncluded(false)
    setTransfers([{ type: "Private", carType: "Sedan", seatingCapacity: "" }])
    setItineraryDays([])
    setPolicies(["All packages inclusive of taxes."])
    setPriceValidFrom("")
    setPriceValidTo("")
    setPriceAdult("")
    setPriceChild("")
    setPriceInfant("")
    setCommissionCustomer("")
    setCommissionInfluencer("")
    setThemeTags([])
    setDurRange(3)
    setBudgetRange(50000)
    setSeasonTags([])
    setGalleryImgs(null)
    setVideosInput("")
    setTourBrochure(null)
    setFeaturedTour(false)
    setPayModeTags([])
    setCancellationAllowed(false)
    setVendorName("")
    setQuotationRef("")
    setCurrencyConv(false)
    setVisaTool(false)
    setVisaLinkField("")
    setInsuranceSuggest(false)
    setFoodTools(false)
    setActivityRestrictions("")
    setFlightTrainTool(false)
  }

  return (
    <div className="add-tour-container">
      <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-6xl">
        <motion.div variants={itemVariants} className="page-title">
          <Typography variant="h1" className="page-title">
            ✈️ Add New Tour
          </Typography>
        </motion.div>

        <AnimatePresence>
          {showSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="success-alert"
            >
              <span>✅</span>
              <span>Tour saved successfully! Check console for form data.</span>
            </motion.div>
          )}
        </AnimatePresence>

        <form onSubmit={handleSubmit} onReset={handleReset}>
          {/* Section 1: Tour Type Details */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  <LocationOn className="accordion-icon" />
                  🧭 Tour Type Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="form-grid">
                  <div className="form-field">
                    <label>Tour Type:</label>
                    <div className="checkbox-group">
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={tourType.includes("Fixed Departure")}
                          onChange={(e) =>
                            setTourType(
                              e.target.checked
                                ? [...tourType, "Fixed Departure"]
                                : tourType.filter((type) => type !== "Fixed Departure"),
                            )
                          }
                        />
                        <span>Fixed Departure</span>
                      </div>
                      <div className="checkbox-item">
                        <input
                          type="checkbox"
                          checked={tourType.includes("FIT Departure")}
                          onChange={(e) =>
                            setTourType(
                              e.target.checked
                                ? [...tourType, "FIT Departure"]
                                : tourType.filter((type) => type !== "FIT Departure"),
                            )
                          }
                        />
                        <span>FIT Departure</span>
                      </div>
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Max People</label>
                    <input
                      type="number"
                      value={maxPeople}
                      onChange={(e) => setMaxPeople(e.target.value)}
                      min="1"
                    />
                  </div>
                  <div className="form-field">
                    <label>Min People</label>
                    <input
                      type="number"
                      value={minPeople}
                      onChange={(e) => setMinPeople(e.target.value)}
                      min="1"
                    />
                  </div>
                  <div className="form-field">
                    <label>Days Before Departure</label>
                    <input
                      type="number"
                      value={daysBeforeDept}
                      onChange={(e) => setDaysBeforeDept(e.target.value)}
                      min="0"
                    />
                  </div>
                  <div className="form-field">
                    <label>Duration (Nights)</label>
                    <input
                      type="number"
                      value={duration}
                      onChange={(e) => setDuration(Number.parseInt(e.target.value) || 0)}
                      min="1"
                    />
                  </div>
                  <div className="form-field">
                    <label>Market</label>
                    <select value={market} onChange={(e) => setMarket(e.target.value)}>
                      <option value="India">India</option>
                      <option value="UK">UK</option>
                      <option value="US">US</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 2: Tour Basic Info */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  📝 Tour Basic Info
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="form-grid">
                  <div className="form-field">
                    <label>Tour Title</label>
                    <input
                      type="text"
                      value={tourTitle}
                      onChange={(e) => setTourTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-field">
                    <label>Small Description (max 250 chars) - {smallDesc.length}/250</label>
                    <textarea
                      value={smallDesc}
                      onChange={(e) => setSmallDesc(e.target.value)}
                      maxLength={250}
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 3: Destinations */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  🌍 Destinations
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <AnimatePresence>
                  {countries.map((country, index) => (
                    <CountryInput
                      key={index}
                      country={country}
                      index={index}
                      onCountryChange={handleCountryChange}
                      onCityAdd={handleCityAdd}
                      onRemove={handleRemoveCountry}
                    />
                  ))}
                </AnimatePresence>
                <motion.button
                  type="button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="btn btn-secondary"
                  onClick={handleAddCountry}
                >
                  Add Country
                </motion.button>

                <div className="form-grid">
                  <div className="form-field">
                    <label>Arrival City</label>
                    <select value={arrivalCity} onChange={(e) => setArrivalCity(e.target.value)}>
                      <option value="">Select</option>
                      {getAllCities().map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-field">
                    <label>Departure City</label>
                    <select value={departureCity} onChange={(e) => setDepartureCity(e.target.value)}>
                      <option value="">Select</option>
                      {getAllCities().map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 4: Inclusions Summary */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  ✅ Inclusions Summary
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="checkbox-group">
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={incFlights}
                      onChange={(e) => setIncFlights(e.target.checked)}
                    />
                    <span>Flights</span>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={incHotels}
                      onChange={(e) => setIncHotels(e.target.checked)}
                    />
                    <span>Hotels</span>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={incTransfers}
                      onChange={(e) => setIncTransfers(e.target.checked)}
                    />
                    <span>Transfers</span>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={incMeals}
                      onChange={(e) => setIncMeals(e.target.checked)}
                    />
                    <span>Meals</span>
                  </div>
                  <div className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={incTrain}
                      onChange={(e) => setIncTrain(e.target.checked)}
                    />
                    <span>Train</span>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 5: Hotel Details */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  <Hotel className="accordion-icon" />
                  🏨 Hotel Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <AnimatePresence>
                  {hotels.map((hotel, index) => (
                    <HotelInput
                      key={index}
                      hotel={hotel}
                      index={index}
                      onHotelChange={handleHotelChange}
                      onRemove={handleRemoveHotel}
                    />
                  ))}
                </AnimatePresence>
                <motion.button
                  type="button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="btn btn-secondary"
                  onClick={handleAddHotel}
                >
                  Add More Hotels
                </motion.button>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 6: Transfer Details */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  <DirectionsCar className="accordion-icon" />
                  🚗 Transfer Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="checkbox-item">
                  <input
                    type="checkbox"
                    checked={transferIncluded}
                    onChange={(e) => setTransferIncluded(e.target.checked)}
                  />
                  <span>Transfer Included</span>
                </div>

                <Collapse in={transferIncluded}>
                  <AnimatePresence>
                    {transfers.map((transfer, index) => (
                      <TransferInput
                        key={index}
                        transfer={transfer}
                        index={index}
                        onTransferChange={handleTransferChange}
                        onRemove={handleRemoveTransfer}
                      />
                    ))}
                  </AnimatePresence>
                  <motion.button
                    type="button"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                    className="btn btn-secondary"
                    onClick={handleAddTransfer}
                  >
                    Add More Transfers
                  </motion.button>
                </Collapse>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 7: Itinerary */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  <CalendarToday className="accordion-icon" />
                  📅 Itinerary
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <AnimatePresence>
                  {itineraryDays.map((day, index) => (
                    <ItineraryDayInput
                      key={index}
                      day={day}
                      index={index}
                      onItineraryChange={handleItineraryChange}
                      onRemove={handleRemoveItineraryDay}
                    />
                  ))}
                </AnimatePresence>
                <motion.button
                  type="button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="btn btn-secondary"
                  onClick={handleAddItineraryDay}
                >
                  Add Next Day
                </motion.button>
                <p className="text-sm text-gray-600 mt-2">
                  {duration > 0 ? `Total days: ${duration + 1}` : "First, fill the Duration above for auto-days."}
                </p>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 8: Policies & Details */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  📦 Policies & Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <AnimatePresence>
                  {policies.map((policy, index) => (
                    <PolicyPointInput
                      key={index}
                      policy={policy}
                      index={index}
                      onPolicyChange={handlePolicyChange}
                      onRemove={handleRemovePolicyPoint}
                    />
                  ))}
                </AnimatePresence>
                <motion.button
                  type="button"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="btn btn-secondary"
                  onClick={handleAddPolicyPoint}
                >
                  Add Policy
                </motion.button>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 9: Pricing & Commission */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  <AttachMoney className="accordion-icon" />
                  💰 Pricing & Commission
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="form-grid">
                  <div className="form-field">
                    <label>Price Valid From</label>
                    <input
                      type="date"
                      value={priceValidFrom}
                      onChange={(e) => setPriceValidFrom(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label>Price Valid To</label>
                    <input
                      type="date"
                      value={priceValidTo}
                      onChange={(e) => setPriceValidTo(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="form-field">
                  <label>Pricing Table</label>
                  <div className="card">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">Type</th>
                          <th className="text-left p-2">Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="p-2">Adult</td>
                          <td className="p-2">
                            <input
                              type="number"
                              value={priceAdult}
                              onChange={(e) => setPriceAdult(e.target.value)}
                              min="0"
                              className="w-full p-2 border rounded"
                            />
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="p-2">Child</td>
                          <td className="p-2">
                            <input
                              type="number"
                              value={priceChild}
                              onChange={(e) => setPriceChild(e.target.value)}
                              min="0"
                              className="w-full p-2 border rounded"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2">Infant</td>
                          <td className="p-2">
                            <input
                              type="number"
                              value={priceInfant}
                              onChange={(e) => setPriceInfant(e.target.value)}
                              min="0"
                              className="w-full p-2 border rounded"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-field">
                    <label>Commission (Customer %)</label>
                    <input
                      type="number"
                      value={commissionCustomer}
                      onChange={(e) => setCommissionCustomer(e.target.value)}
                      min="0"
                      max="100"
                    />
                  </div>
                  <div className="form-field">
                    <label>Commission (Influencer %)</label>
                    <input
                      type="number"
                      value={commissionInfluencer}
                      onChange={(e) => setCommissionInfluencer(e.target.value)}
                      min="0"
                      max="100"
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 10: Filters */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  🧾 Filters
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="form-grid">
                  <div className="form-field">
                    <TagInput
                      label="Tour Theme"
                      placeholder="Type & press Enter"
                      initialTags={themeTags}
                      onChange={setThemeTags}
                    />
                  </div>
                  <div className="form-field">
                    <TagInput
                      label="Season"
                      placeholder="Summer, Winter..."
                      initialTags={seasonTags}
                      onChange={setSeasonTags}
                    />
                  </div>
                </div>
                <div className="form-grid">
                  <div className="form-field">
                    <label>Duration: {durRange} nights</label>
                    <input
                      type="range"
                      value={durRange}
                      onChange={(e) => setDurRange(Number(e.target.value))}
                      min="1"
                      max="14"
                      className="range-slider"
                    />
                  </div>
                  <div className="form-field">
                    <label>Budget: ₹{budgetRange.toLocaleString()}</label>
                    <input
                      type="range"
                      value={budgetRange}
                      onChange={(e) => setBudgetRange(Number(e.target.value))}
                      min="10000"
                      max="200000"
                      step="5000"
                      className="range-slider"
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 11: Gallery */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  <PhotoLibrary className="accordion-icon" />
                  🎞 Tour Gallery
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="form-field">
                  <label>Upload Images (JPG/PNG)</label>
                  <div className="file-upload-area">
                    <input
                      type="file"
                      multiple
                      accept=".jpg,.jpeg,.png"
                      onChange={(e) => setGalleryImgs(e.target.files)}
                      id="gallery-images"
                    />
                    <label htmlFor="gallery-images" className="file-upload-label">
                      <span>📁 Choose Images</span>
                      <span className="file-upload-hint">Drag & drop or click to select</span>
                    </label>
                  </div>
                </div>
                
                <div className="form-field">
                  <label>Add Videos (YouTube/Vimeo URLs)</label>
                  <textarea
                    placeholder="Comma separated URLs"
                    value={videosInput}
                    onChange={(e) => setVideosInput(e.target.value)}
                    rows="3"
                  />
                </div>
                
                <div className="form-field">
                  <label>Upload Tour Brochure (PDF)</label>
                  <div className="file-upload-area">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => setTourBrochure(e.target.files[0])}
                      id="tour-brochure"
                    />
                    <label htmlFor="tour-brochure" className="file-upload-label">
                      <span>📄 Choose PDF</span>
                      <span className="file-upload-hint">Select tour brochure file</span>
                    </label>
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 12: Other Options */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  🎯 Other Options
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="form-grid">
                  <div className="form-field">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={featuredTour}
                        onChange={(e) => setFeaturedTour(e.target.checked)}
                      />
                      <span>Set as Featured</span>
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={cancellationAllowed}
                        onChange={(e) => setCancellationAllowed(e.target.checked)}
                      />
                      <span>Cancellation Allowed</span>
                    </div>
                  </div>
                </div>
                <div className="form-field">
                  <TagInput
                    label="Payment Modes"
                    placeholder="Credit, UPI ..."
                    initialTags={payModeTags}
                    onChange={setPayModeTags}
                  />
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 13: Vendor Details */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  <Business className="accordion-icon" />
                  🏢 Vendor Details
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="form-grid">
                  <div className="form-field">
                    <label>Vendor Name</label>
                    <input
                      type="text"
                      value={vendorName}
                      onChange={(e) => setVendorName(e.target.value)}
                    />
                  </div>
                  <div className="form-field">
                    <label>Quotation Reference</label>
                    <input
                      type="url"
                      placeholder="http://quotation-link.com (optional)"
                      value={quotationRef}
                      onChange={(e) => setQuotationRef(e.target.value)}
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Section 14: Upsell Tools */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="accordion-section"
          >
            <Accordion defaultExpanded className="accordion-section">
              <AccordionSummary 
                expandIcon={<ExpandMoreIcon className="accordion-icon" />} 
                className="accordion-header"
              >
                <Typography variant="h6" className="accordion-header">
                  <TrendingUp className="accordion-icon" />
                  📈 Upsell Tools
                </Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion-content">
                <div className="form-grid">
                  <div className="form-field">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={currencyConv}
                        onChange={(e) => setCurrencyConv(e.target.checked)}
                      />
                      <span>Currency Converter</span>
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={visaTool}
                        onChange={(e) => setVisaTool(e.target.checked)}
                      />
                      <span>Visa Requirement Tool</span>
                    </div>
                  </div>
                </div>
                
                <Collapse in={visaTool}>
                  <div className="form-field">
                    <label>Visa Policy URL</label>
                    <input
                      type="url"
                      value={visaLinkField}
                      onChange={(e) => setVisaLinkField(e.target.value)}
                      placeholder="https://visa-policy-url.com"
                    />
                  </div>
                </Collapse>
                
                <div className="form-grid">
                  <div className="form-field">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={insuranceSuggest}
                        onChange={(e) => setInsuranceSuggest(e.target.checked)}
                      />
                      <span>Insurance Suggestion</span>
                    </div>
                  </div>
                  <div className="form-field">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={foodTools}
                        onChange={(e) => setFoodTools(e.target.checked)}
                      />
                      <span>Food Availability Tools</span>
                    </div>
                  </div>
                </div>
                
                <div className="form-grid">
                  <div className="form-field">
                    <div className="checkbox-item">
                      <input
                        type="checkbox"
                        checked={flightTrainTool}
                        onChange={(e) => setFlightTrainTool(e.target.checked)}
                      />
                      <span>Flight/Train Tool</span>
                    </div>
                  </div>
                  <div className="form-field">
                    <label>Activity Restrictions</label>
                    <input
                      type="text"
                      value={activityRestrictions}
                      onChange={(e) => setActivityRestrictions(e.target.value)}
                      placeholder="Any activity restrictions..."
                    />
                  </div>
                </div>
              </AccordionDetails>
            </Accordion>
          </motion.div>

          {/* Submit Buttons */}
          <motion.div variants={itemVariants} className="flex gap-4 justify-center mt-8">
            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn btn-primary"
            >
              Save Tour
            </motion.button>
            <motion.button
              type="reset"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="btn btn-secondary"
            >
              Clear Form
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  )
}

export default AddNewTour
