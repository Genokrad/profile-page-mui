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
        <MobileAppBar
          // sx={{ left: '-16px', top: '-16px' }}
          position={'absolute'}
          togler={togler}
          open={open}
        />
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

// import React, { useState } from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// import Divider from '@mui/material/Divider';
// import IconButton from '@mui/material/IconButton';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
// import ChevronRightIcon from '@mui/icons-material/ChevronRight';
// // import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import { List, Stack } from '@mui/material';
// import { Outlet } from 'react-router-dom';

// import logo from '../../images/hiway-logo.png';
// import { LeftBarImgContainer } from './Layout.styled';
// import sprite from '../../images/sprite.svg';
// import { NavItem, StyledSvg } from 'components/Navigation/Navigation.styled';

// const drawerWidth = 236;

// const navItems = [
//   { href: 'profile', text: 'Profile', icone: '#avatar' },
//   { href: 'non', text: 'Gestion des sociétés' },
//   { href: 'banque', text: 'Banque', icone: '#accountBalanceTwoTone' },
//   { href: 'dashboard', text: 'Dashboard', icone: '#insertChartTwoTone' },
//   {
//     href: 'actives',
//     text: 'Sociétés actives',
//     icone: '#businessCenterTwoTone',
//   },
//   { href: 'facturation', text: 'Facturation', icone: '#euroSymbolTwoTone' },
//   { href: 'gestion', text: 'Gestion', icone: '#receiptLongTwoTone' },
//   {
//     href: 'documents',
//     text: 'Mes documents',
//     icone: '#documentScannerTwoTone',
//   },
//   { href: 'non', text: 'Prestations de service', icone: '#eventTwoTone2' },
//   { href: 'cluster', text: 'Cluster', icone: '#groupsTwoTone' },
//   { href: 'formation', text: 'Formation', icone: '#schoolTwoTone' },
//   { href: 'patrimonial', text: 'Patrimonial', icone: '#eventTwoTone' },
// ];

// const openedMixin = theme => ({
//   width: drawerWidth,
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.enteringScreen,
//   }),
//   overflowX: 'hidden',
// });

// const closedMixin = theme => ({
//   transition: theme.transitions.create('width', {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   overflowX: 'hidden',
//   width: `calc(${theme.spacing(7)} + 1px)`,
//   [theme.breakpoints.up('sm')]: {
//     width: `calc(${theme.spacing(8)} + 1px)`,
//   },
// });

// const DrawerHeader = styled('div')(({ theme }) => ({
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(0, 1),
//   ...theme.mixins.toolbar,
// }));

// const StyledDrawer = styled(Drawer, {
//   shouldForwardProp: prop => prop !== 'open',
// })(({ theme, open }) => ({
//   width: drawerWidth,
//   flexShrink: 0,
//   whiteSpace: 'nowrap',
//   boxSizing: 'border-box',
//   ...(open && {
//     ...openedMixin(theme),
//     '& .MuiDrawer-paper': openedMixin(theme),
//   }),
//   ...(!open && {
//     ...closedMixin(theme),
//     '& .MuiDrawer-paper': closedMixin(theme),
//   }),
// }));

// export const Layout = () => {
//   const [open, setOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <StyledDrawer variant="permanent" open={open}>
//         <DrawerHeader>
//           <LeftBarImgContainer>
//             <img src={logo} alt="hiwayLogo" />
//           </LeftBarImgContainer>
//           {open ? (
//             <IconButton
//               onClick={handleDrawerClose}
//               sx={{
//                 backgroundColor: '#ECEFF1',
//                 borderRadius: '50%',
//               }}
//             >
//               <ChevronLeftIcon />
//             </IconButton>
//           ) : (
//             <IconButton
//               onClick={handleDrawerOpen}
//               sx={{
//                 backgroundColor: '#ECEFF1',
//                 borderRadius: '50%',
//               }}
//             >
//               <ChevronRightIcon />
//             </IconButton>
//           )}
//         </DrawerHeader>
//         <Divider />
//         <Stack>
//           {navItems.map(({ href, text, icone }) =>
//             href === 'non' ? (
//               <h2 key={icone + href}>{text.toUpperCase()}</h2>
//             ) : (
//               <NavItem
//                 styles={{ backgroundColor: 'black' }}
//                 to={href}
//                 key={text}
//               >
//                 <ListItemButton
//                   sx={{
//                     minHeight: 48,
//                     justifyContent: open ? 'initial' : 'center',
//                     px: 2.5,
//                   }}
//                 >
//                   <ListItemIcon
//                     sx={{
//                       minWidth: 0,
//                       mr: open ? 3 : 'auto',
//                       justifyContent: 'center',
//                     }}
//                   >
//                     <StyledSvg>
//                       <use href={sprite + icone} />
//                     </StyledSvg>
//                   </ListItemIcon>
//                   <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
//                 </ListItemButton>
//               </NavItem>
//             )
//           )}
//         </Stack>
//       </StyledDrawer>
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// /////////////

// import { Navigation } from 'components/Navigation/Navigation';
// import {
//   LeftBar,
//   LayoutContainer,
//   LeftBarImgContainer,
//   NavigationContainer,
// } from './Layout.styled';
// import logo from '../../images/hiway-logo.png';
// import { Outlet } from 'react-router-dom';
// import { IconButton, Stack } from '@mui/material';
// import { useState } from 'react';

// export const Layout = () => {
//   const [open, setOpen] = useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };
//   return (
//     <>
//       <Stack direction={'row'} sx={{ width: '100%' }}>
//         <Stack direction={'column'} sx={{ minWidth: '236px' }}>
//         <IconButton
//               onClick={handleDrawerClose}
//               sx={{
//                 backgroundColor: '#ECEFF1',
//                 borderRadius: '50%',
//               }}
//             >
//               <ChevronLeftIcon />
//             </IconButton>
//           <LeftBarImgContainer>
//             <img src={logo} alt="hiwayLogo" />
//           </LeftBarImgContainer>
//           <NavigationContainer>
//             <Navigation />
//           </NavigationContainer>
//         </Stack>
//         <Outlet />
//       </Stack>
//       {/* <LayoutContainer></LayoutContainer> */}
//     </>
//   );
// };
