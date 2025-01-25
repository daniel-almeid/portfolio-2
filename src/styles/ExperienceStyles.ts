import styled from 'styled-components';

export const ExperienceContainer = styled.section`
    padding: 10px;
    padding-top: 80px;
    background-color: #010101;
    color: white;
    font-family: 'Kanit', sans-serif;
    padding-left: 1px;

    @media (max-width: 768px) {
        padding-left: 10px;
        padding-top: 70px;
    }
`;

export const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
    padding-left: 50px;

    @media (max-width: 768px) {
        font-size: 28px;
        padding-left: 20px;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        font-size: 24px;
        justify-content: flex-start;
        padding-left: 0;
    }
`;

export const ExperienceContent = styled.div`
    display: flex;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin-right: 50px;
    padding-left: 50px;

    @media (max-width: 768px) {
        width: 100%;
        padding-left: 20px;
        margin-right: 0;
        margin-bottom: 20px;
    }

    @media (max-width: 480px) {
        padding-left: 0;
        justify-content: flex-start;
    }
`;

export const CompanyButton = styled.button<{ active: boolean }>`
    background: none;
    border: none;
    font-family: 'Kanit', sans-serif;
    color: ${({ active }) => (active ? '#00aaff' : 'white')};
    font-size: 18px;
    text-align: left;
    cursor: pointer;
    padding: 10px 0;
    border-left: ${({ active }) => (active ? '2px solid #00aaff' : 'none')};
    transition: color 0.3s ease;

    &:hover {
        color: #00aaff;
    }

    @media (max-width: 480px) {
        font-size: 16px;
        text-align: flex-start;
        padding: 8px 0;
    }
`;

export const ExperienceDetails = styled.div`
    flex: 1;

    @media (max-width: 768px) {
        padding: 0 20px;
    }

    @media (max-width: 480px) {
        padding: 0;
        justify-content: flex-start;
    }
`;

export const RoleTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 480px) {
        font-size: 20px;
        text-align: flex-start;
    }
`;

export const CompanyInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 480px) {

        text-align: flex-start;
    }
`;

export const CompanyName = styled.h3`
    color: #00aaff;
    font-size: 20px;

    @media (max-width: 480px) {
        font-size: 18px;
        text-align: flex-start;
    }
`;

export const CompanyLocation = styled.p`
    color: gray;
    font-size: 16px;

    @media (max-width: 480px) {
        font-size: 14px;
        text-align: flex-start;
    }
`;

export const Date = styled.p`
    color: gray;
    font-size: 16px;
    padding-right: 25px;

    @media (max-width: 480px) {
        font-size: 14px;
        padding-right: 0;
        text-align: flex-start;
        margin-top: 10px;
    }
`;

export const Responsibilities = styled.ul`
    margin-top: 20px;
    list-style-type: none;
    padding-left: 0;

    li {
        margin-bottom: 10px;
        &::before {
        content: "•";
        color: #00aaff;
        font-weight: bold;
        display: inline-block;
        width: 1em;
        }
    }

    @media (max-width: 480px) {
        li {
        font-size: 14px;
        text-align: flex-start;
        }
    }
`;