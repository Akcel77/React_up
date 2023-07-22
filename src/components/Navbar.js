import React from 'react';
import styled from 'styled-components';
import { FiX, FiPhoneCall, FiMail, FiGithub } from "react-icons/fi";
import {BsCode} from "react-icons/bs";


const NavLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-size: 1.5em; // Augmenter la taille de la police
  margin-bottom: 1.1rem; // Ajouter une marge en bas
  transition: color 0.3s ease;
  text-shadow: 2px 2px #C30808, 4px 4px #4c4c4c;

  &:hover {
    color: #C30808;
  }
`;

const MenuButton = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  cursor: pointer;
  color: #fff;
`;

const DropdownMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 25vw; // Augmenter la largeur
  height: 98vh;
  background: #1F1F1F;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  transform: translateX(${props => props.open ? 0 : '100%'});
  transition: transform 0.3s ease;
  z-index: 100;

  @media (max-width: 768px) {
    width: 50vw; // Augmenter la largeur
  }
`;



const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const IconLink = styled.a`
  color: white;
  transition: color 0.3s ease;
  text-shadow: 2px 2px #C30808, 4px 4px #4c4c4c;

  &:hover {
    color: #C30808;
  }
`;

const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 2em;
`;


const Navbar = ({ isOpen, toggleMenu }) => (
    <DropdownMenu open={isOpen}>
      <MenuButton onClick={toggleMenu}>
        <FiX size={30} color="#ffffff"/>
      </MenuButton>
      <ProfileImage src={`${process.env.PUBLIC_URL}/images/profilPicture.jpg`} alt="Profile" />
      <NavLink href="#">Home</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Contact</NavLink>
      <IconContainer>
        <IconLink href="telto:+413079859"><FiPhoneCall size={20} /></IconLink>
        <IconLink href="mailto:Akeucel@gmail.com"><FiMail size={20} /></IconLink>
        <IconLink href="http://github.com/Akcel77" target="_blank"><FiGithub size={20} /></IconLink>
        <IconLink href="https://www.codingame.com/profile/2db3e739a440d2688cfc7553eb67d6c11504573" target="_blank"><BsCode size={20} /></IconLink>
      </IconContainer>
    </DropdownMenu>
  );
  

export default Navbar;
