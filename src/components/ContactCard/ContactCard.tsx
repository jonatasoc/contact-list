import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

import {
  Container,
  UserAvatar,
  UserName,
  CardActions,
  EditIcon,
  DeleteIcon,
} from './ContactCard.styles';

interface ContactCardProp {
  contact: { id: number; name: string; picture: string };
}

const ContactCard: React.FC<ContactCardProp> = ({ contact }) => {
  return (
    <Container>
      <Link to={`/contact/${contact.id}`}>
        <div>
          <UserAvatar src={contact.picture} alt={contact.name} />
          <UserName>{contact.name}</UserName>
        </div>
        <CardActions>
          <Link to={`/contact/edit/${contact.id}`}>
            <Button size="small">
              <EditIcon size={20} />
            </Button>
          </Link>
          <Button size="small">
            <DeleteIcon size={20} />
          </Button>
        </CardActions>
      </Link>
    </Container>
  );
};

export default ContactCard;
