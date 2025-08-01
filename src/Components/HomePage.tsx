import React from 'react';
import { Box, Container, Divider } from '@mui/material';
import Header from './Header';
import HeroSection from './HeroSection';
import ContentSection from './ContentSection';
import Kitchen from './kitchen';
import Footer from './footer';

const HomePage = () => {
  return (
    <Box sx={{ minHeight: '100dvh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <HeroSection />
      
      <Box 
        id="kitchen-tool"
        sx={{ 
          py: { xs: 6, md: 8 },
          backgroundColor: '#f5f8ff',
        }}
      >
        <Container maxWidth="lg">
          <Kitchen />
        </Container>
      </Box>
      
      <ContentSection />
      
      <Footer />
    </Box>
  );
};

export default HomePage;