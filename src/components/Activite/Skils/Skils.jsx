import { Box, Divider, Stack } from '@mui/material';
import { Item } from '../Item/Item';
import { nanoid } from 'nanoid';
import React from 'react';

export const Skils = ({ data, isMobile }) => {
  const itemStyle = {
    fontFamily: 'RedHatSemiBold',
    fontSize: '16px',
    lineHeight: 1.5,
    width: !isMobile ? '50%' : '100%',
    letterSpacing: 0.15,
    color: '#00000038',
  };
  return (
    <Stack
      direction="column"
      divider={isMobile ? null : <Divider orientation="horizontal" />}
    >
      {!isMobile && (
        <Stack
          direction={!isMobile ? 'row' : 'column'}
          justifyContent={'space-between'}
          sx={{ padding: '16px 24px' }}
        >
          <Box sx={itemStyle} component="p">
            Metier
          </Box>
          <Box sx={itemStyle} component="p">
            Spécialités
          </Box>
        </Stack>
      )}
      {data.skils.map((item, index) => (
        <React.Fragment key={nanoid()}>
          <Item color="#060506" data={item} isMobile={isMobile} />
          {isMobile && index === 0 && <Divider orientation="horizontal" />}
        </React.Fragment>
      ))}
    </Stack>
  );
};
