import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { 
  AboutContainer, 
  Title, 
  Text, 
  LocationText, 
  GradientText, 
  Button 
} from '../styles/AboutStyles';

const About: React.FC = () => {
  return (
    <AboutContainer>
      <Title>Sobre Mim</Title>
      <LocationText>
        <FaMapMarkerAlt style={{ marginRight: '8px' }} />
        Rio de Janeiro, Nova Iguaçu
      </LocationText>
      <Text>
        Olá! Sou Daniel Almeida, tenho 23 anos e sou estudante de Análise e Desenvolvimento de Sistemas.
        Atualmente estou no 5º período e minha formação está prevista para dezembro de 2024.
        Meu foco de estudo tem sido no Front End e Mobile, onde me aprofundo nas seguintes linguagens:
        JavaScript, React, React Native, TypeScript e Flutter.
      </Text>
      <Text>
        Meu e-mail para contato: <GradientText>danielandrade_2001@hotmail.com</GradientText>
      </Text>
      <Button href="/caminho/para/seu-curriculo.pdf" download>
        Baixar Currículo
      </Button>
    </AboutContainer>
  );
};

export default About;