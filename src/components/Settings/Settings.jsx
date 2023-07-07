export const Settings = () => {
  return <div>Settings</div>;
};

// import { Profil } from 'components/Profil/Profil';
// import { Activite } from 'components/Activite/Activite';
// import { Contrat } from 'components/Contrat/Contrat';
// import { DonnesPersonnelles } from 'components/DonnesPersonnelles/DonnesPersonnelles';
// import { useState } from 'react';
// import { Alert, Snackbar } from '@mui/material';

// const styles = {
//   alertSucces: { backgroundColor: '#4CAF50', color: '#FFFFFF' },
//   alertError: { backgroundColor: '#E84C4C', color: '#FFFFFF' },
// };

// export const Settings = () => {
//   const [customer, setCustomer] = useState({
//     id: 'c1739ca9-9676-43e6-b08e-14e44e66a7f2',
//     lastName: 'Jean-David',
//     name: 'Viala',
//     email: 'jean-david.viala@gmail.com',
//     tel: '+33 892 68 06 71',
//     status: 'Actif',
//     skils: [
//       {
//         id: 0,
//         profession: 'Développeur',
//         ability: [
//           'JS',
//           'HTML/CSS',
//           'PHP',
//           'Java',
//           'React',
//           'SQL',
//           'React Native',
//           'Vue',
//           'Angular',
//         ],
//       },
//       {
//         id: 1,
//         profession: 'Lead Développeur',
//         ability: ['JS', 'HTML/CSS', 'PHP', 'Java', 'React'],
//       },
//     ],
//   });

//   const [alert, setAlert] = useState({
//     isOpen: false,
//     message: 'success',
//     error: false,
//   });

//   const alertClose = () => {
//     setAlert({
//       isOpen: false,
//       message: '',
//       error: false,
//     });
//   };

//   const alertOpen = alertObj => {
//     setAlert({
//       isOpen: true,
//       message: alertObj?.message,
//       error: alertObj?.error,
//     });
//   };

//   return (
//     <>
//       <DonnesPersonnelles
//         customer={customer}
//         setCustomer={setCustomer}
//         alertOpen={alertOpen}
//       />
//       <Activite
//         customer={customer}
//         setCustomer={setCustomer}
//         alertOpen={alertOpen}
//       />
//       <Contrat />
//       {alert?.isOpen && (
//         <Snackbar
//           open={alert.isOpen}
//           autoHideDuration={2000}
//           onClose={alertClose}
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
//         >
//           <Alert
//             onClose={alertClose}
//             icon={false}
//             // severity="success"
//             sx={!alert.error ? styles.alertSucces : styles.alertError}
//           >
//             {alert.message}
//           </Alert>
//         </Snackbar>
//       )}
//     </>
//   );
// };
