import { Divider, Stack } from '@mui/material';
import { ComplicatedNavigation } from '../ComplicatedNavigation/ComplicatedNavigation';
import { nanoid } from 'nanoid';
import { NavItem } from '../Navigation.styled';
import React from 'react';

export const TopNavigationBox = ({
  open,
  ComplicatedListExpander,
  loadSubPage,
  items,
}) => {
  return items.map(({ icone: Icone, href, text, subPages }) => {
    return (
      <React.Fragment key={nanoid()}>
        {subPages ? (
          <Stack sx={{ justifyContent: 'center' }}>
            <ComplicatedNavigation
              key={nanoid()}
              listExpander={ComplicatedListExpander}
              href={href}
              open={open}
              loadSubPage={loadSubPage}
              subPages={subPages}
              icone={Icone}
              text={text}
            />
            {!open && loadSubPage[href] && (
              <Divider
                key={nanoid()}
                orientation="horizontal"
                flexItem
                sx={{ marginLeft: '21px', width: '32px' }}
              />
            )}
          </Stack>
        ) : (
          <NavItem to={href} key={nanoid()} open={open}>
            {Icone && <Icone />}
            {open && (
              <p component={'p'} key={href}>
                {text}
              </p>
            )}
          </NavItem>
        )}
      </React.Fragment>
    );
  });
};
