import React from 'react';
import { Box, Typography, Container, Grid, Paper, Divider, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ContentSection = () => {
  const features = [
    'Over 100,000 unique emoji combinations',
    'Easy to use interface for all ages',
    'Download and share your creations',
    'Works on all modern browsers and devices',
    'Regularly updated with new combinations'
  ];

  return (
    <Box
      id="about"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        backgroundColor: '#ffffff',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                color: 'text.primary',
              }}
            >
              About Emoji Kitchen
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                color: 'text.secondary',
                lineHeight: 1.7,
              }}
            >
              Emoji Kitchen is a creative tool that allows you to mix and match different emojis to create unique combinations. Originally developed by Google, our web application brings this functionality to your browser, making it accessible to everyone without needing specific apps or platforms.
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4,
                color: 'text.secondary',
                lineHeight: 1.7,
              }}
            >
              Whether you're looking to express a complex emotion, create something fun for social media, or just explore creative possibilities, Emoji Kitchen gives you the tools to communicate in a whole new way.
            </Typography>
            
            <Divider sx={{ mb: 4 }} />
            
            <Typography
              variant="h5"
              component="h3"
              sx={{
                fontWeight: 600,
                mb: 2,
                color: 'text.primary',
              }}
            >
              Key Features
            </Typography>
            
            <List>
              {features.map((feature, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <CheckCircleOutlineIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary={feature} />
                </ListItem>
              ))}
            </List>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: { xs: 3, md: 5 },
                borderRadius: '16px',
                backgroundColor: '#f8fafc',
                height: '100%',
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{
                  fontWeight: 700,
                  mb: 3,
                  color: 'text.primary',
                  textAlign: 'center',
                }}
              >
                How It Works
              </Typography>
              
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  component="h4"
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    color: theme => theme.palette.primary.main,
                  }}
                >
                  1. Select Your First Emoji
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  Browse through our extensive emoji collection or use the search function to find your first emoji.
                </Typography>
                
                <Typography 
                  variant="h6" 
                  component="h4"
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    color: theme => theme.palette.primary.main,
                  }}
                >
                  2. Choose Your Second Emoji
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                  Select another emoji to combine with your first choice. Not all combinations are possible, but there are thousands to discover!
                </Typography>
                
                <Typography 
                  variant="h6" 
                  component="h4"
                  sx={{ 
                    fontWeight: 600, 
                    mb: 1,
                    color: theme => theme.palette.primary.main,
                  }}
                >
                  3. Save and Share
                </Typography>
                <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                  Once you've created your perfect emoji mashup, you can download it or copy it directly to your clipboard for sharing across your favorite platforms.
                </Typography>
              </Box>
              
              <Box 
                sx={{ 
                  display: 'flex', 
                  justifyContent: 'center',
                  p: 2,
                  backgroundColor: 'rgba(25, 118, 210, 0.05)',
                  borderRadius: '8px',
                }}
              >
                <Typography 
                  sx={{ 
                    fontFamily: "'Noto Emoji', 'Apple Color Emoji', sans-serif",
                    fontSize: { xs: '60px', md: '80px' },
                    lineHeight: 1,
                    textAlign: 'center',
                  }}
                >
                  🐱 + 🍔 = 🐱🍔
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContentSection;