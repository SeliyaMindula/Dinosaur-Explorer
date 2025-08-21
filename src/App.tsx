import React from 'react';
import DinoList from './DinoList';
import { Box, Typography, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4332',
      light: '#2D6A4F',
      dark: '#081C15',
    },
    secondary: {
      main: '#D4A574',
      light: '#E9C5A0',
      dark: '#B08968',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 16px 48px rgba(0, 0, 0, 0.15)',
          },
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App" sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #1B4332 0%, #2D6A4F 25%, #40916C 50%, #52B788 75%, #74C69D 100%)',
        position: 'relative'
      }}>
        {/* Header */}
        <Box
          sx={{
            position: 'relative',
            background: 'linear-gradient(180deg, rgba(27, 67, 50, 0.95) 0%, rgba(45, 106, 79, 0.9) 100%)',
            backdropFilter: 'blur(20px)',
            borderBottom: '2px solid rgba(212, 165, 116, 0.3)',
            py: 6,
            mb: 6,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(212, 165, 116, 0.8) 50%, transparent 100%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '1px',
              background: 'linear-gradient(90deg, transparent 0%, rgba(212, 165, 116, 0.4) 50%, transparent 100%)',
            }
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                color: 'white',
                textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
                mb: 3,
                fontWeight: 800,
                background: 'linear-gradient(45deg, #FFFFFF 0%, #F8F9FA 25%, #E9ECEF 50%, #DEE2E6 75%, #CED4DA 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                letterSpacing: '0.02em',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-8px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120px',
                  height: '3px',
                  background: 'linear-gradient(90deg, transparent 0%, #D4A574 50%, transparent 100%)',
                  borderRadius: '2px',
                }
              }}
            >
              🦕 Dinosaur Explorer 🦖
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 400,
                letterSpacing: 1.5,
                fontSize: { xs: '1rem', sm: '1.1rem' },
                textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                fontStyle: 'italic',
                opacity: 0.9,
              }}
            >
              Discover the fascinating world of prehistoric creatures
            </Typography>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ pb: 8, position: 'relative', zIndex: 1 }}>
          <DinoList />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
