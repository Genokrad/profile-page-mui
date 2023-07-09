import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledSvg = styled.svg`
  width: 24px;
  height: 24px;
`;

export const NavItem = styled(NavLink)`
  font-family: 'RedHatText';
  border-radius: 8px;
  gap: 16px;
  display: flex;
  align-items: center;
  padding: 8px;
  min-height: 48px;

  color: #90a4ae;

  ${({ open }) =>
    !open &&
    `
    justify-content: center;

  `};

  &:hover {
    background-color: rgba(25, 118, 210, 0.05);
  }
  &.active {
    background-color: rgba(25, 118, 210, 0.08);
    color: #3779be;
    font-weight: 500;
    font-family: 'RedHatSemiBold';
  }
`;

export const NavItemProfile = styled(NavLink)`
  border-radius: ${({ loadmore }) =>
    loadmore === 'true' ? '16px 16px 0 0' : '16px'};
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px;
  color: #90a4ae;
  background-color: #f5f5f5;

  &:hover {
    background-color: rgba(25, 118, 210, 0.05);
  }

  &.active {
    background-color: rgba(25, 118, 210, 0.08);
    color: #3779be;
    fill: red;
  }

  ${({ open }) =>
    !open &&
    `
    justify-content: center;
  `};
`;

export const NavItemHard = styled(NavLink)`
  min-height: 48px;
  border-radius: 8px;
  gap: 8px;
  display: flex;
  align-items: center;
  padding: 8px;
  color: #90a4ae;
  font-family: 'RedHatText';

  line-height: 1.4;
  &:hover {
    background-color: rgba(25, 118, 210, 0.05);
  }

  &.active {
    background-color: rgba(25, 118, 210, 0.08);
    color: #3779be;

    font-weight: 500;
    font-family: 'RedHatSemiBold';
  }

  ${({ open }) =>
    !open &&
    `
    justify-content: center;
  `};
`;

export const ComplicatedNav = styled(NavLink)`
  border-radius: 8px;
  gap: 24px;
  min-height: 33px;
  display: flex;
  align-items: center;
  font-family: 'RedHatMedium';
  font-size: 11px;
  padding: 8px 16px;

  color: #546e7a;

  ${({ open }) =>
    !open &&
    `
    justify-content: center;
    color: #90A4AE
  `};

  &:hover {
    color: #3779be;
  }
  &.active {
    background-color: #1976d20a;
    color: #3779be;
    font-weight: 500;
    font-family: 'RedHatSemiBold';
  }
`;

export const NestedNavItem = styled(NavLink)`
  border-radius: 16px;
  gap: 16px;
  display: flex;
  align-items: center;
  font-family: RedHatMedium;
  font-size: 11px;

  color: #90a4ae;

  ${({ open }) =>
    !open &&
    `
    justify-content: center;

  `};

  &:hover {
    color: #3779be;
  }
  &.active {
    color: #3779be;
  }
`;
