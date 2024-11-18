import styled from 'styled-components';

export const HomeContainer = styled.section`
    font-family: 'Kanit', sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 80px 20px;
    background-color: #010101;
    color: white;

    @media (max-width: 768px) {
        flex-direction: column-reverse;
        align-items: center; 
        text-align: center; 
    }
`;

export const Info = styled.div`
    h1 {
        padding-left: 50px; 
        font-size: 38px;
        margin: 0;
    }

    h2 {
        padding-left: 50px; 
        font-size: 32px;
        font-weight: 300;
        margin: 0;
    }

    p {
        padding-left: 50px; 
        margin: 20px 0;
    }

    div {
        padding-left: 50px; 
        display: flex;
        gap: 20px;
        font-size: 32px;
        margin-top: 20px;
    }

    @media (max-width: 768px) {
        h1, h2, p, div {
        padding-left: 0;
        padding-top: 20px;
        }
        div {
        justify-content: center;
        }
    }
`;

export const ProfileImage = styled.img`
    width: 300px;
    border-radius: 50%;
    margin-right: 150px; 
    margin-top: 80px;

    @media (max-width: 768px) {
        margin-left: 155px;
        width: 200px;
    }
`;