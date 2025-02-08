import React, { useState } from 'react';
import styled from 'styled-components';
import CompLogo from "../assets/CompLogo.jpg"
import { Link } from 'react-scroll';
const NavbarContainer = styled.nav`
  position: relative;

  background-color: white;
  border-bottom: 1px solid #e5e7eb;
  z-index: 1000;
  @media (prefers-color-scheme: dark) {
    background-color: #1f2937;
    border-color: #4b5563;
  }
`;

const NavbarWrapper = styled.div`
  position: relative;

  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
`;

const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const LogoImage = styled.img`
  height: 32px;
  margin-right: 10px;
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1f2937;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
`;

const BurgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    display: inline-flex;
    padding: 0.5rem;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
    color: #6b7280;
    cursor: pointer;
    &:hover {
      background-color: #f3f4f6;
    }
  }
`;

const BurgerIcon = styled.svg`
  width: 20px;
  height: 20px;
  stroke: currentColor;
`;

const NavbarLinks = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 100%;
    padding: 1rem;
    background-color: #f9fafb;
    border-radius: 10px;
    position: absolute;
    top: 60px;
    left: 0;
  }
`;

const NavItem = styled.li`
  list-style-type: none;
  margin: 0 1rem;
  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #111827;
  font-weight: 500;
  padding: 0.5rem 1rem;
  display: block;
  border-radius: 5px;
  &:hover {
    background-color: #f3f4f6;
  }
  &.active {
    background-color: #2563eb;
    color: white;
  }
  @media (prefers-color-scheme: dark) {
    color: white;
    &:hover {
      background-color: #374151;
    }
    &.active {
      background-color: #2563eb;
    }
  }
`;

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
  
    return (
      <NavbarContainer>
        <NavbarWrapper>
          <LogoWrapper href="#">
            <LogoImage src={CompLogo} alt="Logo" />
            <LogoText>DEGIXBIT</LogoText>
          </LogoWrapper>
          <BurgerButton onClick={toggleMenu} aria-expanded={isOpen}>
            <span className="sr-only">Open main menu</span>
            <BurgerIcon viewBox="0 0 17 14" fill="none">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </BurgerIcon>
          </BurgerButton>
          <NavbarLinks isOpen={isOpen}>
            <ul className="flex flex-col md:flex-row">
              <NavItem>
                <Link to="home" smooth={true} duration={500}>
                  <NavLink>Home</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="contact" smooth={true} duration={500}>
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="services" smooth={true} duration={500}>
                  <NavLink>Services</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to="pricing" smooth={true} duration={500}>
                  <NavLink>Pricing</NavLink>  {/* Link updated to scroll to Pricing */}
                </Link>
              </NavItem>
              <NavItem>
                <NavLink href="#">Contact</NavLink>
              </NavItem>
            </ul>
          </NavbarLinks>
        </NavbarWrapper>
      </NavbarContainer>
    );
  };

export default Navbar;
