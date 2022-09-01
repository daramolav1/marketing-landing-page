import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  height: 80px;
  margin-top: -80px;
  background-color: #000;
  font-size: 1rem;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1100px;
  width: 100%;
  height: 80px;
  padding: 0 24px;
  z-index: 1;
`;

export const NavLogo = styled(LinkR)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 24px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;
    transform: translate(-100%, 60%);
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: -22px;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #01bf71;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border: none;
  border-radius: 50px;
  padding: 10px 22px;
  outline: none;
  background-color: #01bf71;
  color: #010606;
  white-space: nowrap;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #fff;
    color: #010606;
    transition: all 0.2s ease-in-out;
  }
`;
