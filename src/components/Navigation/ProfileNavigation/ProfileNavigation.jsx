import { NavItemProfile, NestedNavItem } from '../Navigation.styled';
import { nanoid } from 'nanoid';

import { IconButton, Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const ProfileNavigation = ({
  listExpander,
  href,
  open,
  loadProfilePage,
  subPages,
  icone: Icone,
  isMobile,
}) => {
  return (
    <Stack padding={'8px'} key={nanoid()}>
      <NavItemProfile
        onClick={listExpander}
        to={href}
        open={open}
        loadmore={loadProfilePage.toString()}
      >
        <Stack
          direction={'row'}
          justifyContent={open ? 'space-between' : 'center'}
          alignItems={'center'}
          width={'100%'}
        >
          <Stack
            direction={'row'}
            gap={'8px'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Icone sx={{ fontSize: '38.5px' }} />
            {open && (
              <Stack>
                <Typography
                  variant="p"
                  key={nanoid()}
                  color={'#263238'}
                  fontSize={'14px'}
                  fontFamily={'RedHatSemiBold'}
                >
                  Jean-David Viala
                </Typography>
                {!isMobile && (
                  <Typography
                    variant="p"
                    key={nanoid()}
                    color={'#546E7A'}
                    fontSize={'12px'}
                    fontFamily={'RedHatSemiBold'}
                  >
                    The Digital Factory
                  </Typography>
                )}
              </Stack>
            )}
          </Stack>

          {open && (
            <IconButton sx={{}} onClick={listExpander}>
              {!loadProfilePage ? (
                <KeyboardArrowDownIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </IconButton>
          )}
        </Stack>
      </NavItemProfile>
      {loadProfilePage && (
        <Stack
          sx={{
            borderTop: '1px solid white',
            width: '100%',
            padding: '8px',
            borderRadius: '0 0 16px 16px',
            backgroundColor: '#F5F5F5',
            gap: '8px',
          }}
        >
          {subPages.map(({ text, subHref, icone: Icone }) => {
            return (
              <NestedNavItem
                to={`${href}/${subHref}`}
                key={nanoid()}
                open={open}
              >
                <Icone fontSize="small" />
                {open && <Typography variant="p">{text}</Typography>}
              </NestedNavItem>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};
