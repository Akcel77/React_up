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
  font-size: 2rem;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin-top: 1rem;
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
        return <p>Je suis animé par un désir d'évolution, d'améliorer mes compétences créatives et de développement.
                  <br/> Mon objectif est d'apprivoiser React jusqu'à ce que son mystère se dissolve dans ma compréhension. 
                  <br/>Certes, je suis un nouveau venu dans ce domaine et il y a une montagne de connaissances à gravir. Cependant, j'ai une soif d'apprendre inextinguible et je suis prêt à relever avec audace chaque défi sur ma route.
                  <br/> <br/> Par ailleurs, j'aspire à perfectionner mes compétences de travail en équipe dans ce domaine, car je crois que la collaboration est le moteur de l'innovation.
                </p>;
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
      <Text style={{ width: '80%', margin: '0 auto'}}>Évoluant avec internet depuis mon plus jeune âge, j'ai toujours été fasciné par sa progression constante et l'ingéniosité des entreprises qui façonnent le paysage numérique actuel. L'essor spectaculaire que nous vivons aujourd'hui, avec des innovations incessantes et des changements dynamiques, marque, je le crois, l'aube d'une transition vers le web 3.0, qui se matérialisera progressivement en fonction des utilisateurs et de leurs interactions.

Nous sommes actuellement à l'apogée de l'ère numérique, où les sites web et les applications offrent des expériences incroyables et des possibilités sans limites. Au lieu d'être simplement un spectateur de cette révolution, je souhaite activement y participer et contribuer à façonner le futur d'internet.</Text>
      <Modal isOpen={modalIsOpen} handleClose={handleCloseModal}>
        <h2>Plus en profondeur</h2>
        {modalContent()}
      </Modal>
    </Section>
  );
}

export default AboutSection;
