import React from 'react';
import { Box } from '@material-ui/core';

import { Container, Title, HeroImg } from './Home.styles';
import ContactUsForm from '../../components/ContactList';

import heroImg from '../../assets/images/personal_email.svg';

const Home: React.FC = () => {
  return (
    <Box boxShadow={1}>
      <Container>
        <Title>Contact List</Title>
        <main>
          <ContactUsForm />
          <HeroImg src={heroImg} />
        </main>
      </Container>
    </Box>
  );
};

export default Home;
