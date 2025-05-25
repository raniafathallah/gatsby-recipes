
import React, { useState } from "react";
import styled, { css } from "styled-components";
import { StaticImage } from "gatsby-plugin-image"
// import logo from "../assets/images/logo.png"
 
// Styled components
const NavbarContainer = styled.nav`
  width: 100%;
  background: #fff;
  box-shadow: 0 1px 10px rgba(0,0,0,0.08);
  position: relative;
  z-index: 100;
`;

const NavbarInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0 20px;
  height: 64px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  color: #234;
  cursor: pointer;
`;

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  margin-left: 10px;
  cursor: pointer;
  @media (max-width: 900px) {
    display: block;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 30px;
  margin: 0;
  padding: 0;

  @media (max-width: 900px) {
    position: absolute;
    flex-direction: column;
    background: #fff;
    top: 64px;
    left: 0;
    width: 100%;
    box-shadow: 0 2px 20px rgba(0,0,0,0.10);
    max-height: ${({ open }) => (open ? "500px" : "0")};
    overflow: hidden;
    gap: 0;
    transition: max-height 0.3s ease;
    z-index: 50;
  }
`;

const MenuItem = styled.li`
  position: relative;
  padding: 0;

  @media (max-width: 900px) {
    width: 100%;
    border-bottom: 1px solid #eee;
    padding: 0.7em 1.3em;
  }
`;

const MenuLink = styled.button`
  background: none;
  border: none;
  color: #234;
  font-size: 1rem;
  cursor: pointer;
  padding: 0.8em 0.5em;
  transition: color 0.2s;
  display: flex;
  align-items: center;

  &:hover, &:focus {
    color: #0074d9;
    outline: none;
  }

  @media (max-width: 900px) {
    width: 100%;
    justify-content: flex-start;
    text-align: left;
  }
`;

const DropdownContainer = styled.div`
  display: ${({ open }) => (open ? "block" : "none")};
  position: absolute;
  left: 0;
  top: 100%;
  min-width: 270px;
  background: #fff;
  box-shadow: 0 2px 16px rgba(0,0,0,0.12);
  border-radius: 6px;
  padding: 1em;
  z-index: 99;
  ${({ image }) =>
    image &&
    css`
      min-width: 200px;
      display: flex;
      flex-direction: column;
      gap: 0.2em;
    `}
  @media (max-width: 900px) {
    position: static;
    min-width: 100%;
    box-shadow: none;
    border-radius: 0;
    padding: 0.5em 0;
  }
`;

// Mega Dropdown Content Example
const MegaMenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 150px);
  gap: 1em;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const MegaMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4em;
`;

const MegaMenuTitle = styled.div`
  font-weight: 600;
  color: #0074d9;
  margin-bottom: 0.3em;
  font-size: 1.1em;
`;

const MegaMenuLink = styled.a`
  color: #234;
  
  text-decoration: none;
  padding: 0.2em 0;
  border-radius: 3px;
  transition: background 0.1s;
  &:hover {
    background: #f4f8fa;
    color: #0074d9;
  }
`;

// Images Dropdown Example
const ImageDropdownItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7em;
  padding: 0.4em 0.7em;
  color: #234;
  text-decoration: none;
  border-radius: 3px;
  transition: background 0.1s;
  &:hover {
    background: #f4f8fa;
    color: #0074d9;
  }
`;

const DropdownImage = styled.img`
  width: 32px;
  height: 32px;
  object-fit: cover;
  border-radius: 4px;
`;

// Search
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  @media (max-width: 900px) {
    margin-left: 0;
    width: 100%;
    margin-top: 10px;
  }
`;

const SearchInput = styled.input`
  padding: 0.5em 1em;
  border: 1px solid #dedede;
  border-radius: 30px;
  font-size: 1em;
  transition: border 0.2s;
  &:focus {
    border: 1.5px solid #0074d9;
    outline: none;
  }
`;

const Menus=()=> {
  // Dropdown states
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Menu config: mega, images, or normal
  const menuItems = [
    {
      label: "Home",
      href: "/",
      type: "normal",
    },
    {
      label: "Products",
      type: "mega",
      content: (
        <MegaMenuGrid>
          <MegaMenuSection>
            <MegaMenuTitle>Category 1</MegaMenuTitle>
            <MegaMenuLink href="#">Product 1</MegaMenuLink>
            <MegaMenuLink href="#">Product 2</MegaMenuLink>
            <MegaMenuLink href="#">Product 3</MegaMenuLink>
          </MegaMenuSection>
          <MegaMenuSection>
            <MegaMenuTitle>Category 2</MegaMenuTitle>
            <MegaMenuLink href="#">Product 4</MegaMenuLink>
            <MegaMenuLink href="#">Product 5</MegaMenuLink>
            <MegaMenuLink href="#">Product 6</MegaMenuLink>
          </MegaMenuSection>
        </MegaMenuGrid>
      ),
    },
    {
      label: "Gallery",
      type: "mega",
      content: (
        <MegaMenuGrid>
          <MegaMenuSection>
            <MegaMenuTitle>Category 1</MegaMenuTitle>
            <MegaMenuLink href="#">Product 1</MegaMenuLink>
            <MegaMenuLink href="#">Product 2</MegaMenuLink>
            <MegaMenuLink href="#">Product 3</MegaMenuLink>
          </MegaMenuSection>
          <MegaMenuSection>
            <MegaMenuTitle>Category 2</MegaMenuTitle>
            <MegaMenuLink href="#">Product 4</MegaMenuLink>
            <MegaMenuLink href="#">Product 5</MegaMenuLink>
            <MegaMenuLink href="#">Product 6</MegaMenuLink>
          </MegaMenuSection>
        </MegaMenuGrid>
      ),
    },
 
    {
      label: "About",
      href: "/about",
      type: "normal",
    },
    {
      label: "BLog",
      href: "/blog",
      type: "normal",
    },
  ];

  // Toggle dropdown logic
  const handleDropdown = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  // Close dropdowns on outside click
  React.useEffect(() => {
    if (!openDropdown) return;
    const handleClick = (e) => {
      if (!e.target.closest(".dropdown-opener")) setOpenDropdown(null);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [openDropdown]);

  return (
    <NavbarContainer>
      <NavbarInner>
        <Logo> 
        <StaticImage src="../../../assets/images/logo.png" alt="A dinosaur" />
          
            </Logo>
        <Hamburger
          aria-label="Open Menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          ☰
        </Hamburger>
        <Menu open={menuOpen}>
          {menuItems.map((item, idx) => (
            <MenuItem key={item.label}>
              {item.type === "normal" ? (
                <MenuLink as="a" href={item.href}>
                  {item.label}
                </MenuLink>
              ) : (
                <>
                  <MenuLink
                    className="dropdown-opener"
                    onClick={() => handleDropdown(idx)}
                    aria-expanded={openDropdown === idx}
                    aria-haspopup="true"
                  >
                    {item.label} ▼
                  </MenuLink>
                  <DropdownContainer
                    open={openDropdown === idx}
                    className="dropdown-opener"
                    image={item.type === "images"}
                  >
                    {item.type === "mega" ? (
                      item.content
                    ) : (
                      // Images dropdown
                      item.content.map((imgItem) => (
                        <ImageDropdownItem
                          key={imgItem.label}
                          href={imgItem.href}
                        >
                          <DropdownImage src={imgItem.img} alt={imgItem.label} />
                          {imgItem.label}
                        </ImageDropdownItem>
                      ))
                    )}
                  </DropdownContainer>
                </>
              )}
            </MenuItem>
          ))}
          <MenuItem>
            {/* Responsive Search (inside menu on mobile) */}
            <SearchContainer>
              <SearchInput
                type="text"
                placeholder="Search…"
                aria-label="Search"
              />
            </SearchContainer>
          </MenuItem>
        </Menu>
      </NavbarInner>
      {/* Mobile search (if you want it outside menu, uncomment below)
      <SearchContainer style={{ display: "none" }}>
        <SearchInput type="text" placeholder="Search…" aria-label="Search" />
      </SearchContainer>
      */}
    </NavbarContainer>
  );
}



export default Menus;