import { useTheme } from '@mui/material/styles';
import { Box, IconButton, Stack } from '@mui/material';

// import Input from '@mui/material/Input';
// import { useEffect, useState } from 'react';

export const ItemWithIcone = ({ text, data, textPlug, Icone }) => {
  const theme = useTheme();

  return (
    <Stack
      direction={'row'}
      justifyContent={'space-between'}
      sx={{
        margin: '16px 0',
        padding: '0 24px',
        [theme.breakpoints.down('sm')]: {
          flexDirection: 'column',
        },
      }}
    >
      <Box sx={textPlug} component="p">
        {text}
      </Box>
      <Stack
        sx={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '50%',
        }}
      >
        <IconButton size="small">
          <Icone fontSize="small" sx={{ color: '#4CAF50' }} />
        </IconButton>

        <Box sx={{}} component="p">
          {data}
        </Box>
      </Stack>
    </Stack>
  );
};
