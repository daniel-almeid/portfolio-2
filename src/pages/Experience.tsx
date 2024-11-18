import React from 'react';
import { 
  ExperienceContainer, 
  Title, 
  ExperienceContent, 
  Sidebar, 
  CompanyButton, 
  ExperienceDetails, 
  RoleTitle, 
  CompanyInfo, 
  CompanyName, 
  CompanyLocation, 
  Date, 
  Responsibilities 
} from '../styles/ExperienceStyles';

const Experience: React.FC = () => {
  return (
    <ExperienceContainer>
      <Title>Experiências</Title>
      <ExperienceContent>
        <Sidebar>
          <CompanyButton active={true}>Enel Brasil</CompanyButton>
        </Sidebar>
        <ExperienceDetails>
          <RoleTitle>Estagiário Superior</RoleTitle>
          <CompanyInfo>
            <div>
              <CompanyName>Enel Brasil</CompanyName>
              <CompanyLocation>(Híbrido – Santo Cristo/Rio de Janeiro)</CompanyLocation>
            </div>
            <Date>Dezembro 2022 – Atual</Date>
          </CompanyInfo>
          <Responsibilities>
            <li>Levantar e analisar dados estatísticos da área de Saúde e Segurança</li>
            <li>Sugerir modificações e melhorias nos processos e procedimentos das tecnologias</li>
            <li>Apoio na execução de integrações de Saúde e Segurança</li>
            <li>Automatizações utilizando Power Automate</li>
          </Responsibilities>
        </ExperienceDetails>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;
