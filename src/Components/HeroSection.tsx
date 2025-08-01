import React from 'react';
import { Box, Typography, Container, Button, useMediaQuery, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        width: '100%',
        py: { xs: 8, md: 14 },
        background: 'linear-gradient(145deg, #f0f7ff 0%, #e6f0ff 100%)',
        borderRadius: { xs: 0, md: '0 0 30px 30px' },
        boxShadow: '0 6px 12px -2px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ textAlign: { xs: 'center', md: 'left' }, maxWidth: '600px' }}>
            <Typography
                variant={isMobile ? 'h3' : 'h1'}
                component="h1"
                sx={{
                  fontWeight: 900,
                  mb: 2,
                  background: 'linear-gradient(90deg, #FF5722 0%, #FFC107 50%, #4CAF50 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-1px',
                  fontSize: { xs: '2.5rem', md: '4rem' },
                }}
              >
                Emoji Kitchen
              </Typography>
            
            <Typography 
              variant="h6" 
              component="p" 
              sx={{ 
                color: 'text.secondary',
                mb: 4,
                lineHeight: 1.8,
                maxWidth: '550px',
                mx: { xs: 'auto', md: 0 },
                fontSize: { xs: '1rem', md: '1.2rem' },
              }}
            >
              Unleash your creativity with Emoji Kitchen! Combine any two emojis to create thousands of unique stickers for your messages and social media.
            </Typography>
            
            <Button 
              variant="contained" 
              size="large"
              href="#kitchen-tool"
              sx={{ 
                borderRadius: '50px',
                px: 5,
                py: 1.8,
                textTransform: 'none',
                fontSize: '1.2rem',
                fontWeight: 700,
                boxShadow: '0 8px 20px 0 rgba(21,101,192,0.4)',
                background: 'linear-gradient(90deg, #1565C0 0%, #42A5F5 100%)',
                '&:hover': {
                  boxShadow: '0 10px 25px 0 rgba(21,101,192,0.5)',
                  background: 'linear-gradient(90deg, #1565C0 10%, #42A5F5 90%)',
                }
              }}
            >
              Start Mixing
            </Button>
          </Box>
          
          <Box 
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              width: { xs: '100%', md: '45%' },
              maxWidth: '550px',
              height: { xs: '300px', md: '400px' },
              overflow: 'visible',
            }}
          >
            <Paper
              elevation={8}
              sx={{
                position: 'relative',
                width: '90%',
                height: '90%',
                borderRadius: '30px',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                transform: 'rotate(-5deg)',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                zIndex: 2,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '120px', md: '180px' },
                  fontFamily: "'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
                  textAlign: 'center',
                  animation: 'pulse 8s ease-in-out infinite',
                  '@keyframes pulse': {
                    '0%': { transform: 'scale(1)' },
                    '50%': { transform: 'scale(1.1)' },
                    '100%': { transform: 'scale(1)' },
                  },
                  filter: 'saturate(1.5) brightness(1.1)',
                }}
              >
                🐱🤖
              </Typography>
            </Paper>
            
            <Paper
              elevation={4}
              sx={{
                position: 'absolute',
                width: '60%',
                height: '60%',
                borderRadius: '20px',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                top: '5%',
                right: '0%',
                transform: 'rotate(8deg)',
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '80px', md: '100px' },
                  fontFamily: "'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
                  textAlign: 'center',
                  animation: 'float 6s ease-in-out infinite',
                  '@keyframes float': {
                    '0%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-15px)' },
                    '100%': { transform: 'translateY(0px)' },
                  },
                  filter: 'saturate(1.5) brightness(1.1)',
                }}
              >
                🍕🍦
              </Typography>
            </Paper>
            
            <Paper
              elevation={3}
              sx={{
                position: 'absolute',
                width: '40%',
                height: '40%',
                borderRadius: '15px',
                background: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                bottom: '10%',
                left: '5%',
                transform: 'rotate(-12deg)',
                zIndex: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '60px', md: '80px' },
                  fontFamily: "'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif",
                  textAlign: 'center',
                  animation: 'bounce 7s ease-in-out infinite',
                  '@keyframes bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                  },
                  filter: 'saturate(1.8) brightness(1.2)',
                }}
              >
                🐵🦊
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;