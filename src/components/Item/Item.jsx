import { useTheme } from '@mui/material/styles';
const { Stack, Box } = require('@mui/material');

export const styles = {
  textData: {
    fontFamily: 'RedHatText',
    fontSize: '16px',
    lineHeight: 1.5,
    width: '50%',
    letterSpacing: 0.15,
    color: '#0B2333',
  },
};

export const itemStyle = {
  fontFamily: 'RedHatText',
  fontSize: '16px',
  lineHeight: 1.5,
  width: '50%',
  letterSpacing: 0.15,
  color: '#0B2333',
};

export const Item = ({ data, text, textPlug }) => {
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
      <Box sx={styles.textData} component="p">
        {data}
      </Box>
    </Stack>
  );
};
