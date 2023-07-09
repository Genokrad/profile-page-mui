import { Item } from 'components/Item/Item';
import { ItemWithIcone } from 'components/ItemWithIcone/ItemWithIcone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const { Stack, Divider } = require('@mui/material');

export const PersonalData = ({ data, isMobile }) => {
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
