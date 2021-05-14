import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import {
  Container,
  UserAvatar,
  UserName,
  UserContactDetails,
  UserInfo,
  BackButton,
} from './ContactCardDetails.styles';
import { useContactsContext } from '../../context/ContactsContext';

interface ContactInfo {
  id: number;
  name: string;
  contact: string;
  email: string;
  picture: string;
}

const ContactCardDetails: React.FC = () => {
  const [contact, setContact] = useState({} as ContactInfo);

  const { id } = useParams<{ id: string }>();
  const { contacts } = useContactsContext();

  useEffect(() => {
    const findedContact = contacts.find(item => String(item.id) === id);

    if (!findedContact) return;

    setContact(findedContact);
  }, [id, contacts]);

  return (
    <Container>
      {contact && (
        <>
          <UserAvatar src={contact.picture} alt={contact.name} />
          <UserInfo>
            <UserName>{contact && contact.name} </UserName>
            <UserContactDetails>
              <strong>Contact: </strong> {contact && contact.contact}
            </UserContactDetails>
            <UserContactDetails>
              <strong>Email: </strong> {contact && contact.email}
            </UserContactDetails>
          </UserInfo>
          <Link to="/">
            <BackButton>
              <FiArrowLeft size={25} style={{ marginRight: '10px' }} />
              Back
            </BackButton>
          </Link>
        </>
      )}
    </Container>
  );
};

export default ContactCardDetails;
