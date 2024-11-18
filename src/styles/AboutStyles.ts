import styled from 'styled-components';

export const AboutContainer = styled.section`
  font-family: 'Kanit', sans-serif;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: #010101;
  color: #fff;
  padding-left: 50px;
  padding-bottom: 15px;

  @media (max-width: 768px) {
    padding-left: 20px;
    justify-content: flex-start;
    height: auto;
    padding-top: 70px;
  }
`;

export const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 28px;

  @media (max-width: 768px) {
    font-size: 26px;
    justify-content: flex-start;
  }

  @media (max-width: 480px) {
    font-size: 26px;
    text-align: center;
  }
`;

export const Text = styled.p`
  margin: 10px 0;
  text-align: left;
  max-width: 1000px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin: 8px 0;
    max-width: 100%;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    text-align: flex-start;
    justify-content: flex-start;
    max-width: 90%;
  }
`;

export const LocationText = styled(Text)`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  background: linear-gradient(90deg, #00aaff, #00aaff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    justify-content: center;
    font-size: 20px;
  }
`;

export const GradientText = styled.span`
  font-weight: bold;
  background: linear-gradient(90deg, #00aaff, #00aaff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 18px;
`;

export const Button = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  font-weight: bold;
  background: linear-gradient(90deg, #00aaff, #00aaff);
  color: white;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(90deg, #0099cc, #0099cc);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
  }

  @media (max-width: 480px) {
    width: 85%;
    text-align: center;
    padding: 10px;
    font-size: 18px;
  }
`;
