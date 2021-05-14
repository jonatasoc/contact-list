import React from 'react';
import { Box } from '@material-ui/core';

import { Container, Title } from './ContactEdit.styles';

import ContactEditForm from '../../components/ContactEditForm';

const ContactEdit: React.FC = () => {
  return (
    <Box boxShadow={1}>
      <Title>Edit Contact</Title>
      <Container>
        <ContactEditForm />
      </Container>
    </Box>
  );
};

export default ContactEdit;
