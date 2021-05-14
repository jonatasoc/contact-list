import React from 'react';
import { Box } from '@material-ui/core';

import { Container, Title } from './ContactAdd.styles';

import ContactEditForm from '../../components/ContactEditForm';

const ContactAdd: React.FC = () => {
  return (
    <Box boxShadow={1}>
      <Title>Add Contact</Title>
      <Container>
        <ContactEditForm />
      </Container>
    </Box>
  );
};

export default ContactAdd;
