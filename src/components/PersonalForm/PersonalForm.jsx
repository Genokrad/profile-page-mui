import { Divider, Stack } from '@mui/material';

import { Input } from 'components/Input/Input';

export const itemStyle = {
  fontFamily: 'RedHatText',
  fontSize: '16px',
  lineHeight: 1.5,
  width: '50%',
  letterSpacing: 0.15,
  color: '#0B2333',
};

export const PersonalForm = ({ data, dataChanger }) => {
  return (
    <Stack
      direction="column"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Input
        itemStyle={itemStyle}
        data={data.lastName}
        text="Prénom"
        name="lastName"
        change={dataChanger}
      />
      <Input
        itemStyle={itemStyle}
        data={data.name}
        text="Nom"
        name="name"
        change={dataChanger}
      />
      <Input
        itemStyle={itemStyle}
        data={data.email}
        text="Email"
        name="email"
        change={dataChanger}
        fieldType="email"
      />
      <Input
        itemStyle={itemStyle}
        data={data.tel}
        text="Téléphone"
        name="tel"
        change={dataChanger}
      />
    </Stack>
  );
};
