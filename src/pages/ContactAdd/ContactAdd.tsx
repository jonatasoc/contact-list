import React from 'react';
import { Box } from '@material-ui/core';

import { Container, Title } from './ContactAdd.styles';

import ContactAddForm from '../../components/ContactAddForm';

const ContactAdd: React.FC = () => {
  return (
    <Box boxShadow={1}>
      <Title>Add Contact</Title>
      <Container>
        <ContactAddForm />
      </Container>
    </Box>
  );
};

export default ContactAdd;
