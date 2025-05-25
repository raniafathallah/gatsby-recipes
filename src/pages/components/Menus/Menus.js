import React, { useState } from "react";
import styled from "styled-components";

// Styled-components for the menu
const MenuContainer = styled.nav`
  width: 100%;
  background: #222;
  padding: 0.5rem 1rem;
  position: relative;
`;

const Logo = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: bold;
`;

const Hamburger = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  margin-left: auto;
  z-index: 2;

  span {
    height: 3px;
    width: 25px;
    background: #fff;
    margin: 4px 0;
    border-radius: 2px;
    display: block;
    transition: all 0.3s;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const MenuLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    background: #222;
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    transition: max-height 0.3s ease-in;
    max-height: ${({ open }) => (open ? "300px" : "0")};
    overflow: hidden;
    z-index: 1;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
  }
`;

const MenuLink = styled.a`
  color: #fff;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #ffb347;
  }
`;

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <MenuContainer>
      <Logo>MyLogo</Logo>
      <Hamburger onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </Hamburger>
      <MenuLinks open={menuOpen}>
        <MenuItem>
          <MenuLink href="#home">Home</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#about">About</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#services">Services</MenuLink>
        </MenuItem>
        <MenuItem>
          <MenuLink href="#contact">Contact</MenuLink>
        </MenuItem>
      </MenuLinks>
    </MenuContainer>
  );
};

export default Menu;