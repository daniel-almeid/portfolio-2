import styled from 'styled-components';

export const SkillsContainer = styled.section`
    padding: 50px;
    padding-top: 80px;
    background-color: #010101;
    color: white;
    font-family: 'Kanit', sans-serif;

    @media (max-width: 768px) {
        text-align: flex-start;
        padding: 10px;
        padding-top: 70px;
    }
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 20px;
    text-align: left;

    @media (max-width: 768px) {
        text-align: flex-start;
        font-size: 26px;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    color: #b0b0b0;
    margin-bottom: 40px;
    text-align: left;

    @media (max-width: 768px) {
        text-align: flex-start;
    }
`;

export const SkillGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;

    @media (max-width: 768px) {
        display: none;
    }

    
`;

export const SkillCard = styled.div`
    background-color: #1e1e1e;
    border-radius: 8px;
    padding: 20px;
    width: 150px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    

    &:hover {
        transform: translateY(-10px);
    }

    svg {
        font-size: 60px;
        margin-bottom: 10px;
    }

    h3 {
        font-size: 18px;
        color: white;
        margin: 0;
        text-align: center;
    }

    @media (max-width: 768px) {
        width: 100px;
        height: 130px;

        svg {
        font-size: 50px;
        }

        h3 {
        font-size: 16px;
        }
    }

    @media (max-width: 480px) { 
        height: 90px;
        

        svg {
        font-size: 50px;
        align-items: center;
        padding-left: 40px;
        }

        h3 {
        font-size: 14px;
        align-items: center;
        }
    }
`;