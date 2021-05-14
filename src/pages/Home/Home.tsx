import React from 'react';
import { Box } from '@material-ui/core';

import { Container, HeroImg, Title } from './Home.styles';
import Routes from '../../routes';

import heroImg from '../../assets/images/personal_email.svg';

const Home: React.FC = () => {
  return (
    <Box boxShadow={1}>
      <Title>Contact List</Title>
      <Container>
        <Routes />
        <HeroImg src={heroImg} />
      </Container>
    </Box>
  );
};

export default Home;
