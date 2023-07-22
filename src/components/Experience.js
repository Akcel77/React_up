import React from "react"
import { Chrono } from "react-chrono";
import styled from 'styled-components';

const Experiences = () => {

    const SubTitle = styled.h2`
        font-size: 3em;
        margin: 3rem auto;
        text-align: center;
        color: #fff;
        text-shadow: 2px 2px #C30808, 4px 4px #4c4c4c;

        @media (max-width: 768px) {
        font-size: 1em;
            }
    `;

    const items = [{
        title: "2005 - 2009",
        cardTitle: "Lycée hôtelier Alexandre Dumas, Illkirch - FR",
        url: "https://lyceealexandredumas.eu/",
        cardSubtitle:"Lycée des métiers de l’Hôtellerie, de la Restauration et du Tourisme Illkirch-Graffenstaden ",
        cardDetailedText: "BEP (CFC) Service en salle - Bac Pro (Maturité) Service en salle",
        media: {
        type: "IMAGE",
        source: {url: `${process.env.PUBLIC_URL}/images/lyceeHot.png`}
        }
    },{
        title: "2009 - 2019",
        cardTitle: "Divers poste en restauration",
        cardSubtitle:"Barman - Chef de Rang - Glacier - Manager",
        cardDetailedText: "Plusieurs etablissement en Belgique et en France notament lors de divers saisons",
        media: {
        type: "IMAGE",
        source: {url: `${process.env.PUBLIC_URL}/images/bar.jpg`}
        }
    },{
        title: "2019",
        cardTitle: "Universite ARA, Christchurch - NZ",
        url: "https://www.ara.ac.nz/products/programme/nz2598-stru-new-zealand-diploma-in-web-development-and-design-level-5/",
        cardSubtitle:"New Zealand Diploma (Brevet fédéral) in Web Development and Design",
        cardDetailedText: "Le semestre a été interrompu par la COVID-19. Python, JS, CSS, HTML et MySql avec cours sur les methodes agiles",
        media: {
        type: "IMAGE",
        source: {url: `${process.env.PUBLIC_URL}/images/ARA.jpg`}
        }
    },{
        title: "2021",
        cardTitle: "Universite ENI Nantes, Nantes - FR",
        url: "https://www.eni-ecole.fr/formations/developpement/bac2-developpeur-web-et-web-mobile/",
        cardSubtitle:"BTS (Brevet fédéral) Développeur Web et Web Mobile",
        cardDetailedText: ""
        //     <>
        //         <p>L’algorithmique</p>
        //         <p>Initiation à la programmation procédurales avec Java</p>
        //         <p>Le développement Web côté Client – FrontEnd (HTML5, CSS, Javascript…)</p>
        //         <p>Le langage de requête SQL avec SQL Server</p>
        //         <p>Les procédures stockées avec PL-SQL</p>
        //         <p>La Programmation Orientée Objet (POO) avec Java</p>
        //         <p>Le développement en couches et la persistance des données avec Java SE</p>
        //         <p>Le développement Web Côté Serveur – Backend avec Java Enterprise Edition (JEE)</p>
        //         <p>Projet – Développement d’une application avec Java EE</p>
        //         <p>Analyse et Conception</p>
        //         <p>Le développement côté client avec Javascript</p>
        //         <p>Le développement web côté serveur, Backend, avec PHP et Symfony</p>
        //         <p>Projet – Développement d’une application web</p>
        //         <p>Le développement d’applications à l’aide d’un CMS (WordPress)</p>
        //         <p>Le développement d’une application mobile sous Android</p>
        //         <p>Evaluations Finales</p>
        //     </>
        // ),
,
        media: {
            type: "IMAGE",
            source: {url: `${process.env.PUBLIC_URL}/images/ENI.jpg`}
        }
    }, ];

    return (
        <div style={{ width: "100%", height: "auto", margin:'4rem auto', padding:'3rem 0' ,backgroundColor: '#1F1F1F'}}>
        <SubTitle>Experiences</SubTitle>
        <Chrono 
            mediaSettings={{ align: 'right', fit: 'cover' }} 
            items={items}
            mode="VERTICAL_ALTERNATING"
            theme={{
                primary: 'red',
                secondary: 'white',
                cardBgColor: 'white',
                titleColor: 'black',
                titleColorActive: 'red',
            }}
            
        />
        </div>
    )
}

export default Experiences;