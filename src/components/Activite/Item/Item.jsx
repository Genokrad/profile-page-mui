import { Box, Stack } from '@mui/material';
import { nanoid } from 'nanoid';

export const Item = ({ color, data, isMobile }) => {
  const itemStyle = {
    fontFamily: 'RedHatSemiBold',
    fontSize: '16px',
    lineHeight: 1.5,
    width: !isMobile ? '50%' : '100%',
    letterSpacing: 0.15,
    color: color,
  };
  const pStyle = {
    fontFamily: 'RedHatText',
    fontSize: '16px',
    lineHeight: 1.5,
    letterSpacing: 0.15,
    color: color,
    // gap: '6px',
    // paddingLeft: '6px',
  };

  return (
    <Stack
      direction={!isMobile ? 'row' : 'column'}
      justifyContent={'space-between'}
      sx={{ padding: '16px 24px' }}
    >
      {data ? (
        <>
          <Box sx={itemStyle} component="p">
            {data.profession}
          </Box>
          <Stack
            sx={{ width: !isMobile ? '50%' : '100%' }}
            direction={'row'}
            justifyContent={'flex-start'}
            flexWrap={'wrap'}
            gap={'6px'}
          >
            {data?.ability?.map(item => (
              <Box key={nanoid()} sx={pStyle} component="p">
                {`${item}, `}
              </Box>
            ))}
          </Stack>
        </>
      ) : (
        <>
          {isMobile && (
            <Box sx={itemStyle} component="p">
              Metier
            </Box>
          )}
          {isMobile && (
            <Box sx={itemStyle} component="p">
              Spécialités
            </Box>
          )}
        </>
      )}
    </Stack>
  );
};
