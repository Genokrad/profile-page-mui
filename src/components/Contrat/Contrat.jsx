import { Box, Divider, IconButton, Stack, Typography } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import { MyIcon } from 'components/MyIcone/MyIcone';
// import { ReactComponent as IconPdf } from './';
// import Button from '@mui/material/Button';

export const Contrat = ({ isMobile }) => {
  return (
    <Stack
      sx={{
        borderRadius: '16px',
        backgroundColor: '#ffffff',
        padding: '19px 0 20px 0',
        // padding: '19px 24px 20px 24px',
      }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      <Stack
        sx={{ padding: '0 24px 16px 24px' }}
        spacing={'35px'}
        direction="column"
      >
        <Typography
          sx={{
            fontFamily: 'RedHatBold',
            fontWeight: 600,
            fontSize: '21px',
          }}
          variant="h3"
        >
          Contrat
        </Typography>
        <Stack
          sx={{ marginTop: '16px' }}
          direction={!isMobile ? 'row' : 'column'}
          justifyContent={'space-between'}
        >
          <Box
            sx={{
              fontFamily: 'RedHatText',
              fontSize: '16px',
              lineHeight: 1.6,
              width: !isMobile ? '50%' : '100%',
            }}
            color={isMobile ? 'rgba(0, 0, 0, 0.38)' : ''}
            component="p"
          >
            Contrat Hiway
          </Box>
          <Stack
            sx={{
              width: !isMobile ? '50%' : '100%',
            }}
            direction="row"
            alignItems={'center'}
            spacing={'4px'}
          >
            <MyIcon symbol="pdf" />

            <Box
              sx={{
                fontFamily: 'RedHatText',
                fontSize: '16px',
                lineHeight: 1.6,
              }}
              component="p"
            >
              Contrat Hiway
            </Box>
            <IconButton
              sx={{
                backgroundColor: '#ECEFF1',
                borderRadius: '6px',
              }}
              size="small"
            >
              <LaunchIcon fontSize="small" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        sx={{ marginTop: '16px', padding: '0 24px 16px 24px' }}
        direction={!isMobile ? 'row' : 'column'}
        justifyContent={'space-between'}
      >
        <Box
          sx={{
            fontFamily: 'RedHatText',
            fontSize: '16px',
            lineHeight: 1.6,
            width: !isMobile ? '50%' : '100%',
          }}
          color={isMobile ? 'rgba(0, 0, 0, 0.38)' : ''}
          component="p"
        >
          Date de signature
        </Box>
        <Box
          sx={{
            fontFamily: 'RedHatText',
            fontSize: '16px',
            lineHeight: 1.6,
            width: !isMobile ? '50%' : '100%',
          }}
          component="p"
        >
          27/06/2022
        </Box>
      </Stack>
    </Stack>
  );
};
