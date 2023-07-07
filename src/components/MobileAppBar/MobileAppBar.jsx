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
import logo from '../../images/hiway-logo.png';
import { Navigation } from 'components/Navigation/Navigation';
import PersonIcon from '@mui/icons-material/Person';
import { Outlet } from 'react-router-dom';
import { Stack } from '@mui/material';
import { useEffect } from 'react';

export const MobileAppBar = ({ togler, open }) => {
  useEffect(() => {
    if (open) {
      // Блокируем прокрутку при открытии компонента
      document.body.style.overflow = 'hidden';
    } else {
      // Восстанавливаем прокрутку при закрытии компонента
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
              </LeftBarImgContainer>
              <Stack>
                <IconButton
                  // onClick={() => togler()}
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ padding: 0 }}
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
                    <Stack sx={{ height: '37px' }}>
                      <img
                        style={{ height: '37px' }}
                        src={logo}
                        alt="hiwayLogo"
                      />
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
      <Outlet />
    </>
  );
};
