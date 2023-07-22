import React, { useState } from 'react';
import {styled } from 'styled-components';
import { FiMenu } from "react-icons/fi";
import Navbar from './Navbar';



const HeaderContainer = styled.header`
    background-color: #1F1F1F;
    color: #fff;
    padding: 20px;
    text-align: center;
    width: 100%;
    z-index: 999;
    height: 50vh;
`;

const Title = styled.h1`
    font-size: 3em;
    margin: 20px 0;
    color: #fff;
    text-shadow: 2px 2px #C30808, 4px 4px #4c4c4c;


    @media (max-width: 768px) {
      font-size: 2em;
    }
`;

const SubTitle = styled.h2`
    font-size: 1.5em;
    margin-bottom: 0.5em;
    color: #fff;
    text-shadow: 2px 2px #C30808, 4px 4px #4c4c4c;

    @media (max-width: 768px) {
      font-size: 1em;
    }
`;

const MenuButton = styled.div`
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
`;

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <HeaderContainer>
      <MenuButton onClick={() => setMenuOpen(true)}>
        <FiMenu size={30} color="#ffffff"/>
      </MenuButton>
      {/* <Navbar isOpen={isMenuOpen} toggleMenu={() => setMenuOpen(!isMenuOpen)} /> */}
      <Title>Diagne Axel</Title>
      <SubTitle>Candidature Développeur Web Front-end</SubTitle>
    </HeaderContainer>
  );
}

export default Header;
