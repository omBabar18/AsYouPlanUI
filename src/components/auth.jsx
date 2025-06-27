"use client"

import { useState } from "react"
import { Box, Button, TextField, Typography, Paper, Link, Dialog, DialogContent, IconButton } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { styled, keyframes } from "@mui/system"
import confetti from "canvas-confetti"
import CloseIcon from "@mui/icons-material/Close"
import { apiPost } from "../utils/api"

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
    h5: {
      fontWeight: 600,
      marginBottom: "1rem",
    },
    body2: {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "12px",
          textTransform: "none",
          padding: "12px 24px",
          marginTop: "1rem",
          fontWeight: 600,
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

// Keyframe animations
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(30px);
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

// Styled sliding panel with enhanced animations
const SlidingPanel = styled(Box)(({ theme, isSignIn }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "50%",
  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  padding: "40px 30px",
  boxSizing: "border-box",
  textAlign: "center",
  zIndex: 2,
  left: isSignIn ? "50%" : "0%",
  transition: "left 1.0s cubic-bezier(0.4, 0, 0.2, 1)",
  boxShadow: "0 0 40px 0 rgba(102,126,234,0.25)",
  borderTopRightRadius: isSignIn ? 24 : 0,
  borderBottomRightRadius: isSignIn ? 24 : 0,
  borderTopLeftRadius: !isSignIn ? 24 : 0,
  borderBottomLeftRadius: !isSignIn ? 24 : 0,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.1)",
    zIndex: 1,
    borderRadius: "inherit",
  },
  "& > *": {
    zIndex: 2,
    position: "relative",
    animation: `${fadeIn} 0.8s ease-out`,
  },
}))



// Animated form container
const AnimatedFormContainer = styled(Box)(({ isVisible, hasError }) => ({
  flexShrink: 0,
  width: "50%",
  padding: "48px 40px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  backgroundColor: "rgba(255,255,255,0.98)",
  boxShadow: isVisible ? "0 8px 32px 0 rgba(102,126,234,0.10)" : "none",
  borderRadius: 36,
  opacity: isVisible ? 1 : 0,
  pointerEvents: isVisible ? "auto" : "none",
  transition: "opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s",
  animation: hasError ? `${shake} 0.2s ease-in-out` : "none",
  "& > *": {
    animation: isVisible ? `${slideIn} 0.6s ease-out` : "none",
  },
  // Ensure content can scroll if it overflows this container
  overflowY: 'auto', 
  maxHeight: '100%', // Allow vertical scrolling if content exceeds height
}))

function SignInSignUp() {
  const [isSignIn, setIsSignIn] = useState(true)
  const [signInEmail, setSignInEmail] = useState("")
  const [signInPassword, setSignInPassword] = useState("")
  const [signUpFirstName, setSignUpFirstName] = useState("")
  const [signUpLastName, setSignUpLastName] = useState("")
  const [signUpEmail, setSignUpEmail] = useState("")
  const [signUpPhoneNumber, setSignUpPhoneNumber] = useState("")
  const [signUpPassword, setSignUpPassword] = useState("")
  const [buttonClicked, setButtonClicked] = useState(null)
  const [isSignedIn, setIsSignedIn] = useState(false)
  const [error, setError] = useState("")
  const [successMessage, setSuccessMessage] = useState("")
  const [open, setOpen] = useState(false) // Modal state

  // Confetti animation function
  const triggerConfetti = () => {
    // Create a temporary canvas with high z-index
    const confettiCanvas = document.createElement('canvas');
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.top = '0';
    confettiCanvas.style.left = '0';
    confettiCanvas.style.width = '100vw';
    confettiCanvas.style.height = '100vh';
    confettiCanvas.style.pointerEvents = 'none';
    confettiCanvas.style.zIndex = '20000'; // Higher than modal/dialog
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    document.body.appendChild(confettiCanvas);

    const myConfetti = confetti.create(confettiCanvas, { resize: true, useWorker: true });
    const duration = 5000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 20000 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) {
        clearInterval(interval);
        confettiCanvas.remove();
        return;
      }
      const particleCount = 50 * (timeLeft / duration);
      myConfetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      }));
      myConfetti(Object.assign({}, defaults, {
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      }));
    }, 250);
  }

  const handleToggleForm = () => {
    setIsSignIn(!isSignIn)
    setSignInEmail("")
    setSignInPassword("")
    setSignUpFirstName("")
    setSignUpLastName("")
    setSignUpEmail("")
    setSignUpPhoneNumber("")
    setSignUpPassword("")
    setError("")
    setSuccessMessage("")
    setButtonClicked(null)
  }

  const handleSignIn = async () => {
    setButtonClicked("signIn")
    setError("")
    setSuccessMessage("")
    // Field-specific validation
    if (!signInEmail) {
      setError("Email is required")
      setButtonClicked(null)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signInEmail)) {
      setError("Please enter a valid email address")
      setButtonClicked(null)
      return
    }
    if (!signInPassword) {
      setError("Password is required")
      setButtonClicked(null)
      return
    }
    try {
      // Call backend API for sign in
      const res = await apiPost("/login", { email: signInEmail, password: signInPassword })
      setIsSignedIn(true)
      triggerConfetti()
      const userName = res.firstName || res.name || signInEmail.split('@')[0]
      setSuccessMessage(res.message || `Welcome back, ${userName}!`)
      setButtonClicked(null)
    } catch (err) {
      let msg = err.message || "Sign in failed"
      if (
        msg.toLowerCase().includes("not found") ||
        msg.toLowerCase().includes("no user")
      ) {
        msg = "No account found with this email. Please sign up first."
      } else if (
        msg.toLowerCase().includes("incorrect") ||
        msg.toLowerCase().includes("invalid password") ||
        msg.toLowerCase().includes("wrong password")
      ) {
        msg = "Incorrect password. Please try again."
      } else if (
        msg.toLowerCase().includes("invalid credentials")
      ) {
        msg = "Invalid email or password. Please try again."
      } else if (
        msg.toLowerCase().includes("failed")
      ) {
        msg = "Sign in failed. Please check your credentials and try again."
      }
      setError(msg)
      setButtonClicked(null)
    }
  }

  const handleSignUp = async () => {
    setButtonClicked("signUp")
    setError("")
    setSuccessMessage("")
    // Field-specific validation
    if (!signUpFirstName) {
      setError("First name is required")
      setButtonClicked(null)
      return
    }
    if (!signUpLastName) {
      setError("Last name is required")
      setButtonClicked(null)
      return
    }
    if (!signUpEmail) {
      setError("Email is required")
      setButtonClicked(null)
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(signUpEmail)) {
      setError("Please enter a valid email address")
      setButtonClicked(null)
      return
    }
    if (!signUpPhoneNumber) {
      setError("Phone number is required")
      setButtonClicked(null)
      return
    }
    if (!/^\d{10}$/.test(signUpPhoneNumber)) {
      setError("Phone number must be 10 digits")
      setButtonClicked(null)
      return
    }
    if (!signUpPassword) {
      setError("Password is required")
      setButtonClicked(null)
      return
    }
    if (signUpPassword.length < 6) {
      setError("Password must be at least 6 characters")
      setButtonClicked(null)
      return
    }
    try {
      // Call backend API for sign up
      const res = await apiPost("/register", {
        firstName: signUpFirstName,
        lastName: signUpLastName,
        email: signUpEmail,
        phone: signUpPhoneNumber,
        password: signUpPassword,
      })
      setIsSignedIn(true)
      triggerConfetti()
      setSuccessMessage(res.message || `Welcome, ${signUpFirstName}! Your account was created successfully.`)
      setButtonClicked(null)
    } catch (err) {
      let msg = err.message || "Sign up failed"
      if (
        msg.toLowerCase().includes("already exists") ||
        msg.toLowerCase().includes("duplicate")
      ) {
        msg = "An account with this email or phone already exists. Please sign in or use a different email."
      } else if (
        msg.toLowerCase().includes("password") ||
        msg.toLowerCase().includes("weak")
      ) {
        msg = "Password must be at least 6 characters and contain letters or numbers."
      } else if (
        msg.toLowerCase().includes("not signed up") ||
        msg.toLowerCase().includes("failed")
      ) {
        msg = "Sign up failed. Please check your details and try again."
      }
      setError(msg)
      setButtonClicked(null)
    }
  }

  const handleForgotPassword = () => {
    alert("Forgot password functionality would be implemented here")
  }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          padding: "20px",
          boxSizing: "border-box",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          sx={{ fontSize: "1.2rem", padding: "16px 40px", borderRadius: 16, boxShadow: "0 4px 24px rgba(102,126,234,0.10)" }}
          onClick={() => setOpen(true)}
        >
          Sign In / Sign Up
        </Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: 6,
              overflow: "visible",
              background: "none",
              boxShadow: "none",
            },
          }}
        >
          <DialogContent sx={{ p: 0, background: "none" }}>
            <Box sx={{ position: "absolute", top: 16, right: 16, zIndex: 10 }}>
              <IconButton onClick={() => setOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            {/* Place the entire Paper (auth UI) here */}
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "fit-content" }}> {/* Changed minHeight */}
              <Paper
                elevation={0}
                sx={{
                  width: { xs: "100%", sm: "900px" },
                  // Removed fixed height here
                  maxWidth: "950px",
                  borderRadius: "24px",
                  overflow: "hidden", // Changed from "hidden" to ensure no scrollbar for the paper itself
                  display: "flex",
                  boxShadow: "0 20px 60px rgba(102,126,234,0.15)",
                  position: "relative",
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(2px)",
                  // Added maxHeight for the paper to allow it to shrink
                  maxHeight: '90vh', // Adjust as needed, e.g., 90% of viewport height
                }}
              >
                {/* Sign In Form */}
                <AnimatedFormContainer isVisible={isSignIn} hasError={error && isSignIn}>
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "2rem",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Welcome Back
                  </Typography>

                  {error && isSignIn && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "error.main",
                        marginBottom: "1rem",
                        padding: "8px 16px",
                        backgroundColor: "rgba(220, 53, 69, 0.1)",
                        borderRadius: "8px",
                        border: "1px solid rgba(220, 53, 69, 0.2)",
                        fontWeight: 600
                      }}
                    >
                      {error}
                    </Typography>
                  )}
                  {successMessage && isSignIn && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "success.main",
                        marginBottom: "1rem",
                        padding: "8px 16px",
                        backgroundColor: "rgba(40, 167, 69, 0.08)",
                        borderRadius: "8px",
                        border: "1px solid rgba(40, 167, 69, 0.18)",
                        fontWeight: 600
                      }}
                    >
                      {successMessage}
                    </Typography>
                  )}

                  <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={signInEmail}
                    onChange={(e) => setSignInEmail(e.target.value)}
                    sx={{ marginBottom: "1rem" }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={signInPassword}
                    onChange={(e) => setSignInPassword(e.target.value)}
                    sx={{ marginBottom: "0.5rem" }}
                  />

                  <Box sx={{ width: "100%", textAlign: "right", marginBottom: "1.5rem" }}>
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleForgotPassword}
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        fontSize: "0.9rem",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </Box>

                  <Button
                    variant="contained"
                    color={buttonClicked === "signIn" ? "success" : "primary"}
                    fullWidth
                    onClick={handleSignIn}
                    disabled={buttonClicked === "signIn"}
                    sx={{
                      background:
                        buttonClicked === "signIn"
                          ? "linear-gradient(135deg, #28a745 0%, #20c997 100%)"
                          : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      fontSize: "1.1rem",
                      animation: buttonClicked === "signIn" ? `${pulse} 0.6s ease` : "none",
                      boxShadow: "0 4px 16px rgba(102,126,234,0.10)",
                      borderRadius: 12,
                      height: '50px', // Increased height for better appearance
                      minHeight: '50px',
                      marginBottom: "1.5rem",
                      "&:hover": {
                        background:
                          buttonClicked === "signIn"
                            ? "linear-gradient(135deg, #28a745 0%, #20c997 100%)"
                            : "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                        boxShadow: "0 8px 32px rgba(102,126,234,0.15)",
                      },
                      "&:disabled": {
                        background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                        color: "white",
                      },
                    }}
                  >
                    {buttonClicked === "signIn" ? "Signing In..." : "Sign In"}
                  </Button>


                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: "#666",
                      marginTop: "1.5rem",
                    }}
                  >
                    Don't have an account?{' '}
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleToggleForm}
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        fontWeight: 600,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Sign Up
                    </Link>
                  </Typography>
                </AnimatedFormContainer>

                {/* Sign Up Form */}
                <AnimatedFormContainer isVisible={!isSignIn} hasError={error && !isSignIn}>
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{
                      fontWeight: 700,
                      marginBottom: "1.5rem",
                      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Create Account
                  </Typography>

                  {error && !isSignIn && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "error.main",
                        marginBottom: "1rem",
                        padding: "8px 16px",
                        backgroundColor: "rgba(220, 53, 69, 0.1)",
                        borderRadius: "8px",
                        border: "1px solid rgba(220, 53, 69, 0.2)",
                        fontWeight: 600
                      }}
                    >
                      {error}
                    </Typography>
                  )}
                  {successMessage && !isSignIn && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: "success.main",
                        marginBottom: "1rem",
                        padding: "8px 16px",
                        backgroundColor: "rgba(40, 167, 69, 0.08)",
                        borderRadius: "8px",
                        border: "1px solid rgba(40, 167, 69, 0.18)",
                        textAlign: 'center',
                        fontWeight: 600,
                      }}
                    >
                      {successMessage}
                    </Typography>
                  )}

                  <TextField
                    label="First Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={signUpFirstName}
                    onChange={(e) => setSignUpFirstName(e.target.value)}
                    sx={{ marginBottom: "0.5rem" }}
                  />
                  <TextField
                    label="Last Name"
                    type="text"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={signUpLastName}
                    onChange={(e) => setSignUpLastName(e.target.value)}
                    sx={{ marginBottom: "0.5rem" }}
                  />
                  <TextField
                    label="Email Address"
                    type="email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={signUpEmail}
                    onChange={(e) => setSignUpEmail(e.target.value)}
                    sx={{ marginBottom: "0.5rem" }}
                  />
                  <TextField
                    label="WhatsApp Phone Number"
                    type="tel"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={signUpPhoneNumber}
                    onChange={(e) => setSignUpPhoneNumber(e.target.value)}
                    sx={{ marginBottom: "0.5rem" }}
                  />
                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={signUpPassword}
                    onChange={(e) => setSignUpPassword(e.target.value)}
                    sx={{ marginBottom: "0.5rem" }}
                  />

                  <Button
                    variant="contained"
                    color={buttonClicked === "signUp" ? "success" : "primary"}
                    fullWidth
                    onClick={handleSignUp}
                    disabled={buttonClicked === "signUp"}
                    sx={{
                      background:
                        buttonClicked === "signUp"
                          ? "linear-gradient(135deg, #28a745 0%, #20c997 100%)"
                          : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      color: "white",
                      fontSize: "1.1rem",
                      marginBottom: "1.5rem",
                      animation: buttonClicked === "signUp" ? `${pulse} 0.6s ease` : "none",
                      boxShadow: "0 4px 16px rgba(102,126,234,0.10)",
                      borderRadius: 20,
                      height: '50px',
                      minHeight: '50px',
                      '&:hover': {
                        background:
                          buttonClicked === "signUp"
                            ? "linear-gradient(135deg, #28a745 0%, #20c997 100%)"
                            : "linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%)",
                        boxShadow: "0 8px 32px rgba(102,126,234,0.15)",
                      },
                      '&:disabled': {
                        background: "linear-gradient(135deg, #28a745 0%, #20c997 100%)",
                        color: "white",
                      },
                    }}
                  >
                    {buttonClicked === "signUp" ? "Creating Account..." : "Create Account"}
                  </Button>


                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: "#666",
                      marginTop: "1.5rem",
                    }}
                  >
                    Already have an account?{' '}
                    <Link
                      component="button"
                      variant="body2"
                      onClick={handleToggleForm}
                      sx={{
                        color: "primary.main",
                        textDecoration: "none",
                        fontWeight: 600,
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      Sign In
                    </Link>
                  </Typography>
                </AnimatedFormContainer>

                {/* Sliding Panel */}
                <SlidingPanel isSignIn={isSignIn}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "bold",
                      marginBottom: "1.5rem",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      letterSpacing: 1.5,
                      fontSize: { xs: "2rem", sm: "2.5rem" },
                    }}
                  >
                    {isSignIn ? "Welcome Back!" : "New Here?"}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      marginBottom: "2.5rem",
                      opacity: 0.92,
                      lineHeight: 1.7,
                      textShadow: "0 1px 2px rgba(0,0,0,0.18)",
                      fontSize: { xs: "1rem", sm: "1.2rem" },
                    }}
                  >
                    {isSignIn
                      ? "To keep connected with us please login with your personal info"
                      : "Sign up and discover a great amount of new opportunities!"}
                  </Typography>
                </SlidingPanel>
              </Paper>
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </ThemeProvider>
  )
}

export default SignInSignUp