import React, { useState } from 'react';
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
  Responsibilities,
} from '../styles/ExperienceStyles';

const experiences = [
  {
    company: "Enel Brasil",
    role: "Estagiário Superior",
    location: "Híbrido – Santo Cristo/Rio de Janeiro",
    date: "Dezembro 2022 – Dezembro 2024",
    responsibilities: [
      "Levantar e analisar dados estatísticos da área de Saúde e Segurança",
      "Sugerir modificações e melhorias nos processos e procedimentos das tecnologias",
      "Apoio na execução de integrações de Saúde e Segurança",
      "Automatizações utilizando Power Automate",
    ],
    active: true,
  },
  {
    company: "FloripaBit",
    role: "Analista de Qualidade de Software Júnior",
    location: "Remoto",
    date: "Janeiro 2025 – Presente",
    responsibilities: [
      "Planejamento e Estratégia de Testes",
      "Realizar testes manuais e/ou automatizados para verificar o funcionamento do software.",
      "Colaborar com analistas de negócios, desenvolvedores e stakeholders para entender os requisitos do sistema.",
      "Documentar planos de teste, casos de teste, relatórios de bugs e relatórios finais."
    ],
    active: false,
  },
];


const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ExperienceContainer>
      <Title>Experiências</Title>
      <ExperienceContent>
        <Sidebar>
          {experiences.map((experience, index) => (
            <CompanyButton
              key={index}
              active={index === activeIndex}
              onClick={() => setActiveIndex(index)}
            >
              {experience.company}
            </CompanyButton>
          ))}
        </Sidebar>
        <ExperienceDetails>
          <RoleTitle>{experiences[activeIndex].role}</RoleTitle>
          <CompanyInfo>
            <div>
              <CompanyName>{experiences[activeIndex].company}</CompanyName>
              <CompanyLocation>({experiences[activeIndex].location})</CompanyLocation>
            </div>
            <Date>{experiences[activeIndex].date}</Date>
          </CompanyInfo>
          <Responsibilities>
            {experiences[activeIndex].responsibilities.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </Responsibilities>
        </ExperienceDetails>
      </ExperienceContent>
    </ExperienceContainer>
  );
};

export default Experience;
