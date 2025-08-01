import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Container, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <AppBar position="static" color="transparent" elevation={1} sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.08)', backgroundColor: '#ffffff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ py: 1 }}>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: { xs: 1, md: 0 } }}>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 3,
                fontFamily: "'Inter', sans-serif",
                fontWeight: 700,
                color: '#1a73e8',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.25rem',
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ color: '#1a73e8', marginRight: '4px' }}>⚡</span>
              <span style={{ background: 'linear-gradient(90deg, #1a73e8, #6c63ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>hsuper.tools</span>
            </Typography>
          </Box>

          {/* Desktop menu */}
          {!isMobile ? (
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
              {menuItems.map((item) => (
                <Button
                  key={item.label}
                  href={item.href}
                  sx={{ 
                    my: 2, 
                    color: 'text.primary', 
                    display: 'block', 
                    mx: 1.5, 
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: '0.95rem',
                    '&:hover': {
                      color: '#1a73e8',
                      backgroundColor: 'transparent'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          ) : (
            /* Mobile menu */
            <Box sx={{ flexGrow: 0 }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                sx={{ 
                  color: '#1a73e8',
                  '&:hover': {
                    backgroundColor: 'rgba(26, 115, 232, 0.08)'
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
                PaperProps={{
                  elevation: 2,
                  sx: {
                    borderRadius: '8px',
                    minWidth: '180px',
                    mt: 1,
                    '& .MuiList-root': {
                      py: 1
                    }
                  }
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem 
                    key={item.label} 
                    onClick={handleClose}
                    sx={{
                      '&:hover': {
                        backgroundColor: 'rgba(26, 115, 232, 0.08)'
                      }
                    }}
                  >
                    <Typography 
                      textAlign="center" 
                      sx={{ 
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        fontSize: '0.95rem'
                      }}
                    >
                      <a href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                        {item.label}
                      </a>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;