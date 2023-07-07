import { useTheme } from '@mui/material/styles';
import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import { DonnesPersonnelles } from 'components/DonnesPersonnelles/DonnesPersonnelles';
import { Activite } from 'components/Activite/Activite';
import { Contrat } from 'components/Contrat/Contrat';
import {
  Alert,
  Snackbar,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';

const styles = {
  alertSucces: { backgroundColor: '#4CAF50', color: '#FFFFFF' },
  alertError: { backgroundColor: '#E84C4C', color: '#FFFFFF' },
};

export const Profil = () => {
  const [customer, setCustomer] = useState({
    id: 'c1739ca9-9676-43e6-b08e-14e44e66a7f2',
    lastName: 'Jean-David',
    name: 'Viala',
    email: 'jean-david.viala@gmail.com',
    tel: '+33 892 68 06 71',
    status: 'Actif',
    skils: [
      {
        id: 0,
        profession: 'Développeur',
        ability: [
          'JS',
          'HTML/CSS',
          'PHP',
          'Java',
          'React',
          'SQL',
          'React Native',
          'Vue',
          'Angular',
        ],
      },
      {
        id: 1,
        profession: 'Lead Développeur',
        ability: ['JS', 'HTML/CSS', 'PHP', 'Java', 'React'],
      },
    ],
  });

  const [alert, setAlert] = useState({
    isOpen: false,
    message: 'success',
    error: false,
  });

  const theme = useTheme();

  let isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const alertClose = () => {
    setAlert({
      isOpen: false,
      message: '',
      error: false,
    });
  };

  const alertOpen = alertObj => {
    setAlert({
      isOpen: true,
      message: alertObj?.message,
      error: alertObj?.error,
    });
  };

  return (
    <Stack
      sx={{
        gap: '16px',
        padding: '32px 24px',
        backgroundColor: '#f1f4f6',
        width: '100%',
        minHeight: '100vh',
      }}
    >
      <Stack>
        <Typography
          component={'h2'}
          sx={{
            fontFamily: 'RedHatBold',
            fontSize: '34px',
            lineHeight: 1.17,
            letterSpacing: '-0.2px',
            color: '#060506',
          }}
        >
          Profil
        </Typography>
        <Stack direction={!isMobile ? 'row' : 'column'}>
          <Typography
            color={'rgba(0, 0, 0, 0.38)'}
            component={'p'}
            fontFamily={'RedHatText'}
          >{`Mon identifiant :`}</Typography>

          <Typography fontFamily={'RedHatText'}>{customer.id}</Typography>
        </Stack>
      </Stack>
      <DonnesPersonnelles
        customer={customer}
        setCustomer={setCustomer}
        alertOpen={alertOpen}
        isMobile={isMobile}
      />
      <Activite
        customer={customer}
        setCustomer={setCustomer}
        alertOpen={alertOpen}
        isMobile={isMobile}
      />

      <Contrat isMobile={isMobile} />
      {alert?.isOpen && (
        <Snackbar
          open={alert.isOpen}
          autoHideDuration={2000}
          onClose={alertClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        >
          <Alert
            onClose={alertClose}
            icon={false}
            // severity="success"
            sx={!alert.error ? styles.alertSucces : styles.alertError}
          >
            {alert.message}
          </Alert>
        </Snackbar>
      )}
      <Outlet />
    </Stack>
  );
};

// position: 'absolute', bottom: 0, right: 0

// const [customer, setCustomer] = useState({
//   id: 'c1739ca9-9676-43e6-b08e-14e44e66a7f2',
//   lastName: 'Jean-David',
//   name: 'Viala',
//   email: 'jean-david.viala@gmail.com',
//   tel: '+33 892 68 06 71',
//   status: 'Actif',
//   skils: [
//     {
//       id: 0,
//       profession: 'Développeur',
//       ability: [],
//     },
//   ],
// });
