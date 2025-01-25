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
        Olá! Sou Daniel Almeida, tenho 23 anos e sou Analista de Qualidade de Software Júnior.
        Em dezembro de 2024 concluí minha graduação em Análise e Desenv. de Sistemas pela Unigranrio.
        Atualmente atuo como Analista de Qualidade de Software, mas também possuo conhecimento avançado 
        com Desenvolvimento Front End e Mobile.
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
