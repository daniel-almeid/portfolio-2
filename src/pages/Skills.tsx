import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { FaJsSquare, FaReact, FaGit, FaFileExcel } from 'react-icons/fa';
import { SiTypescript, SiBootstrap, SiFigma, SiPowerbi, SiTailwindcss, SiPlaywright, SiCypress } from 'react-icons/si';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  SkillsContainer,
  Title,
  Description,
  SkillCard,
  SkillGrid,
} from '../styles/SkillStyles';

const StyledSlider = styled(Slider)`
    display: none;

    @media (max-width: 768px) {
        display: block;

        .slick-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        }

        .slick-prev:before, 
        .slick-next:before {
        color: #00aaff;
        font-size: 0px; 
        }

        .slick-dots {
        display: flex !important;
        justify-content: center;
        }

        .slick-dots li button:before {
        color: #00aaff;
        }

        .slick-dots li.slick-active button:before {
        color: #00aaff;
        }
    }

    @media (max-width: 360px) {
        .slick-slide {
        transform: scale(0.9); 
        }

        .slick-prev:before, 
        .slick-next:before {
        font-size: 0px; 
        }

        .slick-dots li button:before {
        font-size: 10px;
        }
    }
`;

const skills = [
  { name: 'Playwright', icon: <SiPlaywright color="#2ead33" /> },
  { name: 'Cypress', icon: <SiCypress color="#00ffb3" /> },
  { name: 'JavaScript', icon: <FaJsSquare color="#f7df1e" /> },
  { name: 'React.js', icon: <FaReact color="#61dafb" /> },
  { name: 'React Native', icon: <FaReact color="#61dafb" /> },
  { name: 'TypeScript', icon: <SiTypescript color="#3178c6" /> },
  { name: 'Bootstrap', icon: <SiBootstrap color="#7952b3" /> },
  { name: 'TailwindCSS', icon: <SiTailwindcss color="#06b6d4" /> },
  { name: 'Figma', icon: <SiFigma color="#f24e1e" /> },
  { name: 'Git', icon: <FaGit color="#f05032" /> },
  { name: 'Excel', icon: <FaFileExcel color="#217346" /> },
  { name: 'Power BI', icon: <SiPowerbi color="#f2c811" /> }
];

const Skills: React.FC = () => {
  // Configurações do Slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500
  };

  return (
    <SkillsContainer>
      <Title>Habilidades</Title>
      <Description>
        Aqui você encontra minhas principais habilidades nas quais tenho maior conhecimento e experiência.
        No entanto, estou sempre em busca de novos aprendizados, me atualizando e explorando novas tecnologias.
      </Description>

      <StyledSlider {...settings}>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </SkillCard>
        ))}
      </StyledSlider>


      <SkillGrid>
        {skills.map((skill) => (
          <SkillCard key={skill.name}>
            {skill.icon}
            <h3>{skill.name}</h3>
          </SkillCard>
        ))}
      </SkillGrid>
    </SkillsContainer>
  );
};

export default Skills;
