import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  TextField,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
  Chip,
  Fade,
  Grow,
  Slide,
  Grid
} from '@mui/material';
import {
  Search,
  HelpOutline,
  Flight,
  Hotel,
  Payment,
  Cancel,
  Description,
  Security,
  LocalAirport,
  CardGiftcard,
  Email,
  SupportAgent
} from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { keyframes } from '@emotion/react';

// Animation keyframes
const floatAnimation = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;

const pulseAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const HelpDesk = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [ticketSearch, setTicketSearch] = useState('');
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const submittedTickets = [
    {
      id: '#A123456',
      subject: 'Flight refund request',
      status: 'Resolved',
      updated: '12 July 2025'
    },
    {
      id: '#B567890',
      subject: 'Hotel booking confirmation',
      status: 'In Progress',
      updated: '15 July 2025'
    },
    {
      id: '#C999888',
      subject: 'Payment issue - Credit card double charge',
      status: 'Open',
      updated: '16 July 2025'
    }
  ];

  const faqCategories = [
    {
      name: 'Booking',
      icon: <Flight sx={{ color: '#1976d2' }} />,
      questions: [
        {
          q: 'How can I customize a tour?',
          a: 'You can fill out our custom trip form or talk directly with our travel expert to design a trip based on your preferences, interests, travel pace, and budget.'
        },
        {
          q: 'How do I join a fixed departure?',
          a: 'Browse our Fixed Departure Tours section and select the tour of your choice. You can book directly or connect with our team for group-specific details.'
        }
      ]
    },
    {
      name: 'Payments',
      icon: <Payment sx={{ color: '#4caf50' }} />,
      questions: [
        {
          q: 'What payment methods are accepted?',
          a: 'We accept UPI, Net Banking, Credit/Debit Cards (Visa, Mastercard, RuPay), and NEFT transfers. Offline bank deposits are also available.'
        }
      ]
    },
    {
      name: 'Cancellations',
      icon: <Cancel sx={{ color: '#f44336' }} />,
      questions: [
        {
          q: 'How can I cancel my booking?',
          a: 'You can request cancellation via email, WhatsApp, or your customer dashboard. Cancellation terms will apply as per your booking document.'
        }
      ]
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved': return 'success';
      case 'In Progress': return 'warning';
      case 'Open': return 'error';
      default: return 'default';
    }
  };

  return (
    <Box sx={{ 
      backgroundColor: '#f9f9f9', 
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9))'
    }}>
      {/* Hero Section with Blue Background */}
      <Box sx={{
        position: 'relative',
        height: '60vh',
        minHeight: 400,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        backgroundColor: '#1976d2',
        backgroundImage: 'linear-gradient(135deg, #1976d2 0%, #0d47a1 100%)',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(to top, rgba(0,0,0,0.1) 0%, transparent 100%)',
          zIndex: 1
        }
      }}>
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Fade in={true} timeout={1000}>
            <Box sx={{ 
              textAlign: 'center', 
              color: 'white',
              p: 3,
              borderRadius: 2,
            }}>
              <Typography variant="h2" component="h1" sx={{ 
                fontWeight: 700, 
                mb: 3,
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}>
                We're Here to Help
              </Typography>
              <Typography variant="h5" sx={{ 
                mb: 4,
                fontSize: { xs: '1.2rem', md: '1.5rem' }
              }}>
                Get answers to your travel questions or connect with our support team
              </Typography>
              
              <Grow in={true} timeout={1500}>
                <TextField
                  fullWidth
                  variant="outlined"
                  placeholder="How can we help you today?"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  sx={{ 
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    borderRadius: 2,
                    maxWidth: 700,
                    margin: '0 auto',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.5)'
                      },
                      '&:hover fieldset': {
                        borderColor: 'white'
                      }
                    }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Search sx={{ color: '#1976d2' }} />
                      </InputAdornment>
                    ),
                    sx: { fontSize: '1.1rem' }
                  }}
                />
              </Grow>
            </Box>
          </Fade>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: -8, position: 'relative', zIndex: 1 }}>
        {/* Ticket Tracking Section */}
        <Slide direction="up" in={true} timeout={800}>
          <Paper elevation={6} sx={{ 
            p: 4, 
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #ffffff 0%, #f5f7fa 100%)',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>
            <Typography variant="h4" sx={{ 
              fontWeight: 600, 
              mb: 3,
              display: 'flex',
              alignItems: 'center',
              color: '#1976d2'
            }}>
              <SupportAgent sx={{ mr: 1.5 }} />
              Your Support Tickets
            </Typography>
            
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Search by ticket ID or email"
              value={ticketSearch}
              onChange={(e) => setTicketSearch(e.target.value)}
              sx={{ 
                backgroundColor: 'white',
                borderRadius: 2,
                maxWidth: 500,
                mb: 3,
                boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />

            <TableContainer component={Paper} sx={{ 
              mt: 2,
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              overflow: 'hidden'
            }}>
              <Table>
                <TableHead sx={{ 
                  backgroundColor: '#1976d2',
                  '& th': { color: 'white', fontWeight: 600 }
                }}>
                  <TableRow>
                    <TableCell>Ticket ID</TableCell>
                    <TableCell>Subject</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Last Updated</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {submittedTickets.map((ticket) => (
                    <TableRow 
                      key={ticket.id}
                      hover
                      sx={{ 
                        '&:last-child td': { borderBottom: 0 },
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }
                      }}
                    >
                      <TableCell sx={{ fontWeight: 500 }}>{ticket.id}</TableCell>
                      <TableCell>{ticket.subject}</TableCell>
                      <TableCell>
                        <Chip 
                          label={ticket.status} 
                          color={getStatusColor(ticket.status)}
                          size="small"
                          sx={{ 
                            fontWeight: 600,
                            minWidth: 100
                          }}
                        />
                      </TableCell>
                      <TableCell>{ticket.updated}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Slide>

        {/* Escalation Section */}
        <Fade in={true} timeout={1200}>
          <Paper elevation={6} sx={{ 
            p: 4, 
            mb: 4,
            borderRadius: 3,
            background: 'linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%)',
            border: '1px solid rgba(0,0,0,0.1)'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Email sx={{ 
                fontSize: 40, 
                color: '#ff6d00',
                mr: 2,
                animation: `${pulseAnimation} 2s infinite`
              }} />
              <Box>
                <Typography variant="h4" sx={{ fontWeight: 600, color: '#d84315' }}>
                  Need Further Assistance?
                </Typography>
                <Typography sx={{ color: '#5d4037' }}>
                  Our senior support team is ready to help
                </Typography>
              </Box>
            </Box>
            
            <Button 
              variant="contained" 
              color="warning" 
              sx={{ 
                mt: 2,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(255,152,0,0.3)',
                '&:hover': {
                  animation: `${pulseAnimation} 2s infinite`,
                  boxShadow: '0 6px 16px rgba(255,152,0,0.4)'
                }
              }}
              startIcon={<SupportAgent />}
            >
              Escalate Your Ticket
            </Button>
            <Typography sx={{ 
              mt: 3,
              fontStyle: 'italic',
              display: 'flex',
              alignItems: 'center',
              color: '#5d4037'
            }}>
              <Email sx={{ mr: 1 }} /> escalation@asyouplan.com
            </Typography>
          </Paper>
        </Fade>

        {/* FAQ Section */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, 
            mb: 3, 
            color: '#1976d2',
            textAlign: 'center',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 4,
              backgroundColor: '#1976d2',
              borderRadius: 2
            }
          }}>
            Frequently Asked Questions
          </Typography>
          
          <Grid container spacing={3}>
            {faqCategories.map((category, catIndex) => (
              <Grid item xs={12} md={6} key={catIndex}>
                <Slide direction="up" in={true} timeout={catIndex * 200}>
                  <Paper elevation={3} sx={{ 
                    borderRadius: 3,
                    overflow: 'hidden',
                    mb: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }
                  }}>
                    <Box sx={{ 
                      backgroundColor: '#1976d2',
                      color: 'white',
                      p: 2,
                      display: 'flex',
                      alignItems: 'center'
                    }}>
                      {category.icon}
                      <Typography variant="h5" sx={{ 
                        fontWeight: 600,
                        ml: 1.5
                      }}>
                        {category.name}
                      </Typography>
                    </Box>
                    
                    <Box sx={{ p: 2 }}>
                      {category.questions.map((item, index) => (
                        <Accordion 
                          key={index}
                          expanded={expanded === `${catIndex}-${index}`}
                          onChange={handleAccordionChange(`${catIndex}-${index}`)}
                          sx={{
                            mb: 1,
                            borderRadius: '8px !important',
                            boxShadow: 'none',
                            border: '1px solid rgba(0,0,0,0.1)',
                            '&:before': { display: 'none' }
                          }}
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            sx={{
                              backgroundColor: '#f5f5f5',
                              '&:hover': {
                                backgroundColor: '#eeeeee'
                              }
                            }}
                          >
                            <Typography sx={{ fontWeight: 600 }}>
                              {item.q}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails sx={{ backgroundColor: 'white' }}>
                            <Typography>{item.a}</Typography>
                          </AccordionDetails>
                        </Accordion>
                      ))}
                    </Box>
                  </Paper>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default HelpDesk;