import React from 'react';
import Card from '../components/Card';
import alura from '../assets/alura.jpg'
import betalent from '../assets/betalent.jpeg'
import {
  AppContainer,
  Title,
  ProjectGrid,
  AllProjectsButton
} from '../styles/ProjectsStyles';

const projects = [
  {
    title: 'Voll-Web',
    description: 'Construção de um fluxo de cadastro e autenticação em React com Typescript.',
    imageUrl: alura,
    technologies: ['TypeScript', 'CSS', 'React'],
    projectUrl: 'https://github.com/daniel-almeid/voll-web',
  },
  {
    title: 'Voll-Mobile',
    description: 'Aplicação para consultas médicas usando Native Base e TypeScript no React Native.',
    imageUrl: alura,
    technologies: ['React Native', 'Expo', 'Axios', 'Typescript'],
    projectUrl: 'https://github.com/daniel-almeid/voll-mobile',
  },
  {
    title: 'Teste técnico - BeMobile',
    description: 'Aplicativo desenvolvido com React Native. Trata-se de um teste técnico para a BeTalent.',
    imageUrl: betalent,
    technologies: ['React Native', 'TypeScript',],
    projectUrl: 'https://github.com/daniel-almeid/teste-BeTalent',
  },
];

const App: React.FC = () => {
  return (
    <AppContainer>
      <Title>Principais Projetos</Title>
      <ProjectGrid>
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            technologies={project.technologies}
            projectUrl={project.projectUrl} 
          />
        ))}
      </ProjectGrid>
      <AllProjectsButton href="https://github.com/daniel-almeid" target="_blank" rel="noopener noreferrer">
        Ver Todos os Projetos
      </AllProjectsButton>
    </AppContainer>
  );
};

export default App;
