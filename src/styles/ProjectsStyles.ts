import styled from 'styled-components';

export const AppContainer = styled.div`
    background-color: #010101;
    color: #fff;
    padding: 50px;
    padding-top: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Kanit', sans-serif;

    @media (max-width: 768px) {
        text-align: flex-start;
        padding: 10px;
        padding-top: 70px;;
    }
    `;

export const Title = styled.h1`
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: left;
    width: 100%;

    @media (max-width: 768px) {
        text-align: left;
        font-size: 26px;
    }
    `;

export const ProjectGrid = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
    `;

export const AllProjectsButton = styled.a`
    background-color: #0055ff;
    color: #fff;
    padding: 15px 30px;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: bold;
    text-decoration: none;
    margin-top: 30px;
    text-align: center;

    &:hover {
        background-color: #003bb3;
    }

    @media (max-width: 768px) {
        padding: 12px 24px;
        font-size: 16px;
    }
    `;
