import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Container,
  Fade,
  Grow,
  Slide
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { 
  PeopleAlt, 
  Star, 
  Public, 
  Code, 
  Flight, 
  Hotel, 
  AttachMoney, 
  HeadsetMic, 
  School, 
  Business, 
  Gavel, 
  TrendingUp, 
  Group,
  // New icons
  LocalAtm,
  Campaign,
  Settings,
  SupportAgent,
  ReceiptLong,
  AirplaneTicket,
  KingBed,
  Terminal,
  AccountBalance,
  Groups,
  Balance,
  Map,
  Analytics,
  Person
} from '@mui/icons-material';
import { keyframes } from '@emotion/react';
import { motion } from 'framer-motion';

// Pulse animation for CTAs
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const CareersPage = () => {
  const departments = [
    { 
      icon: <LocalAtm fontSize="medium" />, 
      name: "Sales", 
      description: "Handle B2C, B2B, Corporate, and Holiday tour sales—domestic and international." 
    },
    { 
      icon: <Campaign fontSize="medium" />, 
      name: "Marketing", 
      description: "Craft brand campaigns, drive leads, manage influencer collabs & digital strategy." 
    },
    { 
      icon: <Settings fontSize="medium" />, 
      name: "Operations", 
      description: "Ensure flawless execution of itineraries, logistics, visas, and vendor coordination." 
    },
    { 
      icon: <SupportAgent fontSize="medium" />, 
      name: "Customer Care", 
      description: "Support clients before, during, and after trips with empathy and precision." 
    },
    { 
      icon: <ReceiptLong fontSize="medium" />, 
      name: "Contracting & Costing", 
      description: "Negotiate, price, and manage service contracts and profit margins." 
    },
    { 
      icon: <AirplaneTicket fontSize="medium" />, 
      name: "Flights & Ticketing", 
      description: "Domestic & international GDS ticketing, reissues, and airline relations." 
    },
    { 
      icon: <KingBed fontSize="medium" />, 
      name: "Hotels & OTA", 
      description: "Hotel contracting, API integration, rate parity & dynamic pricing." 
    },
    { 
      icon: <Terminal fontSize="medium" />, 
      name: "Technology & Product", 
      description: "Web/app dev, UX, backend systems, OTA engine, APIs." 
    },
    { 
      icon: <AccountBalance fontSize="medium" />, 
      name: "Finance & Accounts", 
      description: "Taxation, vendor/client billing, reconciliation, and reporting." 
    },
    { 
      icon: <Groups fontSize="medium" />, 
      name: "HR & Admin", 
      description: "Build, train and manage a passionate team of travel professionals." 
    },
    { 
      icon: <Balance fontSize="medium" />, 
      name: "Legal & Compliance", 
      description: "Safeguard travel contracts, disputes, PR/legal relations." 
    },
    { 
      icon: <Map fontSize="medium" />, 
      name: "Tour Product Development", 
      description: "Curate unique experiences, seasonal packages, and festival tours." 
    },
    { 
      icon: <Analytics fontSize="medium" />, 
      name: "Business Intelligence", 
      description: "Analyze market data, pricing, campaigns & forecasting." 
    },
    { 
      icon: <Person fontSize="medium" />, 
      name: "Influencer & Celebrity Travel", 
      description: "Handle high-profile travel planning, media coordination, and partnerships." 
    }
  ];

  const testimonials = [
    {
      quote: "AsYouPlan gave me a chance to lead an international group tour within 4 months of joining!",
      author: "Rahul, Operations Executive"
    },
    {
      quote: "It's not just work here—it's innovation, learning, and global exposure.",
      author: "Divya, Marketing Strategist"
    },
    {
      quote: "Handling influencer tours has been a dream job! Every day feels like a new campaign launch.",
      author: "Nisha, PR & Celebrity Manager"
    }
  ];

  const benefits = [
    "Work with India's most dynamic travel brand",
    "Celebrity & Influencer-led projects",
    "Cross-functional learning",
    "Tech-first systems & innovation",
    "Opportunities to travel & represent globally",
    "Open, inclusive & growth-driven culture"
  ];

  return (
    <Box sx={{ 
      backgroundColor: '#f9f9f9',
      overflowX: 'hidden'
    }}>
      {/* Hero Section with Team Background */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        sx={{ 
          height: '100vh',
          minHeight: 600,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 100,
            background: 'linear-gradient(to bottom, transparent 0%, #f9f9f9 100%)'
          }
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{ 
                fontWeight: 800, 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.5)'
              }}
            >
              Join the Team Behind Extraordinary Journeys
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                mb: 4,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                textShadow: '0 1px 3px rgba(0,0,0,0.5)'
              }}
            >
              At AsYouPlan, we're not just building itineraries—we're building unforgettable travel experiences.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, mt: 4 }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="contained" 
                  size="large" 
                  color="primary"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                    '&:hover': {
                      animation: `${pulse} 2s infinite`,
                      boxShadow: '0 6px 25px rgba(0,0,0,0.3)'
                    }
                  }}
                >
                  View Open Positions
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outlined" 
                  size="large" 
                  sx={{ 
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    borderRadius: 2,
                    color: 'white', 
                    borderColor: 'white',
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    }
                  }}
                >
                  Submit Application
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Container>
      </Box>

      {/* Why Work With Us - Animated Cards */}
      <Container maxWidth="lg" sx={{ py: 10, position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              textAlign: 'center', 
              mb: 8, 
              fontWeight: 800,
              color: 'primary.main',
              fontSize: { xs: '2rem', md: '2.8rem' }
            }}
          >
            Why Work With Us?
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {benefits.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Grow in={true} timeout={index * 300}>
                <Card 
                  component={motion.div}
                  whileHover={{ 
                    y: -10,
                    boxShadow: '0 15px 30px rgba(0,0,0,0.1)'
                  }}
                  sx={{ 
                    height: '100%', 
                    p: 4, 
                    textAlign: 'center',
                    borderRadius: 3,
                    border: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#fff'
                  }}
                >
                  <Box 
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      color: 'primary.main'
                    }}
                  >
                    {index % 6 === 0 && <Star fontSize="large" />}
                    {index % 6 === 1 && <Public fontSize="large" />}
                    {index % 6 === 2 && <TrendingUp fontSize="large" />}
                    {index % 6 === 3 && <Code fontSize="large" />}
                    {index % 6 === 4 && <Flight fontSize="large" />}
                    {index % 6 === 5 && <Group fontSize="large" />}
                  </Box>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 700,
                      mb: 2,
                      color: 'text.primary'
                    }}
                  >
                    {item}
                  </Typography>
                </Card>
              </Grow>
            </Grid>
          ))}
        </Grid>

        <Fade in={true} timeout={2000}>
          <Box 
            sx={{ 
              mt: 10, 
              textAlign: 'center', 
              fontStyle: 'italic',
              backgroundColor: 'rgba(25,118,210,0.1)',
              p: 4,
              borderRadius: 3,
              borderLeft: '4px solid',
              borderColor: 'primary.main'
            }}
          >
            <Typography 
              variant="h4" 
              sx={{ 
                mb: 2,
                fontWeight: 500,
                color: 'text.primary'
              }}
            >
              "Our people are not employees—they're travel storytellers, creators, and problem-solvers."
            </Typography>
            <Typography 
              variant="h5"
              sx={{ 
                fontWeight: 600,
                color: 'primary.main'
              }}
            >
              — Sumukh Tandel, Founder & CEO
            </Typography>
          </Box>
        </Fade>
      </Container>

      {/* Departments Section with Animated Accordions */}
      <Box 
        sx={{ 
          backgroundColor: '#fff', 
          py: 10,
          backgroundImage: 'radial-gradient(rgba(25,118,210,0.1) 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}
      >
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Typography 
              variant="h3" 
              component="h2" 
              sx={{ 
                textAlign: 'center', 
                mb: 8, 
                fontWeight: 800,
                color: 'primary.main',
                fontSize: { xs: '2rem', md: '2.8rem' }
              }}
            >
              Open Departments
            </Typography>
          </motion.div>

          <Box sx={{ maxWidth: 1000, margin: '0 auto' }}>
            {departments.map((dept, index) => (
              <Slide 
                direction="up" 
                in={true} 
                timeout={index * 150}
                key={index}
              >
                <Accordion 
                  component={motion.div}
                  whileHover={{ scale: 1.01 }}
                  sx={{ 
                    mb: 2,
                    borderRadius: '12px !important',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    '&:before': { display: 'none' }
                  }}
                >
                  <AccordionSummary 
                    expandIcon={<ExpandMoreIcon />}
                    sx={{
                      backgroundColor: index % 2 === 0 ? 'rgba(25,118,210,0.05)' : '#fff',
                      '&:hover': {
                        backgroundColor: 'rgba(25,118,210,0.08)'
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Box 
                        sx={{ 
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'primary.main'
                        }}
                      >
                        {dept.icon}
                      </Box>
                      <Typography 
                        variant="h6" 
                        sx={{ 
                          fontWeight: 700,
                          color: 'text.primary'
                        }}
                      >
                        {dept.name}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: '#f9f9f9',
                      borderTop: '1px solid rgba(0,0,0,0.1)'
                    }}
                  >
                    <Typography>{dept.description}</Typography>
                    <Button 
                      variant="text" 
                      color="primary" 
                      sx={{ 
                        mt: 2,
                        fontWeight: 600
                      }}
                    >
                      View Open Roles
                    </Button>
                  </AccordionDetails>
                </Accordion>
              </Slide>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Testimonials with Office Background - Fixed Spacing */}
      <Box 
        sx={{ 
          minHeight: 500,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          py: 10,
          mb: 8
        }}
      >
        <Container maxWidth="lg">
          <Typography 
            variant="h3" 
            component="h2" 
            sx={{ 
              textAlign: 'center', 
              mb: 6, 
              fontWeight: 800,
              color: 'white',
              fontSize: { xs: '2rem', md: '2.8rem' }
            }}
          >
            Our Culture
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%', 
                      p: 4,
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      borderRadius: 3,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: 5,
                        height: '100%',
                        backgroundColor: 'primary.main'
                      }
                    }}
                  >
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        fontStyle: 'italic', 
                        mb: 3,
                        fontSize: '1.1rem',
                        position: 'relative',
                        '&:before': {
                          content: '"\\201C"',
                          fontSize: '4rem',
                          position: 'absolute',
                          left: -15,
                          top: -20,
                          color: 'rgba(25,118,210,0.1)'
                        }
                      }}
                    >
                      {testimonial.quote}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 700,
                        color: 'primary.main'
                      }}
                    >
                      — {testimonial.author}
                    </Typography>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Final CTA - Fixed Positioning */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        sx={{ 
          py: 12,
          px: 2,
          backgroundImage: 'linear-gradient(rgba(25,118,210,0.9), rgba(25,118,210,0.9)), url(https://images.unsplash.com/photo-1571260898930-8a6e8fc5a3d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&:before': {
            content: '""',
            position: 'absolute',
            top: -100,
            left: -100,
            width: 300,
            height: 300,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)'
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            bottom: -150,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.1)'
          }
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              fontWeight: 800, 
              mb: 3,
              fontSize: { xs: '2.2rem', md: '3rem' },
              position: 'relative',
              zIndex: 1
            }}
          >
            Ready to build unforgettable journeys with us?
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              mb: 5,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              position: 'relative',
              zIndex: 1
            }}
          >
            Submit your profile today and let's plan your next big career move—together.
          </Typography>
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 3, 
              flexWrap: 'wrap',
              position: 'relative',
              zIndex: 1
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="contained" 
                size="large"
                sx={{
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  backgroundColor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    backgroundColor: 'white',
                    animation: `${pulse} 2s infinite`
                  }
                }}
              >
                View All Openings
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  px: 5,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  borderRadius: 2,
                  color: 'white', 
                  borderColor: 'white',
                  borderWidth: 2,
                  '&:hover': {
                    borderWidth: 2,
                    backgroundColor: 'rgba(255,255,255,0.1)'
                  }
                }}
              >
                Submit Resume Now
              </Button>
            </motion.div>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default CareersPage;