import { nanoid } from 'nanoid';
import { NavItem } from '../Navigation.styled';

export const BotNavigationBox = ({ items, open }) => {
  return items.map(({ href, icone: Icone, text }) => (
    <NavItem key={nanoid()} to={href} open={open}>
      {Icone && <Icone />}
      {open && <p component={'p'}>{text}</p>}
    </NavItem>
  ));
};
