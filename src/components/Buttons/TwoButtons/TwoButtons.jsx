import { Button, Stack } from '@mui/material';

export const TwoButtons = ({ toggler, styleChenger, isMobile }) => {
  return (
    <Stack
      sx={styleChenger(isMobile, 'buttonWraper')}
      spacing={2}
      direction="row"
      justifyContent="flex-end"
    >
      <Button
        onClick={toggler}
        sx={{
          borderRadius: '12px',
          backgroundColor: '#ECEFF1',
          padding: '15px 23px',
          color: '#060506',
        }}
        size="large"
        variant="contained"
        color="primary"
      >
        Annuler
      </Button>

      <Button
        sx={{
          borderRadius: '12px',
          backgroundColor: '#E84C4C',
          padding: '15px 23px',
        }}
        size="large"
        type="submit"
        variant="contained"
        color="primary"
      >
        Appliquer
      </Button>
    </Stack>
  );
};
