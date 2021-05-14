import React from 'react';
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

const img = 'https://avatars.githubusercontent.com/u/16616459?v=4';

const ContactCardDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Container>
      <UserAvatar src={img} alt="Jonatas de Oliveira Coelho" />
      <UserInfo>
        <UserName>Jonatas de Oliveira Coelho</UserName>
        <UserContactDetails>
          <strong>Contact: </strong> 55 61981200652
        </UserContactDetails>
        <UserContactDetails>
          <strong>Email: </strong> jonatas.oliveiracoelho@gmail.com
        </UserContactDetails>
      </UserInfo>
      <Link to="/">
        <BackButton>
          <FiArrowLeft size={25} style={{ marginRight: '10px' }} />
          Back
        </BackButton>
      </Link>
    </Container>
  );
};

export default ContactCardDetails;
