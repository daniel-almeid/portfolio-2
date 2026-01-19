import React, { useEffect, useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import perfilImage from '../assets/perfil.jpeg';
import {
  HomeContainer,
  Info,
  ProfileImage
} from '../styles/HomeStyles'

const TypingEffect: React.FC<{ texts: string[] }> = ({ texts }) => {
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 100;
  const deletingSpeed = 100;
  const pauseBetweenTexts = 2000;

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const current = texts[index];

    const handleTyping = (text: string, i: number) => {
      if (i < text.length) {
        setCurrentText(text.slice(0, i + 1));
        timeout = setTimeout(() => handleTyping(text, i + 1), typingSpeed);
      } else {
        setTimeout(() => handleDeleting(text, text.length), pauseBetweenTexts);
      }
    };

    const handleDeleting = (text: string, i: number) => {
      if (i > 1) {
        setCurrentText(text.slice(0, i - 1));
        timeout = setTimeout(() => handleDeleting(text, i - 1), deletingSpeed);
      } else {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setTimeout(() => handleTyping(texts[(index + 1) % texts.length], 1), 100);
      }
    };

    handleTyping(current, 0);

    return () => clearTimeout(timeout);
  }, [index, texts]);

  return <p>{currentText}</p>;
};

interface HomeProps {
  scrollToAbout: () => void;
  scrollToExperience: () => void;
  scrollToSkills: () => void;
  scrollToProjects: () => void;
}

const Home: React.FC<HomeProps> = ({ scrollToAbout, scrollToExperience, scrollToSkills, scrollToProjects }) => {
  return (
    <HomeContainer
      onWheel={(e) => {
        if (e.deltaY > 0) {
          scrollToExperience();
        } else {
          scrollToAbout();
        }
      }}
    >
      <Info>
        <h2>Olá, eu sou</h2>
        <h1>Daniel Almeida</h1>
        <TypingEffect texts={['Graduado em Análise e Desenv. de Sistemas']} />
        <div>
          <a href="https://www.linkedin.com/in/daniel-almeida-16b94a231/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin style={{ color: '#0A66C2' }} />
          </a>
          <a href="https://github.com/daniel-almeid" target="_blank" rel="noopener noreferrer">
            <FaGithub style={{ color: '#ffffff' }} />
          </a>
          <a href="https://www.instagram.com/daniel.devx/" target="_blank" rel="noopener noreferrer">
            <FaInstagram style={{ color: '#E1306C' }} />
          </a>
        </div>
      </Info>

      <ProfileImage src={perfilImage} alt="Foto de Perfil" />
    </HomeContainer>
  );
};

export default Home;