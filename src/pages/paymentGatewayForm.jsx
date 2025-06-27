"use client"

import { useState } from "react"
import { Box, Button, TextField, Typography, Paper, FormControlLabel, Checkbox, Divider, IconButton } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { styled, keyframes } from "@mui/system"
import confetti from "canvas-confetti"
import { NavBarComponent } from "../components/navbarBeforeSignup" // Assuming this component exists
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'; // For info icon
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'; // For detail icon
import hotelPoolImg from '../assets/styles/imgs/hotelpaymentimg.jpg'; // Import the hotel image at the top

// Custom theme for Material UI (reusing the one from VendorCreation for consistency)
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
    },
})

// Keyframe animations (reusing existing animations)
const shake = keyframes`
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
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

// Styled components (reusing existing styled components with minor adjustments for context)
const FormContainer = styled(Box)(({ hasError }) => ({
    minHeight: "100vh", // Use minHeight instead of height to accommodate content
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem", // Add padding to avoid content touching edges on smaller screens
    background: "none",
    overflow: "hidden",
    animation: `${fadeIn} 0.8s ease-out`, // Use fadeIn for the whole container
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
    maxWidth: "100%", // Adjusted for flex container's internal sizing
    width: "100%",    // Adjusted for flex container's internal sizing
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
})

function PaymentGatewayForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        specialRequirements: "",
        agreeToTerms: false, // Added for terms and conditions
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState(false)

    // Confetti animation function (reusing from VendorCreation)
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
        const value = field === "agreeToTerms" ? event.target.checked : event.target.value
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }))
        if (error) setError("") // Clear error when user starts typing again
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        setIsSubmitting(true)

        // Validation
        const requiredFields = [
            "firstName",
            "lastName",
            "address1",
            "city",
            "state",
            "postalCode",
            "country",
        ]
        const emptyFields = requiredFields.filter((field) => !formData[field].trim())

        if (emptyFields.length > 0) {
            setError("Please fill in all required fields.")
            setIsSubmitting(false)
            return
        }

        if (!formData.agreeToTerms) {
            setError("Please agree to the terms and conditions.")
            setIsSubmitting(false)
            return;
        }

        // Simulate API call for payment processing
        setTimeout(() => {
            console.log("Payment Details:", formData)
            setSuccess(true)
            triggerConfetti()
            setIsSubmitting(false)
        }, 2000)
    }

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
                            Payment Successful! 🎉
                        </Typography>
                        <Typography variant="h6" color="text.secondary" sx={{ marginBottom: "2rem" }}>
                            Your booking has been confirmed. Thank you!
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => window.location.reload()} // Or navigate to a confirmation page
                            sx={{
                                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                                borderRadius: "12px",
                                padding: "12px 32px",
                            }}
                        >
                            Go to My Bookings
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
                {/* Left Section - Payment Form */}
                <Box
                    sx={{
                        flex: 6, // Controls the width of the left section (e.g., 60% of available space)
                        minHeight: "100vh",
                        overflow: "hidden",
                        maxWidth: "55%", // Adjust as needed to control left column width
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: '-10cm', // Move the left section form card up by 4cm
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
                                Complete Your Booking
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
                                Please provide your billing and contact details to finalize your reservation.
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
                            <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%" }}>
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
                                    label="Address Line 1"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.address1}
                                    onChange={handleInputChange("address1")}
                                    required
                                    size="small"
                                    sx={{ marginBottom: "1rem" }}
                                />
                                <TextField
                                    label="Address Line 2 (Optional)"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.address2}
                                    onChange={handleInputChange("address2")}
                                    size="small"
                                    sx={{ marginBottom: "1rem" }}
                                />
                                <TextField
                                    label="City"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.city}
                                    onChange={handleInputChange("city")}
                                    required
                                    size="small"
                                    sx={{ marginBottom: "1rem" }}
                                />
                                <TextField
                                    label="State/Province"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.state}
                                    onChange={handleInputChange("state")}
                                    required
                                    size="small"
                                    sx={{ marginBottom: "1rem" }}
                                />
                                <TextField
                                    label="Postal Code"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.postalCode}
                                    onChange={handleInputChange("postalCode")}
                                    required
                                    size="small"
                                    sx={{ marginBottom: "1rem" }}
                                />
                                <TextField
                                    label="Country"
                                    variant="outlined"
                                    fullWidth
                                    value={formData.country}
                                    onChange={handleInputChange("country")}
                                    required
                                    size="small"
                                    sx={{ marginBottom: "1rem" }}
                                />
                                <TextField
                                    label="Special Requirements (Optional)"
                                    variant="outlined"
                                    fullWidth
                                    multiline
                                    rows={3}
                                    value={formData.specialRequirements}
                                    onChange={handleInputChange("specialRequirements")}
                                    size="small"
                                    sx={{ marginBottom: "1.5rem" }}
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={formData.agreeToTerms}
                                            onChange={handleInputChange("agreeToTerms")}
                                            sx={{
                                                color: theme.palette.primary.main,
                                                "&.Mui-checked": {
                                                    color: theme.palette.primary.main,
                                                },
                                            }}
                                        />
                                    }
                                    label="I agree to the terms and conditions"
                                    sx={{
                                        marginTop: "0.5rem",
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
                                    {isSubmitting ? "Processing Payment..." : "Book Now"}
                                </Button>
                            </Box>
                        </StyledPaper>
                    </FormContainer>
                </Box>

                {/* Right Section - Booking Summary */}
                <Box
                    sx={{
                        flex: 4,
                        minHeight: "100vh",
                        overflow: "auto",
                        maxWidth: "45%",
                        display: "flex",
                        alignItems: "flex-start", // Changed to flex-start to move content to the top
                        justifyContent: "center",
                        background: "#fff", // Set right container color to white
                        padding: "2rem",
                        flexDirection: "column",
                    }}
                >
                    {/* Hotel View Image - OUTSIDE the Paper */}
                    <Box
                        sx={{
                            width: '11cm',
                            height: '8cm',
                            borderRadius: '8px',
                            overflow: 'hidden',
                            mb: 2,
                            mx: 'auto',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid #e0e0e0',
                            backgroundColor: '#fff', // Changed to white background
                            marginLeft: '0.5cm',
                            marginTop: '3rem',
                        }}
                    >
                        <img
                            src={hotelPoolImg}
                            alt="Hotel Pool View"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />
                    </Box>

                    <Paper
                        elevation={3}
                        sx={{
                            padding: "1.5rem",
                            borderRadius: "16px",
                            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                            background: "#fff", // Set card background to white (same as image container)
                            backdropFilter: "blur(5px)",
                            width: "100%",
                            maxWidth: "450px",
                            animation: `${fadeIn} 0.8s ease-out`,
                            mt: '2rem', // Move card down only
                            [theme.breakpoints.down('md')]: {
                                maxWidth: "90%",
                                margin: "1rem auto",
                            },
                        }}
                    >
                        {/* Hotel Name and Location - INSIDE the Paper */}
                        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, textAlign: 'center',
                            background: "linear-gradient(135deg, #4b5fc9 0%, #4b2c6b 100%)", // Slightly darker gradient
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            Your Booking
                        </Typography>
                        <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, textAlign: 'center',
                            background: "linear-gradient(135deg, #4b5fc9 0%, #4b2c6b 100%)", // Slightly darker gradient
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}>
                            Dylan Hotel
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
                            <LocationOnIcon sx={{ fontSize: '1rem', mr: 0.5, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                                Regal Cinemas Battery
                            </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
                            <Divider sx={{ my: 2 }} />

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body1">Check in:</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>06/29/2025</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body1">Check out:</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>07/05/2025</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                                <Typography variant="body1">Nights:</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>6</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                                <Typography variant="body1">Adults:</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>1</Typography>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Room Kerama Islands * 2
                                    <IconButton size="small" sx={{ ml: 0.5 }}>
                                        <ArticleOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                                    </IconButton>
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>₹4,200.00</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                                <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Service fee
                                    <IconButton size="small" sx={{ ml: 0.5 }}>
                                        <InfoOutlinedIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                                    </IconButton>
                                </Typography>
                                <Typography variant="body1" sx={{ fontWeight: 600 }}>₹100.00</Typography>
                            </Box>

                            <Divider sx={{ my: 2 }} />

                            <Typography variant="body1" sx={{ fontWeight: 600, mb: 1 }}>
                                Do you have a promo code?
                            </Typography>
                            <TextField
                                placeholder="Enter promo code"
                                variant="outlined"
                                fullWidth
                                size="small"
                                sx={{ mb: 2 }}
                            />
                            <Button
                                variant="outlined"
                                sx={{ mb: 2, textTransform: 'none', borderRadius: '8px', fontWeight: 500 }}
                                fullWidth
                            >
                                Apply
                            </Button>

                            {/* Payment Summary Table */}
                            <Box sx={{ 
                                mt: 2,
                                mb: 2,
                                width: '100%',
                                borderCollapse: 'collapse',
                            }}>
                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                                    Payment Summary
                                </Typography>
                                
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 1
                                }}>
                                    <Typography variant="body1">Total:</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>¥4,300.00</Typography>
                                </Box>
                                
                                <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>
                                    Credit want to pay?
                                </Typography>
                                
                                <Box sx={{ 
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 2,
                                    p: 1,
                                    backgroundColor: 'rgba(0, 0, 0, 0.05)',
                                    borderRadius: '4px'
                                }}>
                                    <Typography variant="body2">Credit 0 | 0</Typography>
                                    <Typography variant="body2">¥0.00</Typography>
                                </Box>
                                
                                <Box sx={{ 
                                    display: 'flex', 
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mt: 2,
                                    pt: 2,
                                    borderTop: '1px solid rgba(0, 0, 0, 0.12)'
                                }}>
                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>Pay now:</Typography>
                                    <Typography variant="body1" sx={{ fontWeight: 600 }}>¥4,300.00</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Box>

            {/* Responsive styles (retained and adjusted) */}
            <style>{`
                @media (max-width: 1200px) {
                    .MuiBox-root > .MuiBox-root {
                        max-width: 100% !important; /* Allow both flex items to take full width on smaller screens */
                    }
                    .MuiPaper-root { max-width: 98vw !important; padding: 1.2rem !important; }
                }
                @media (max-width: 900px) {
                    .MuiBox-root { flex-direction: column !important; min-height: auto !important; } /* Stack columns */
                    .MuiBox-root > .MuiBox-root {
                        max-width: 100% !important; /* Ensure they fill the width when stacked */
                        min-height: auto !important; /* Adjust height when stacked */
                        padding: 1rem !important; /* Add padding for stacked view */
                    }
                    .MuiPaper-root { max-width: 98vw !important; padding: 1rem !important; }
                    .MuiFormControl-root, .MuiTextField-root { min-width: 100% !important; }
                    .MuiButton-root { min-width: 100% !important; }
                }
                @media (max-width: 600px) {
                    .MuiBox-root { flex-direction: column !important; min-height: auto !important; padding: 0 !important; }
                    .MuiBox-root > .MuiBox-root {
                        padding: 1rem !important; /* Add some padding back for smaller screens */
                    }
                    .MuiPaper-root { max-width: 100vw !important; padding: 0.5rem !important; border-radius: 12px !important; }
                    .MuiFormControl-root, .MuiTextField-root { min-width: 100% !important; }
                    .MuiButton-root { min-width: 100% !important; font-size: 1rem !important; padding: 12px 0 !important; }
                }
            `}</style>
        </ThemeProvider>
    )
}

export default PaymentGatewayForm;