import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';

import { Container, AddContactButton } from './ContactList.styles';
import ContactCard from '../ContactCard';
import { useContactsContext } from '../../context/ContactsContext';

interface ContactInfo {
  id: string;
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
        <ContactCard contact={contact} key={contact.id} />
      ))}
      <Link to="/contact/add">
        <AddContactButton size="medium" color="secondary" aria-label="add">
          <FiPlus size={35} />
        </AddContactButton>
      </Link>
    </Container>
  );
};

export default ContactList;
