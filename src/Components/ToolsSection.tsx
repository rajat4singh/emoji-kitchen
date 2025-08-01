import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import SearchIcon from '@mui/icons-material/Search';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import { Box, Container, Grid, Paper, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ToolsSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const tools = [
    {
      icon: <AutoFixHighIcon fontSize="large" color="primary" />,
      title: 'Emoji Mixer',
      description: 'Combine any two emojis to create unique mashups that express exactly what you want to say.'
    },
    {
      icon: <ShuffleIcon fontSize="large" color="primary" />,
      title: 'Random Generator',
      description: 'Feeling creative? Let our randomizer surprise you with unexpected and delightful emoji combinations.'
    },
    {
      icon: <SearchIcon fontSize="large" color="primary" />,
      title: 'Emoji Search',
      description: 'Easily find the perfect emoji for your combination with our intuitive search functionality.'
    },
    {
      icon: <FileDownloadIcon fontSize="large" color="primary" />,
      title: 'Bulk Download',
      description: 'Save your favorite emoji combinations for use across all your messaging platforms and social media.'
    }
  ];

  return (
    <Box
      id="tools"
      sx={{
        width: '100%',
        py: { xs: 6, md: 10 },
        backgroundColor: '#fafafa',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 2,
              color: 'text.primary',
            }}
          >
            Our Tools
          </Typography>
          <Typography
            variant="h6"
            component="p"
            sx={{
              color: 'text.secondary',
              maxWidth: '700px',
              mx: 'auto',
              lineHeight: 1.6,
            }}
          >
            Discover the features that make Emoji Kitchen the perfect tool for creating expressive emoji combinations
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  borderRadius: '16px',
                  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 2,
                    p: 2,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  {tool.icon}
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  sx={{ mb: 2, fontWeight: 600 }}
                >
                  {tool.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {tool.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ToolsSection;