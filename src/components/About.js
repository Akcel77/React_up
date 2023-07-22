import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const innovationIcon = '/icons/innovation.png';
const teamIcon = '/icons/team.png';
const thinkingIcon = '/icons/thinking.png';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  max-width: 100vw;
  overflow-x: hidden;
`;

const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem;

`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin-bottom: 5rem;
  

  @media (min-width: 768px) {
    width: calc(100% / 3);
  }
`;

const Icon = styled.img`
  width: 128px;
  height: 128px;
`;

const Text = styled.p`
  text-align: center;
  margin-top: 10px;
`;

const Title = styled.h3`
  text-align: center;
  margin: 10px 0;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  background-color: #ff0000;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c30000;
  }
`;

  const AboutSection = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [clickedButton, setClickedButton] = useState(null);

  const handleOpenModal = (buttonId) => {
    setClickedButton(buttonId);
    setModalIsOpen(true);
  }

  const handleCloseModal = () => {
    setModalIsOpen(false);
  }

  const modalContent = () => {
    switch(clickedButton) {
      case 'team':
        return <p>Je recherche une entreprise qui favorise le développement professionnel et la croissance, où je pourrais pleinement utiliser mes compétences.
                  <br/><br/> J'ai un intérêt intense pour le développement et je suis enthousiaste à l'idée de transformer cette passion en réalisations concrètes à travers des projets innovants.
                  <br/> Je suis convaincu que l'atmosphère unique de votre entreprise et certaines des caractéristiques spécifiques que j'ai notées correspondent parfaitement à mes objectifs.
                  <br/> Enfin je suis persuadé que votre entreprise serait l'environnement parfait pour moi, un endroit où je me sentirais totalement à l'aise.
                </p>;
      case 'innovation':
        return <p>Au cours de mes précédentes expériences dans mon domaine précédent, j'ai acquis des compétences en communication, j'ai appris à travailler en équipe et j'ai développé ma patience.
                   <br/>Je suis une personne à l'écoute et impliquée. De plus, je suis déterminé et j'aime l'apprentissage continu. J'ai un gout pour les choses bien faites.
                   <br/> <br/>En ce qui concerne l'IT, j'ai travaillé sur plusieurs projets avec PHP - Symfony, Python, Java, Angular dans le cadre de mes projets universitaires et actuellement, je me forme sur React et la suite JS (MongoDB - Node.Js). 
                   <br/>J'ai une expérience avec MySql et PL/Sql en termes de bases de données, j'utilise Git pour le versionnage et VScode et IntelliJ comme environnements de développement.
                </p>;
      case 'thinking':
        return <p>Contenu pour le bouton de pensée...</p>;
      default:
        return <p>Contenu par défaut...</p>;
    }
  }

  return (
      <Section>
      <IconsWrapper>
        <IconWrapper>
          <Icon src={teamIcon} alt="Team Icon" />
          <Title>Ce que j'attends de ce poste</Title>
          <Text>Évoluer dans un environnement qui me correspond</Text>
          <Button onClick={() => handleOpenModal('team')}>Voir plus</Button>
        </IconWrapper>
        <IconWrapper>
          <Icon src={innovationIcon} alt="Innovation Icon" />
          <Title>Une compétence que je maîtrise</Title>
          <Text>Soft skill : Communication - Esprit d'équipe <br/> Hard Skill : Python - PHP(Symfony) </Text>
          <Button onClick={() => handleOpenModal('innovation')}>Voir plus</Button>
        </IconWrapper>
        <IconWrapper>
          <Icon src={thinkingIcon} alt="Thinking Icon" />
          <Title>Une compétence a développer</Title>
          <Text>Je veux développer ma créativité</Text>
          <Button onClick={() => handleOpenModal('thinking')}>Voir plus</Button>
        </IconWrapper>
      </IconsWrapper>
      <Title>Ce que je pense de l'état actuel du web</Title>
      <Text style={{ width: '80%', margin: '0 auto'}}>J'ai toujours été attiré par internet et son évolution. Je suis aussi de très près les entreprises qui 'dictent' le fonctionnement de celui-ci et sa gestion. Je pense que plus qu'avant nous traversons une évolution inquantifiable sur les changements à venir et si nous allons passer d'un web 2.0 à un web3.0</Text>
      <Modal isOpen={modalIsOpen} handleClose={handleCloseModal}>
        <h2>Plus en profondeur</h2>
        {modalContent()}
      </Modal>
    </Section>
  );
}

export default AboutSection;
