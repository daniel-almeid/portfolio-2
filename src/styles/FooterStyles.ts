import styled from 'styled-components';


export const FooterContainer = styled.footer`
    font-family: 'Kanit', sans-serif;
    width: 100%;
    background-color: #1e1e1e;
    color: white;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        text-align: center;
    }
`;

export const Logo = styled.div`
    font-size: 14px;
    font-weight: 100;

    @media (max-width: 768px) {
        font-size: 14px;
        margin-bottom: 10px;
    }
`;