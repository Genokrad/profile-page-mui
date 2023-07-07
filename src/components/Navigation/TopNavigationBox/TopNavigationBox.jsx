import { Divider, Stack } from '@mui/material';
import { ComplicatedNavigation } from '../ComplicatedNavigation/ComplicatedNavigation';
import { nanoid } from 'nanoid';
import { NavItem } from '../Navigation.styled';

// : { icene: Icone, href, text }

export const TopNavigationBox = ({
  open,
  ComplicatedListExpander,
  loadSubPage,
  items,
}) => {
  // console.log(item);

  // const { icone: Icone, href, text } = item;

  return items.map(({ icone: Icone, href, text, subPages }) => {
    return (
      <>
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
      </>
    );
  });

  // <>

  //{
  /* {item.subPages && (
        <Stack sx={{ justifyContent: 'center' }}>
          <ComplicatedNavigation
            key={nanoid()}
            listExpander={ComplicatedListExpander}
            href={item.href}
            open={open}
            loadSubPage={loadSubPage}
            subPages={item.subPages}
            icone={item.icone}
            text={item.text}
          />
          {!open && item.loadSubPage[item.href] && (
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ marginLeft: '21px', width: '32px' }}
            />
          )}
        </Stack>
      )} */
  // }
  // </>
  // );
};
