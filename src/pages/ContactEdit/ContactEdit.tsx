import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Box } from '@material-ui/core';

import { Container, Title } from './ContactEdit.styles';

import ContactEditForm from '../../components/ContactEditForm';
import { useContactsContext } from '../../context/ContactsContext';

interface ContactInfo {
  id: number;
  name: string;
  contact: string;
  email: string;
  picture: string;
}

const ContactEdit: React.FC = () => {
  const [contact, setContact] = useState({} as ContactInfo);

  const { id } = useParams<{ id: string }>();
  const { contacts } = useContactsContext();

  useEffect(() => {
    const findedContact = contacts.find(item => String(item.id) === id);

    if (!findedContact) return;

    setContact(findedContact);
  }, [id, contacts]);

  return (
    <Box boxShadow={1}>
      <Title>Edit Contact</Title>
      <Container>
        <ContactEditForm contact={contact} />
      </Container>
    </Box>
  );
};

export default ContactEdit;
