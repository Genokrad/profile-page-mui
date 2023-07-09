import { Stack, Typography } from '@mui/material';

export const ErrorPage = () => {
  return (
    <>
      <Stack
        sx={{
          width: '100vw',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography component={'p'} sx={{ fontSize: '60px' }}>
          404
        </Typography>
      </Stack>
    </>
  );
};
