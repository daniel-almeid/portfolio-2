import styled from 'styled-components';

export const CardContainer = styled.div`
    background-color: #1a1a1a;
    padding: 20px;
    width: 300px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    font-family: 'Kanit', sans-serif;

    @media (max-width: 768px) {
        width: 280px;
    }
`;

export const ProjectImage = styled.img`
    width: 80px;
    height: auto;
    border-radius: 38px;
    margin-bottom: 15px;
`;

export const ProjectTitle = styled.h3`
    font-size: 24px;
    margin-bottom: 10px;
    font-family: 'Kanit', sans-serif;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

export const ProjectDescription = styled.p`
    font-size: 18px;
    color: #ccc;
    text-align: center;
    margin-bottom: 15px;
    font-family: 'Kanit', sans-serif;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const TechList = styled.div`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
  
`;

export const TechBadge = styled.span`
    background-color: #0055ff;
    color: #fff;
    padding: 5px 10px;
    border-radius: 5px;
    font-size: 12px;
    font-family: 'Kanit', sans-serif;

    @media (max-width: 768px) {
        font-size: 12px;
    }
`;

export const ProjectButton = styled.a`
    margin-top: 15px;
    padding: 10px 20px;
    background: linear-gradient(90deg, #00aaff, #00aaff);
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    font-size: 16px;
    font-family: 'Kanit', sans-serif;
    text-align: center;
    transition: background-color 0.3s ease;

    &:hover {
        background: linear-gradient(90deg, #0099cc, #0099cc);
    }

    @media (max-width: 768px) {
        font-size: 16px;
        padding: 8px 16px;
    }
`;