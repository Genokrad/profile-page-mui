import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import CloseIcon from '@mui/icons-material/Close';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {
  LeftBarImgContainer,
  NavigationContainer,
} from 'components/Layout/Layout.styled';
import logo from '../../images/mini-logo.svg';
import { Navigation } from 'components/Navigation/Navigation';
import PersonIcon from '@mui/icons-material/Person';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Suspense, useEffect } from 'react';

import { useNavigate } from 'react-router';

export const MobileAppBar = ({ togler, open }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/profile');
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      togler();
    }
  };

  return (
    <>
      <header>
        <Box sx={{ height: '100%' }}>
          <AppBar
            position="static"
            sx={{
              backgroundColor: '#173244',
              padding: '16px',
            }}
          >
            <Toolbar
              sx={{ justifyContent: 'space-between', padding: 0, minHeight: 0 }}
            >
              <Stack>
                <IconButton
                  onClick={() => togler()}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ padding: '0 10px' }}
                >
                  <MenuIcon sx={{ fontSize: 32 }} />
                </IconButton>
              </Stack>

              <LeftBarImgContainer>
                <img style={{ height: '37px' }} src={logo} alt="hiwayLogo" />
                <span
                  style={{
                    color: 'white',
                    fontSize: 36,
                    marginLeft: '3px',
                  }}
                >
                  {' '}
                  -ASIN
                </span>
              </LeftBarImgContainer>
              <Stack>
                <IconButton
                  // onClick={() => togler()}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ padding: 0 }}
                  onClick={handleButtonClick}
                >
                  <PersonIcon sx={{ fontSize: 32 }} />
                </IconButton>
              </Stack>
            </Toolbar>
            {open && (
              <Stack
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  backgroundColor: '#F1F4F6B2',
                  width: '100vw',
                  height: '100vh',
                  zIndex: 1,
                }}
                onClick={handleBackdropClick}
              >
                <Stack
                  sx={{
                    backgroundColor: '#fff',
                    width: '311px',
                    height: '100vh',
                  }}
                >
                  <Stack
                    direction={'row'}
                    sx={{
                      backgroundColor: '#173244',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '16px',
                    }}
                  >
                    <Stack
                      sx={{
                        height: '37px',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <img
                        style={{ height: '37px' }}
                        src={logo}
                        alt="hiwayLogo"
                      />
                      <span
                        style={{
                          color: 'white',
                          fontSize: 36,
                          marginLeft: '3px',
                        }}
                      >
                        {' '}
                        -ASIN
                      </span>
                    </Stack>
                    <IconButton
                      onClick={() => togler()}
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{
                        backgroundColor: '#173244',
                        padding: 0,
                      }}
                    >
                      <CloseIcon sx={{ fontSize: 32 }} />
                    </IconButton>
                  </Stack>
                  <NavigationContainer>
                    <Navigation open={open} />
                  </NavigationContainer>
                </Stack>
              </Stack>
            )}
          </AppBar>
        </Box>
      </header>
      <main style={{ width: '100%' }}>
        <Suspense fallback={<div>Loading</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
