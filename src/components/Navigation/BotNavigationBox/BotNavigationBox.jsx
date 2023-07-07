import { nanoid } from 'nanoid';
import { NavItem } from '../Navigation.styled';

export const BotNavigationBox = ({ items, open }) => {
  return items.map(({ href, icone: Icone, text }) => (
    <>
      <NavItem to={href} key={nanoid()} open={open}>
        {Icone && <Icone />}
        {open && (
          <p component={'p'} key={href}>
            {text}
          </p>
        )}
      </NavItem>
    </>
  ));
};
