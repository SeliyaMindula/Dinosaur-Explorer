import React from 'react';
import DinoList from './DinoList';
import { Box, Typography, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2E7D32',
      light: '#4CAF50',
      dark: '#1B5E20',
    },
    secondary: {
      main: '#FF6F00',
      light: '#FF8F00',
      dark: '#E65100',
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
      <Box className="App" sx={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        {/* Header */}
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
            py: 4,
            mb: 6,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h1"
              sx={{
                textAlign: 'center',
                color: 'white',
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                mb: 2,
                fontWeight: 800,
                background: 'linear-gradient(45deg, #fff, #f0f0f0)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              🦕 Dinosaur Explorer 🦖
            </Typography>
            <Typography
              variant="h6"
              sx={{
                textAlign: 'center',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 300,
                letterSpacing: 1,
              }}
            >
              Discover the fascinating world of prehistoric creatures
            </Typography>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxWidth="lg" sx={{ pb: 8 }}>
          <DinoList />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
