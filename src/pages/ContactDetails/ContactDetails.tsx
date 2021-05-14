import React from 'react';
import { Box } from '@material-ui/core';

import { Container, Title } from './ContactDetails.styles';

import ContactCardDetails from '../../components/ContactCardDetails';

const ContactDetails: React.FC = () => {
  return (
    <Box boxShadow={1}>
      <Title>Contact Details</Title>
      <Container>
        <ContactCardDetails />
      </Container>
    </Box>
  );
};

export default ContactDetails;
