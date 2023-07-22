import React from "react";
import Slider from "react-slick";
import styled from 'styled-components';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  text-align: center;
  z-index: 400;

  img {
    width: 50%;
    height: auto;
    margin: 0 auto;
  }

  h3 {
    margin: 10px 0;
    text-align: center;
  }

  p {
    text-align: center;
    padding: 0 10px;
  }

  a {
    color: blue;
    text-decoration: underline;
  }
`;

const Title = styled.p`
        font-size: 3em;
        margin: 3rem auto;
        text-align: center;
        color: #000;
        text-shadow: 1px 1px #888888, 2px 2px #cccccc;
`

const Projet = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const projets = [
        {
            title: "Summit Sonata",
            subTitle: "Site vitrine pour un coach sportif",
            url: "https://summitsonata.ch",
            image: `${process.env.PUBLIC_URL}/images/mockuper.png`
        },
        {
            title: "Looha",
            subTitle: "Agence web et communication",
            url: "https://looha.io/",
            image: `${process.env.PUBLIC_URL}/images/looha.png`
        },
        {
            title: "Travel With Your Bike",
            subTitle: "Site de reservation pour transport de mot",
            url: "https://travelwithyourbike.com/",
            image: `${process.env.PUBLIC_URL}/images/twyb.png`,
            description : 'Site développé sous Symfony'
        },

    ];

    return (
        <div>
            <Title>Quelques projets</Title>
            <Slider {...settings}>
                {projets.map((projet, index) => (
                    <ProjectCard key={index}>
                        <h3>{projet.title}</h3>
                        <h4 style={{width: '80%', margin:'2rem auto'}}>{projet.subTitle}</h4>
                        <img src={projet.image} alt={projet.title} />
                        <p style={{width: '80%', margin:'2rem auto'}}>{projet.description}</p>
                        <a href={projet.url}>Voir le site</a>
                    </ProjectCard>
                ))}
            </Slider>
        </div>
    );
}

export default Projet;
