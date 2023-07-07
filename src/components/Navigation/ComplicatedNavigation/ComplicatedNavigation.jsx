import { ComplicatedNav, NavItemHard } from '../Navigation.styled';
import { nanoid } from 'nanoid';

import { IconButton, Stack, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export const ComplicatedNavigation = ({
  listExpander,
  href,
  open,
  loadSubPage,
  subPages,
  icone: Icone,
  text,
}) => {
  return (
    <Stack key={nanoid()}>
      <NavItemHard
        onClick={() => listExpander(href)}
        to={href}
        // key={nanoid()}
        open={open}
        loadmore={loadSubPage.toString()}
      >
        <Stack
          direction={'row'}
          // gap={'8px'}
          justifyContent={open ? 'space-between' : 'center'}
          alignItems={'center'}
          width={'100%'}
        >
          <Stack
            direction={'row'}
            gap={'16px'}
            alignItems={'center'}
            justifyContent={'center'}
          >
            <Icone sx={{}} />
            {open && (
              <Typography
                variant="p"
                key={nanoid()}
                // color={'#546E7A'}
                // fontSize={'14px'}
                // fontFamily={'RedHatSemiBold'}
              >
                {text}
              </Typography>
            )}
          </Stack>

          {open && (
            <IconButton sx={{}} onClick={() => listExpander(href)}>
              {!loadSubPage[href] ? (
                <KeyboardArrowDownIcon />
              ) : (
                <ExpandLessIcon />
              )}
            </IconButton>
          )}
        </Stack>
      </NavItemHard>
      {loadSubPage[href] && (
        <Stack
          sx={{
            borderTop: '1px solid white',
            width: '100%',

            borderRadius: '0 0 16px 16px',
            // gap: '8px',
          }}
        >
          {subPages.map(({ text, subHref, icone: Icone }) => {
            return (
              <ComplicatedNav
                to={`${href}/${subHref}`}
                key={nanoid()}
                open={open}
              >
                {!open ? (
                  <Icone fontSize="small" />
                ) : (
                  <Stack
                    sx={{
                      marginLeft: '8px',
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: '#90A4AE',
                    }}
                  ></Stack>
                )}

                {open && <Typography variant="p">{text}</Typography>}
              </ComplicatedNav>
            );
          })}
        </Stack>
      )}
    </Stack>
  );
};
