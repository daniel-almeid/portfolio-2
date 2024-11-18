import React from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { 
  HeaderContainer,
  Logo,
  Nav,
  IconsContainer,
  HamburgerIcon
 } from '../styles/HeaderStyles';

interface HeaderProps {
  scrollToHome: () => void;
  scrollToAbout: () => void;
  scrollToExperience: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
  toggleMenu: () => void;
  showMenu: boolean;
}

const Header: React.FC<HeaderProps> = ({ 
  scrollToHome, 
  scrollToAbout, 
  scrollToExperience, 
  scrollToSkills, 
  scrollToProjects, 
  toggleMenu, 
  showMenu 
}) => {
  return (
    <HeaderContainer>
      <Logo>Daniel Almeida</Logo>
      <Nav showMenu={showMenu}>
        <ul>
          <li onClick={scrollToHome}>Início</li> 
          <li onClick={scrollToAbout}>Sobre mim</li>
          <li onClick={scrollToExperience}>Experiências</li>
          <li onClick={scrollToSkills}>Habilidades</li>
          <li onClick={scrollToProjects}>Projetos</li>
        </ul>
      </Nav>
      <IconsContainer>
        <HamburgerIcon onClick={toggleMenu}>
          <FaBars />
        </HamburgerIcon>
      </IconsContainer>
    </HeaderContainer>
  );
};


export default Header;