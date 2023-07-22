import React from "react";
import styled from 'styled-components';
import { FiPhoneCall, FiMail, FiGithub } from "react-icons/fi";
import { BsCode } from "react-icons/bs";

const FooterContainer = styled.footer`
  background-color: #1F1F1F;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin: 5rem 0 0 0;
  color: white;
`;

const Name = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Info = styled.h3`
  font-size: 2rem;
  margin: 1rem auto;
  text-align: center;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 200px;
  margin-bottom: 1rem;
`;

const IconLink = styled.a`
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #a9a9a9;
  }
`;

const Line = styled.hr`
  width: 50%;
  margin-bottom: 1rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Name>Diagne Axel</Name>
      <Info>Développeur débutant doté d'ambitions démesurées</Info>
      <Line />
      <IconContainer>
        <IconLink href="telto:+413079859"><FiPhoneCall size={20} /></IconLink>
        <IconLink href="mailto:Akeucel@gmail.com"><FiMail size={20} /></IconLink>
        <IconLink href="http://github.com/Akcel77" target="_blank"><FiGithub size={20} /></IconLink>
        <IconLink href="https://www.codingame.com/profile/2db3e739a440d2688cfc7553eb67d6c11504573" target="_blank"><BsCode size={20} /></IconLink>
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
