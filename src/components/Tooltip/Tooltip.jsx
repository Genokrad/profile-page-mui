import Tooltip from '@mui/material/Tooltip';
import { useEffect, useRef } from 'react';
import ErrorIcon from '@mui/icons-material/Error';
import { Stack } from '@mui/material';
// import { IconButton } from '@mui/material';

export function AnchorElTooltips() {
  const positionRef = useRef({
    x: 0,
    y: 0,
  });
  const popperRef = useRef(null);
  const areaRef = useRef(null);

  useEffect(() => {
    // console.log('popperRef', areaRef);
  }, [popperRef]);

  const handleMouseMove = event => {
    positionRef.current = { x: event.clientX, y: event.clientY };

    if (popperRef.current != null) {
      popperRef.current.update();
    }
  };

  return (
    <Tooltip
      title="Définissez votre activité et vos spécialisations et recevez des offres d'emploi de la communauté Hiway qui correspondent mieux à votre profil"
      placement="top"
      arrow
      PopperProps={{
        popperRef,

        anchorEl: {
          getBoundingClientRect: () => {
            return new DOMRect(
              positionRef.current.x,
              areaRef.current.getBoundingClientRect().y,
              0,
              0
            );
          },
        },
      }}
    >
      {/* <IconButton
        ref={areaRef}
        onMouseMove={handleMouseMove}
        sx={{
          width: '20px',
          height: '20px',
          // borderRadius: '50%',
          // bgcolor: 'primary',
          // color: 'primary.contrastText',
          // p: 2,
        }}
      > */}
      <Stack
        sx={{
          borderRadius: '50%',
          width: '20px',
          height: '20px',
          '&:hover': { backgroundColor: 'rgba(25, 118, 210, 0.04)' },
        }}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <ErrorIcon
          ref={areaRef}
          onMouseMove={handleMouseMove}
          sx={{
            width: '24px',
            height: '24px',
            color: '#78909C',
            '&:hover': {
              color: '#3779BE',
            },
          }}
        />
      </Stack>

      {/* </IconButton> */}
      {/* ! */}
      {/* </Box> */}
    </Tooltip>
  );
}
