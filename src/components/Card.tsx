import React from 'react';
import {
  CardContainer,
  ProjectImage,
  ProjectTitle,
  ProjectDescription,
  ProjectButton,
  TechList,
  TechBadge
} from '../styles/CardStyles'

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
}) => {
  return (
    <CardContainer>
      <ProjectImage src={imageUrl} alt={title} />
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechList>
        {technologies.map((tech, index) => (
          <TechBadge key={index}>{tech}</TechBadge>
        ))}
      </TechList>
      <ProjectButton href={projectUrl} target="_blank" rel="noopener noreferrer">
        Ver Projeto
      </ProjectButton>
    </CardContainer>
  );
};

export default Card;
