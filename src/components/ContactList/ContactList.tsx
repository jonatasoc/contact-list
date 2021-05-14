import React, { useEffect, useState } from 'react';

import { FiPlus } from 'react-icons/fi';
import { useHistory } from 'react-router';

import { Container, AddContactButton } from './ContactList.styles';
import ContactCard from '../ContactCard';
import { useContactsContext } from '../../context/ContactsContext';

interface ContactInfo {
  id: number;
  name: string;
  contact: string;
  email: string;
  picture: string;
}

const ContactList: React.FC = () => {
  const [contactsData, setContactsData] = useState<ContactInfo[]>([]);
  const { contacts } = useContactsContext();

  useEffect(() => {
    setContactsData(contacts);
  }, [contacts]);

  return (
    <Container>
      {contactsData.map(contact => (
        <ContactCard contact={contact} />
      ))}
      <AddContactButton size="medium" color="secondary" aria-label="add">
        <FiPlus size={35} />
      </AddContactButton>
    </Container>
  );
};

export default ContactList;
