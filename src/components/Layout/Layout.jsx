import { useTheme } from '@mui/material/styles';
import { Navigation } from 'components/Navigation/Navigation';
import { NavigationContainer } from './Layout.styled';
import logo from '../../images/hiway-logo.png';
import miniLogo from '../../images/mini-logo.png';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Outlet } from 'react-router-dom';
import { IconButton, Stack, useMediaQuery } from '@mui/material';
import { Suspense, useState } from 'react';
import { MobileAppBar } from 'components/MobileAppBar/MobileAppBar';

export const Layout = () => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  let isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const togler = () => {
    setOpen(!open);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
    styleChanger(open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    styleChanger(open);
  };

  const styleChanger = open => {};
  return (
    <>
      {isMobile && (
        <MobileAppBar position={'absolute'} togler={togler} open={open} />
      )}
      {!isMobile && (
        <Stack direction={'row'} sx={{ width: '100%' }}>
          <header>
            <Stack
              direction={'column'}
              sx={{
                minWidth: open ? '236px' : '',
                maxWidth: '80px',
                position: 'relative',
              }}
            >
              {open && (
                <IconButton
                  onClick={handleDrawerClose}
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    position: 'absolute',
                    right: '-12px',
                    top: '28px',
                    boxShadow: '1px 1px 7px #546E7A',
                    '&:hover': {
                      color: '#FFFFFF',
                      backgroundColor: '#546E7A',
                    },
                  }}
                >
                  <ChevronLeftIcon />
                </IconButton>
              )}
              {!open && (
                <IconButton
                  onClick={handleDrawerOpen}
                  sx={{
                    backgroundColor: '#ffffff',
                    borderRadius: '50%',
                    width: '24px',
                    height: '24px',
                    position: 'absolute',
                    right: '-12px',
                    top: '28px',
                    boxShadow: '1px 1px 7px #546E7A',
                    '&:hover': {
                      color: '#FFFFFF',
                      backgroundColor: '#546E7A',
                    },
                  }}
                >
                  <ChevronRightIcon />
                </IconButton>
              )}
              {open && (
                <Stack
                  sx={{
                    padding: '16px',
                    width: '100%',
                    height: '80px',
                    backgroundColor: '#173244',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img style={{ height: '46px' }} src={logo} alt="hiwayLogo" />
                </Stack>
              )}
              {!open && (
                <Stack
                  sx={{
                    padding: '16px',
                    width: '100%',
                    height: '80px',
                    backgroundColor: '#173244',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={miniLogo} alt="hiwayLogo" />
                </Stack>
              )}
              <NavigationContainer>
                <Navigation open={open} />
              </NavigationContainer>
            </Stack>
          </header>
          <main style={{ width: '100%' }}>
            <Suspense fallback={<div>Loading</div>}>
              <Outlet />
            </Suspense>
          </main>
        </Stack>
      )}
    </>
  );
};
