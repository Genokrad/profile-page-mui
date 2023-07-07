import { Typography } from '@mui/material';

export const Title = ({ text, padding }) => {
  return (
    <Typography
      sx={{
        fontFamily: 'RedHatBold',
        fontWeight: 600,
        fontSize: '21px',
        padding: padding ? '0 24px 16px 24px' : '0 4px 0 24px',
      }}
      variant="h3"
    >
      {text}
    </Typography>
  );
};
