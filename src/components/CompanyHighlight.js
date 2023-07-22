import React from 'react';
import styled from 'styled-components';

const HighlightContainer = styled.div`
    max-width: 100%;
    background-color: #1F1F1F;
    color: #fff;
    padding: 20px;
    text-align: center;
    position: relative;
    width: 100%;
`;

const HighlightContent = styled.p`
    margin: 0 auto;
    width: 75%;
  font-size: 1.5em;
  line-height: 1.5;
  white-space: pre-line;
`;

const CompanyHighlight = () => (
  <HighlightContainer>
    <HighlightContent>
      {"Cher Superhuit,\n\nJe suis captivé par la réputation de votre entreprise en tant que leader incontesté dans le secteur du développement web à Lausanne. C'est avec enthousiasme et détermination que je me permets de déposer ma candidature en tant que Développeur Front-End.\n\nVotre engagement pour l'excellence et l'innovation dans chaque projet m'inspire à chercher continuellement de nouvelles façons de créer des expériences web exceptionnelles. Votre approche créative et votre culture d'entreprise dynamique correspondent parfaitement à ma passion pour le développement web."}
    </HighlightContent>
  </HighlightContainer>
);

export default CompanyHighlight;
