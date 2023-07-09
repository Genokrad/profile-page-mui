import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import CreateIcon from '@mui/icons-material/Create';
import { Divider, Stack } from '@mui/material';

import Button from '@mui/material/Button';
import { Title } from 'components/Title/Title';
import { Skils } from './Skils/Skils';
import { useState } from 'react';
import { SkilsActive } from './SkilsActive/SkilsActive';
import { AnchorElTooltips } from 'components/Tooltip/Tooltip';

export const sectionWraper = {
  borderRadius: '16px',
  backgroundColor: '#ffffff',
  padding: '19px 0 20px 0',
};

export const Activite = ({ customer, setCustomer, alertOpen, isMobile }) => {
  const [isActive, setIsActive] = useState(false);

  const editActivity = () => {
    console.log('editActivity');
  };

  const toggler = () => {
    setIsActive(!isActive);
  };

  return (
    <Stack sx={sectionWraper}>
      <Stack
        direction="row"
        alignItems="center"
        sx={{ paddingBottom: '11px', marginBottom: '8px', gap: '7px' }}
      >
        <Title text="Activité" padding={false} />
        <AnchorElTooltips />
      </Stack>
      {!isActive && <Skils data={customer} isMobile={isMobile} />}
      {isActive && (
        <SkilsActive
          alertOpen={alertOpen}
          customer={customer}
          setCustomer={setCustomer}
          toggler={toggler}
          isMobile={isMobile}
        />
      )}
      {!isActive && <Divider orientation="horizontal" flexItem />}
      {!isActive && (
        <Stack
          sx={{ padding: '16px 24px 0' }}
          spacing={2}
          direction="row"
          justifyContent="space-between"
        >
          <Button
            onClick={editActivity}
            variant="text"
            startIcon={<MarkEmailUnreadIcon />}
            sx={{
              borderRadius: '6px',
              '&:hover': {
                backgroundColor: 'rgba(25, 118, 210, 0.04);', // Replace with the desired background color
              },
            }}
          >
            {!isMobile ? 'Gérer les notifications' : 'Notifications'}
          </Button>
          <Button
            onClick={toggler}
            variant="contained"
            sx={{
              borderRadius: '6px', // Adjust the border radius value as needed
              '& .MuiButton-startIcon': {
                marginRight: '10px', // Adjust the margin as needed
              },
            }}
            startIcon={<CreateIcon />}
          >
            Editer
          </Button>
        </Stack>
      )}
    </Stack>
  );
};
