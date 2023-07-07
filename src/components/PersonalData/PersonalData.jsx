import { Item } from 'components/Item/Item';
import { ItemWithIcone } from 'components/ItemWithIcone/ItemWithIcone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { useEffect, useState } from 'react';

const { Stack, Divider } = require('@mui/material');

// export const sectionWraper = {
//   borderRadius: '16px',
//   backgroundColor: '#ffffff',
//   padding: '19px 0 20px 0',
// };

// export const buttonWraper = {
//   paddingTop: '16px',
//   borderTop: '1px solid rgba(0, 0, 0, 0.12)',
//   paddingRight: '24px',
// };

// export const itemStyle = {
//   fontFamily: 'RedHatText',
//   fontSize: '16px',
//   lineHeight: 1.5,
//   width: '50%',
//   letterSpacing: 0.15,
//   color: '#0B2333',
// };

// const styles = {
//   sectionWraper: {
//     borderRadius: '16px',
//     backgroundColor: '#ffffff',
//     padding: '19px 0 20px 0',
//   },
//   buttonWraper: {
//     paddingTop: '16px',
//     borderTop: '1px solid rgba(0, 0, 0, 0.12)',
//     paddingRight: '24px',
//   },

//   itemStyle: {
//     fontFamily: 'RedHatText',
//     fontSize: '16px',
//     lineHeight: 1.5,
//     width: '50%',
//     letterSpacing: 0.15,
//     color: '#0B2333',
//   },
// };

// const styleChenger = (isMobile, mark) => {
//   return { ...styles }[mark];
// };

export const PersonalData = ({ data, isMobile }) => {
  // const theme = useTheme();

  // let isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { lastName, name, email, tel, status } = data;

  const styleChenger = (isMobile, mark) => {
    return {
      textPlug: () => ({
        fontFamily: 'RedHatText',
        fontSize: '16px',
        lineHeight: 1.5,
        width: '50%',
        letterSpacing: 0.15,
        color: isMobile ? 'rgba(0, 0, 0, 0.38);' : 'secondary',
      }),
    }[mark];
  };

  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Item
        data={lastName}
        text="Prénom"
        textPlug={styleChenger(isMobile, 'textPlug')}
      />
      <Item
        data={name}
        text="Nom"
        textPlug={styleChenger(isMobile, 'textPlug')}
      />
      <Item
        data={email}
        text="Email"
        textPlug={styleChenger(isMobile, 'textPlug')}
      />
      <Item
        data={tel}
        text="Téléphone"
        textPlug={styleChenger(isMobile, 'textPlug')}
      />
      <ItemWithIcone
        data={status}
        text="Statut"
        Icone={CheckCircleIcon}
        textPlug={styleChenger(isMobile, 'textPlug')}
      />
    </Stack>
  );
};

// const [isMobile, setIsMobile] = useState(
//   useMediaQuery(theme.breakpoints.down('sm'))
// );

// useEffect(() => {
//   styleChenger(isMobile)

// },[isMobile])

// buttonWraper: {
//   paddingTop: '16px',
//   borderTop: '1px solid rgba(0, 0, 0, 0.12)',
//   paddingRight: '24px',
// },

// itemStyle: {
//   fontFamily: 'RedHatText',
//   fontSize: '16px',
//   lineHeight: 1.5,
//   width: '50%',
//   letterSpacing: 0.15,
//   color: '#0B2333',
// }}
