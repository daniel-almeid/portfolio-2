import styled from 'styled-components';

export const HeaderContainer = styled.header`
    font-family: 'Kanit', sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #121212;
    color: white;
    border-radius: 15px;
    z-index: 1000;

    @media (max-width: 768px) {
        padding: 8px 15px;
        flex-direction: column;
        align-items: flex-start;
    }

    @media (max-width: 360px) {
        padding: 5px 10px;
        flex-direction: column;
        align-items: flex-start;
    }
`;

export const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;

    @media (max-width: 768px) {
        font-size: 20px;
    }

    @media (max-width: 360px) {
        font-size: 14px;
    }
`;

export const Nav = styled.nav<{ showMenu: boolean }>`
    ul {
        display: flex;
        list-style: none;
        gap: 20px;

        @media (max-width: 768px) {
        flex-direction: column;
        gap: 5px;
        background-color: #121212;
        border-radius: 8px;
        width: 100%; 
        padding: ${({ showMenu }) => (showMenu ? '1px' : '0')};
        max-height: ${({ showMenu }) => (showMenu ? '300px' : '0')};
        opacity: ${({ showMenu }) => (showMenu ? '1' : '0')};
        transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.3s;
        overflow: hidden;
        align-items: flex-start;
        }

        @media (max-width: 360px) {
        gap: 3px;
        li {
            padding: 8px 10px;
            font-size: 16px;
        }
        }

        li {
        cursor: pointer;
        padding: 10px;
        font-size: 18px;
        color: white;
        font-weight: bold;
        transition: color 0.3s;

        &:hover {
            color: #00aaff;
        }

        @media (max-width: 768px) {
            text-align: left; 
        }
        }
    }

    @media (min-width: 769px) {
        ul {
        display: flex;
        max-height: none;
        opacity: 1;
        }
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    margin-right: 30px;

    @media (max-width: 768px) {
        margin-right: 0;
        align-self: flex-end;
    }

    @media (max-width: 360px) {
        gap: 8px;
        margin-right: 10px;
    }
`;

export const HamburgerIcon = styled.div`
    cursor: pointer;
    font-size: 35px;
    display: none;

    @media (max-width: 768px) {
        font-size: 28px;
        display: block;
        margin-right: 35px;
    }

    @media (max-width: 360px) {
        font-size: 20px;
        margin-right: 35px;
    }
`;