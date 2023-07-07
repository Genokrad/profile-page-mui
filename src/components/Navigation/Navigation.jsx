import { Divider, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { NavItem } from './Navigation.styled';
import { nanoid } from 'nanoid';
import { useState } from 'react';

import SettingsIcon from '@mui/icons-material/Settings';
import LockResetIcon from '@mui/icons-material/LockReset';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import EuroSymbolIcon from '@mui/icons-material/EuroSymbol';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import SchoolIcon from '@mui/icons-material/School';
import GroupsIcon from '@mui/icons-material/Groups';
import TodayIcon from '@mui/icons-material/Today';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';
import { ProfileNavigation } from './ProfileNavigation/ProfileNavigation';
import { Text } from './Text/Text';
import { ComplicatedNavigation } from './ComplicatedNavigation/ComplicatedNavigation';
import { TopNavigationBox } from './TopNavigationBox/TopNavigationBox';
import { BotNavigationBox } from './BotNavigationBox/BotNavigationBox';

const navItems = {
  profile: {
    href: 'profile',
    text: 'Profile',
    icone: AccountCircleIcon,
    subPages: [
      { subHref: 'settings', text: 'Réglages', icone: SettingsIcon },
      {
        subHref: 'change_password',
        text: 'Modification du mot de passe',
        icone: LockResetIcon,
      },
      { subHref: 'exit', text: 'Déconnexion', icone: PowerSettingsNewIcon },
    ],
  },
  topNavigation: [
    // { href: 'non', text: 'Gestion des sociétés', subPages: null },
    {
      href: 'banque',
      text: 'Banque',
      icone: AccountBalanceIcon,
      subPages: [
        { subHref: 'compte', text: 'Compte', icone: AllInboxIcon },
        {
          subHref: 'virements',
          text: 'Virements',
          icone: SwapVertIcon,
        },
        { subHref: 'cartes', text: 'Cartes', icone: CreditCardIcon },
      ],
    },
    {
      href: 'dashboard',
      text: 'Dashboard',
      icone: InsertChartIcon,
      subPages: null,
    },
    {
      href: 'actives',
      text: 'Sociétés actives',
      icone: BusinessCenterIcon,
      subPages: null,
    },
    {
      href: 'facturation',
      text: 'Facturation',
      icone: EuroSymbolIcon,
      subPages: null,
    },
    {
      href: 'gestion',
      text: 'Gestion',
      icone: ReceiptLongIcon,
      subPages: [
        {
          subHref: 'expense',
          text: 'Notes de frais',
          icone: AccountBalanceWalletIcon,
        },
        {
          subHref: 'management',
          text: 'Gestion IK',
          icone: DirectionsCarFilledIcon,
        },
      ],
    },
    {
      href: 'documents',
      text: 'Mes documents',
      icone: DocumentScannerIcon,
      subPages: null,
    },
  ],
  botNavigation: [
    // {
    //   href: 'non',
    //   text: 'Prestations de service',
    //   icone: '#eventTwoTone2',
    //   subPages: null,
    // },
    { href: 'cluster', text: 'Cluster', icone: GroupsIcon, subPages: null },

    {
      href: 'formation',
      text: 'Formation',
      icone: SchoolIcon,
      subPages: null,
    },
    {
      href: 'patrimonial',
      text: 'Patrimonial',
      icone: TodayIcon,
      subPages: null,
    },
  ],
};

export const Navigation = ({ open }) => {
  const theme = useTheme();

  let isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [loadProfilePage, setloadProfilePage] = useState(false);
  const [loadSubPage, setLoadSubPage] = useState({
    banque: false,
    gestion: false,
  });

  const profilListExpander = () => {
    setloadProfilePage(!loadProfilePage);
  };

  const ComplicatedListExpander = mark => {
    let some = loadSubPage;

    some = {
      ...some,
      [mark]: !some[mark],
    };

    setLoadSubPage(some);

    console.log(loadSubPage);
  };

  return (
    <>
      <ProfileNavigation
        key={nanoid()}
        listExpander={profilListExpander}
        href={navItems.profile.href}
        open={open}
        loadProfilePage={loadProfilePage}
        subPages={navItems.profile.subPages}
        icone={navItems.profile.icone}
        isMobile={isMobile}
      />
      {!open && <Divider />}
      <Stack sx={{ padding: open ? '16px 12px' : '16px 6px' }}>
        {open && <Text text={'Gestion des sociétés'} />}
        <TopNavigationBox
          open={open}
          ComplicatedListExpander={ComplicatedListExpander}
          loadSubPage={loadSubPage}
          items={navItems.topNavigation}
        />
      </Stack>
      {!open && <Divider />}
      <Stack sx={{ padding: open ? '16px 12px' : '16px 6px' }}>
        {open && <Text text={'Prestations de service'} />}
        <BotNavigationBox open={open} items={navItems.botNavigation} />
      </Stack>
    </>
  );
};

// const navItems = [
//   {
//     href: 'profile',
//     text: 'Profile',
//     icone: AccountCircleIcon,
//     subPages: [
//       { subHref: 'settings', text: 'Réglages', icone: SettingsIcon },
//       {
//         subHref: 'change_password',
//         text: 'Modification du mot de passe',
//         icone: LockResetIcon,
//       },
//       { subHref: 'exit', text: 'Déconnexion', icone: PowerSettingsNewIcon },
//     ],
//   },
//   { href: 'non', text: 'Gestion des sociétés', subPages: null },
//   {
//     href: 'banque',
//     text: 'Banque',
//     icone: AccountBalanceIcon,
//     subPages: [
//       { subHref: 'compte', text: 'Compte', icone: AllInboxIcon },
//       {
//         subHref: 'virements',
//         text: 'Virements',
//         icone: SwapVertIcon,
//       },
//       { subHref: 'cartes', text: 'Cartes', icone: CreditCardIcon },
//     ],
//   },
//   {
//     href: 'dashboard',
//     text: 'Dashboard',
//     icone: InsertChartIcon,
//     subPages: null,
//   },
//   {
//     href: 'actives',
//     text: 'Sociétés actives',
//     icone: BusinessCenterIcon,
//     subPages: null,
//   },
//   {
//     href: 'facturation',
//     text: 'Facturation',
//     icone: EuroSymbolIcon,
//     subPages: null,
//   },
//   {
//     href: 'gestion',
//     text: 'Gestion',
//     icone: ReceiptLongIcon,
//     subPages: [
//       {
//         subHref: 'expense',
//         text: 'Notes de frais',
//         icone: AccountBalanceWalletIcon,
//       },
//       {
//         subHref: 'management',
//         text: 'Gestion IK',
//         icone: DirectionsCarFilledIcon,
//       },
//     ],
//   },
//   {
//     href: 'documents',
//     text: 'Mes documents',
//     icone: DocumentScannerIcon,
//     subPages: null,
//   },
//   {
//     href: 'non',
//     text: 'Prestations de service',
//     icone: '#eventTwoTone2',
//     subPages: null,
//   },
//   { href: 'cluster', text: 'Cluster', icone: GroupsIcon, subPages: null },

//   {
//     href: 'formation',
//     text: 'Formation',
//     icone: SchoolIcon,
//     subPages: null,
//   },
//   {
//     href: 'patrimonial',
//     text: 'Patrimonial',
//     icone: TodayIcon,
//     subPages: null,
//   },
// ];

// export const Navigation = ({ open }) => {
//   const [loadProfilePage, setloadProfilePage] = useState(false);
//   const [loadSubPage, setLoadSubPage] = useState({
//     banque: false,
//     gestion: false,
//   });

//   const profilListExpander = () => {
//     setloadProfilePage(!loadProfilePage);
//   };

//   const ComplicatedListExpander = mark => {
//     let some = loadSubPage;

//     some = {
//       ...some,
//       [mark]: !some[mark],
//     };

//     setLoadSubPage(some);

//     console.log(loadSubPage);
//   };

//   return (
//     <>
//       {navItems.map(({ text, href, icone: Icone, subPages }) => {
//         if (href === 'non') {
//           if (open === false) {
//             return null;
//           }
//           return <Text text={text} />;
//         }
//         if (subPages && href === 'profile') {
//           return (
//             <ProfileNavigation
//               key={nanoid()}
//               listExpander={profilListExpander}
//               href={href}
//               open={open}
//               loadProfilePage={loadProfilePage}
//               subPages={subPages}
//               icone={Icone}
//             />
//           );
//         } else if (subPages && href !== 'profile') {
//           return (
//             <Stack sx={{ justifyContent: 'center' }}>
//               <ComplicatedNavigation
//                 key={nanoid()}
//                 listExpander={ComplicatedListExpander}
//                 href={href}
//                 open={open}
//                 loadSubPage={loadSubPage}
//                 subPages={subPages}
//                 icone={Icone}
//                 text={text}
//               />
//               {!open && loadSubPage[href] && (
//                 <Divider
//                   orientation="horizontal"
//                   flexItem
//                   sx={{ marginLeft: '21px', width: '32px' }}
//                 />
//               )}
//             </Stack>
//           );
//         }
//         return (
//           <NavItem to={href} key={nanoid()} open={open}>
//             <Icone />
//             {open && (
//               <p component={'p'} key={href}>
//                 {text}
//               </p>
//             )}
//           </NavItem>
//         );
//       })}
//     </>
//   );
// };
