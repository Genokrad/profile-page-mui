import { Stack, Typography } from '@mui/material';
import { nanoid } from 'nanoid';

export const Text = ({ text }) => {
  return (
    <Stack padding={' 0 8px'}>
      <Typography
        variant="p"
        key={nanoid()}
        sx={{
          fontFamily: 'RedHatMedium',
          color: '#607D8B',
          fontSize: '12px',
          lineHeight: '1.6',
          letterSpacing: 1.2,
        }}
      >
        {text.toUpperCase()}
      </Typography>
    </Stack>
  );
};
