import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
  width: 100%;
  margin: 0 auto;

  background-color: var(--white);

  padding: 0 50px;

  main {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

export const Title = styled.p`
  color: var(--blue);

  font-size: 30px;
  letter-spacing: 1px;

  margin-bottom: 40px;
`;

export const HeroImg = styled.img`
  color: var(--blue);
  width: 600px;

  font-size: 30px;
  letter-spacing: 1px;

  margin-bottom: 40px;
`;
