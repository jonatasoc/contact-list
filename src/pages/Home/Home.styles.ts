import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  height: 100vh;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;

  background-color: var(--white);

  @media only screen and (max-width: 600px) {
    width: 100%;
  }

  > div {
    height: 100vh;
    width: 100%;

    max-width: 400px;
  }
`;

export const HeroImg = styled.img`
  color: var(--blue);
  width: 50%;
  max-width: 600px;
  padding: 10px;

  align-self: flex-start;

  font-size: 30px;
  letter-spacing: 1px;

  margin-bottom: 40px;
  margin-right: -150px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Title = styled.p`
  color: var(--white);
  background: var(--blue);
  width: 100%;
  height: 120px;
  text-align: center;
  padding-top: 40px;

  font-size: 30px;
  letter-spacing: 1px;
`;
