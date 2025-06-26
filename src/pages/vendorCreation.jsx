"use client"

import { useState, useRef, useEffect } from "react"
import { Box, Button, TextField, Typography, Paper, Checkbox, FormControlLabel, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { styled, keyframes } from "@mui/system"
import confetti from "canvas-confetti"
import { NavBarComponent } from "../components/navbarBeforeSignup"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Custom theme for Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff",
    },
    secondary: {
      main: "#6c757d",
    },
    success: {
      main: "#28a745",
    },
    error: {
      main: "#dc3545",
    },
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    h4: {
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h6: {
      fontWeight: 500,
      marginBottom: "2rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          padding: "14px 28px",
          marginTop: "1.5rem",
          fontWeight: 600,
          fontSize: "1.1rem",
          position: "relative",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 25px rgba(0, 123, 255, 0.3)",
          },
          "&:active": {
            transform: "translateY(0)",
            transition: "transform 0.1s ease",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
            transition: "left 0.6s ease",
          },
          "&:hover::before": {
            left: "100%",
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: "12px",
            transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
            backgroundColor: "#f8f9fa",
            "& fieldset": {
              border: "2px solid transparent",
              transition: "all 0.3s ease",
            },
            "&:hover": {
              backgroundColor: "#e9ecef",
              transform: "translateY(-1px)",
              "& fieldset": {
                borderColor: "rgba(0, 123, 255, 0.3)",
              },
            },
            "&.Mui-focused": {
              backgroundColor: "#fff",
              transform: "translateY(-1px)",
              boxShadow: "0 4px 20px rgba(0, 123, 255, 0.15)",
              "& fieldset": {
                borderColor: "#007bff",
                borderWidth: "2px",
              },
            },
            "& input": {
              padding: "16px 18px",
              fontSize: "1rem",
            },
          },
          "& .MuiInputLabel-root": {
            transform: "translate(18px, 18px) scale(1)",
            fontSize: "1rem",
            fontWeight: 500,
            "&.Mui-focused, &.MuiFormLabel-filled": {
              transform: "translate(18px, -9px) scale(0.75)",
              color: "#007bff",
              fontWeight: 600,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          margin: "0.5cm 0",
          boxShadow: "none",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: "8px",
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "0.5cm 0",
          },
        },
      },
    },
  },
})

// Keyframe animations
const slideInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
`

// Styled components
const FormContainer = styled(Box)(({ hasError }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  background: "none",
  animation: `${slideInLeft} 0.8s ease-out`,
  overflow: "hidden",
  ...(hasError && {
    animation: `${shake} 0.5s ease-in-out`,
  }),
}))

const StyledPaper = styled(Paper)({
  padding: "2.5rem",
  borderRadius: "24px",
  boxShadow: "0 20px 60px rgba(0, 123, 255, 0.15)",
  background: "none",
  backdropFilter: "blur(10px)",
  border: "1px solid rgba(255, 255, 255, 0.2)",
  maxWidth: "800px",
  width: "90%",
  height: "auto",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})

const VideoContainer = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "none",
  animation: `${slideInRight} 0.8s ease-out`,
  position: "relative",
  overflow: "hidden",
})

const VideoWrapper = styled(Box)({
  position: "relative",
  width: "480px",
  height: "340px",
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft: "-1cm",
  "& iframe": {
    width: "100%",
    height: "100%",
    border: "none",
    display: "block",
  },
})

const FeatureCard = styled(Paper)(({ theme }) => ({
  padding: "2rem",
  borderRadius: "16px",
  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 15px 35px rgba(0, 0, 0, 0.15)",
  },
}))

const FAQContainer = styled(Box)({
  width: "100%",
  maxWidth: "800px",
  margin: "2cm auto",
})

function VendorCreation() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessName: "",
    phone: "",
    email: "",
    password: "",
    terms: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const stepsRef = useRef(null)
  const [stepsVisible, setStepsVisible] = useState(false)

  // FAQ state
  const [expanded, setExpanded] = useState(null);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : null);
  };

  // YouTube video ID
  const youtubeVideoId = "dQw4w9WgXcQ"

  // Confetti animation function
  const triggerConfetti = () => {
    const duration = 3000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now()
      if (timeLeft <= 0) {
        clearInterval(interval)
        return
      }
      const particleCount = 50 * (timeLeft / duration)
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      )
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      )
    }, 250)
  }

  const handleInputChange = (field) => (event) => {
    const value = field === "terms" ? event.target.checked : event.target.value
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
    if (error) setError("")
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)

    // Validation
    const requiredFields = ["firstName", "lastName", "businessName", "phone", "email", "password"]
    const emptyFields = requiredFields.filter((field) => !formData[field].trim())

    if (emptyFields.length > 0) {
      setError("Please fill in all required fields")
      setIsSubmitting(false)
      return
    }

    if (!formData.terms) {
      setError("Please accept the Terms and Privacy Policy")
      setIsSubmitting(false)
      return
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address")
      setIsSubmitting(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      console.log("Vendor registration:", formData)
      setSuccess(true)
      triggerConfetti()
      setIsSubmitting(false)
    }, 2000)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!stepsRef.current) return
      const rect = stepsRef.current.getBoundingClientRect()
      if (rect.top < window.innerHeight - 100) {
        setStepsVisible(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (success) {
    return (
      <ThemeProvider theme={theme}>
        <NavBarComponent />
        <Box sx={{ mt: 4 }} />
        <Box
          sx={{
            minHeight: "100vh",
            background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <StyledPaper
            sx={{
              textAlign: "center",
              maxWidth: "500px",
              animation: `${fadeIn} 1s ease-out`,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "1rem",
              }}
            >
              🎉 Welcome to Our Community!
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ marginBottom: "2rem" }}>
              Your vendor account has been created successfully. You can now start welcoming guests to your property!
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => window.location.reload()}
              sx={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                borderRadius: "12px",
                padding: "12px 32px",
              }}
            >
              Continue to Dashboard
            </Button>
          </StyledPaper>
        </Box>
      </ThemeProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <NavBarComponent />
      <Box sx={{ mt: 4 }} />
      <Box sx={{ display: "flex", minHeight: "100vh" }}>
        {/* Left Half - Form */}
        <Box
          sx={{
            flex: 6, // smaller form container
            minHeight: "100vh",
            overflow: "hidden",
            maxWidth: "55%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FormContainer hasError={!!error}>
            <StyledPaper>
              <Typography
                variant="h4"
                sx={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textAlign: "center",
                  marginBottom: "0.5rem",
                }}
              >
                Become a Vendor
              </Typography>
              <Typography
                variant="h6"
                color="text.secondary"
                sx={{
                  textAlign: "center",
                  marginBottom: "2rem",
                  fontWeight: 400,
                  fontSize: "1rem",
                }}
              >
                Join our community to unlock your greatest asset and welcome paying guests into your home.
              </Typography>
              {error && (
                <Typography
                  variant="body2"
                  sx={{
                    color: "error.main",
                    marginBottom: "1rem",
                    padding: "12px 16px",
                    backgroundColor: "rgba(220, 53, 69, 0.1)",
                    borderRadius: "8px",
                    border: "1px solid rgba(220, 53, 69, 0.2)",
                    textAlign: "center",
                  }}
                >
                  {error}
                </Typography>
              )}
              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  label="First Name"
                  variant="outlined"
                  fullWidth
                  value={formData.firstName}
                  onChange={handleInputChange("firstName")}
                  required
                  size="small"
                  sx={{ marginBottom: "1rem" }}
                />
                <TextField
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                  value={formData.lastName}
                  onChange={handleInputChange("lastName")}
                  required
                  size="small"
                  sx={{ marginBottom: "1rem" }}
                />
                <TextField
                  label="Business Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.businessName}
                  onChange={handleInputChange("businessName")}
                  required
                  size="small"
                  sx={{ marginTop: "1rem" }}
                />
                <TextField
                  label="Phone Number"
                  type="tel"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.phone}
                  onChange={handleInputChange("phone")}
                  required
                  size="small"
                />
                <TextField
                  label="Email Address"
                  type="email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.email}
                  onChange={handleInputChange("email")}
                  required
                  size="small"
                />
                <TextField
                  label="Password"
                  type="password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  value={formData.password}
                  onChange={handleInputChange("password")}
                  required
                  size="small"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.terms}
                      onChange={handleInputChange("terms")}
                      sx={{
                        color: theme.palette.primary.main,
                        "&.Mui-checked": {
                          color: theme.palette.primary.main,
                        },
                      }}
                    />
                  }
                  label="I have read and accept the Terms and Privacy Policy"
                  sx={{
                    marginTop: "1rem",
                    marginBottom: "0.5rem",
                    "& .MuiFormControlLabel-label": {
                      fontSize: "0.9rem",
                      color: "text.secondary",
                    },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  disabled={isSubmitting}
                  sx={{
                    background: isSubmitting
                      ? "linear-gradient(135deg, #28a745 0%, #20c997 100%)"
                      : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    height: "50px",
                    fontSize: "1.1rem",
                    animation: isSubmitting ? `${pulse} 1s infinite` : "none",
                    "&:hover": {
                      background: isSubmitting
                        ? "linear-gradient(135deg, #28a745 0%, #20c997 100%)"
                        : "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                    },
                    "&:disabled": {
                      background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                      color: "white",
                    },
                  }}
                >
                  {isSubmitting ? "Creating Account..." : "Sign Up"}
                </Button>
              </Box>
            </StyledPaper>
          </FormContainer>
        </Box>

        {/* Right Half - Video */}
        <Box
          sx={{
            flex: 6, // larger video container
            minHeight: "100vh",
            overflow: "hidden",
            maxWidth: "45%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <VideoContainer>
            <VideoWrapper>
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${youtubeVideoId}&controls=1&showinfo=0&rel=0`}
                title="Vendor Introduction Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </VideoWrapper>
          </VideoContainer>
        </Box>
      </Box>

      {/* Steps and Features Section */}
      <Box
        ref={stepsRef}
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 4,
          mt: 6,
          mb: 4,
          marginTop: "5cm",
          opacity: stepsVisible ? 1 : 0,
          transform: stepsVisible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1.2s cubic-bezier(0.4,0,0.2,1), transform 1.2s cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        {/* Steps Indicators */}
        <Box sx={{ 
          width: "100%", 
          display: "flex", 
          justifyContent: "center", 
          alignItems: "flex-start", 
          gap: { xs: 6, md: 18 } 
        }}>
          {/* Step 1 */}
          <Box sx={{ display: "flex", alignItems: "center", minWidth: 260 }}>
            <Box
              sx={{
                border: "2px solid #5ca3fa",
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5ca3fa",
                fontWeight: 700,
                fontSize: 48,
                mb: 2,
              }}
            >
              1
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", ml: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: 22,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sign up
              </Typography>
              <Typography variant="body2" sx={{ color: "#1a237e" }}>
                Create your vendor account in minutes
              </Typography>
            </Box>
          </Box>
          {/* Step 2 */}
          <Box sx={{ display: "flex", alignItems: "center", minWidth: 260 }}>
            <Box
              sx={{
                border: "2px solid #5ca3fa",
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5ca3fa",
                fontWeight: 700,
                fontSize: 48,
                mb: 2,
              }}
            >
              2
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", ml: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: 22,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Add your services
              </Typography>
              <Typography variant="body2" sx={{ color: "#1a237e" }}>
                List your property and set your availability
              </Typography>
            </Box>
          </Box>
          {/* Step 3 */}
          <Box sx={{ display: "flex", alignItems: "center", minWidth: 260 }}>
            <Box
              sx={{
                border: "2px solid #5ca3fa",
                borderRadius: "50%",
                width: 100,
                height: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#5ca3fa",
                fontWeight: 700,
                fontSize: 48,
                mb: 2,
              }}
            >
              3
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", ml: 3 }}>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: 22,
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Get bookings
              </Typography>
              <Typography variant="body2" sx={{ color: "#1a237e" }}>
                Start welcoming guests and earning money
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Feature Cards */}
        <Box sx={{ height: "1cm" }} /> {/* Add 1cm vertical space below steps */}

        <Box sx={{ 
          width: "100%", 
          maxWidth: "1200px", 
          display: "grid", 
          gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, 
          gap: 4, 
          px: 4 
        }}>
          {/* Card 1 - Best Price Guarantee */}
          <FeatureCard>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Best Price Guarantee
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </FeatureCard>

          {/* Card 2 - Easy & Quick Booking */}
          <FeatureCard>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Easy & Quick Booking
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </FeatureCard>

          {/* Card 3 - Customer Care 24/7 */}
          <FeatureCard>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 700,
                mb: 2,
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Customer Care 24/7
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </FeatureCard>
        </Box>
      </Box>

      {/* FAQ Section */}
      <FAQContainer sx={{ marginTop: "5cm" }}>
        <Typography variant="h4" sx={{ 
          textAlign: "center", 
          mb: 4,
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Frequently Asked Questions
        </Typography>

        {/* FAQ 1 */}
        <Accordion expanded={expanded === 'panel1'} onChange={handleAccordionChange('panel1')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>How do I create a vendor account?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Simply fill out the registration form above with your details, verify your email, and you'll be ready to list your property.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 2 */}
        <Accordion expanded={expanded === 'panel2'} onChange={handleAccordionChange('panel2')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>What are the commission rates?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We charge a competitive 15% commission on each booking, which includes payment processing and customer support.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 3 */}
        <Accordion expanded={expanded === 'panel3'} onChange={handleAccordionChange('panel3')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>How do I get paid?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Payments are processed automatically and transferred to your bank account within 3 business days after guest check-in.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 4 */}
        <Accordion expanded={expanded === 'panel4'} onChange={handleAccordionChange('panel4')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>Can I set my own prices?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Yes, you have full control over your pricing, availability, and house rules for your property.
            </Typography>
          </AccordionDetails>
        </Accordion>

        {/* FAQ 5 */}
        <Accordion expanded={expanded === 'panel5'} onChange={handleAccordionChange('panel5')}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ fontWeight: 600 }}>What support do you offer vendors?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our 24/7 customer support team is available to help with any issues, and we provide marketing tools to help maximize your bookings.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </FAQContainer>

      {/* Mobile Responsive */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .vendor-creation-container {
            flex-direction: column !important;
          }
          .vendor-creation-container > div {
            width: 100% !important;
            min-height: 50vh !important;
          }
        }
      `}</style>
    </ThemeProvider>
  )
}

export default VendorCreation