import React, { useCallback } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import {
  Container,
  UserAvatar,
  UserName,
  CardActions,
  EditIcon,
  DeleteIcon,
} from './ContactCard.styles';
import { useContactsContext } from '../../context/ContactsContext';

import placeholderUserAvatar from '../../assets/images/default-user-avatar.jpg';

interface ContactCardProp {
  contact: { id: string; name: string; picture: string };
}

const ContactCard: React.FC<ContactCardProp> = ({ contact }) => {
  const MySwal = withReactContent(Swal);
  const { removeContact } = useContactsContext();

  const handleDelete = useCallback(
    (contactId: string) => {
      MySwal.fire({
        title: <p>Want to delete?</p>,
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonColor: '#e83f5b',
      }).then(result => {
        if (result.isConfirmed) {
          removeContact(contactId);
          Swal.fire('Contact Deleted!', '', 'success');
        }
      });
    },
    [MySwal, removeContact],
  );

  return (
    <Container>
      <Link to={`/contact/${contact.id}`}>
        <div>
          <UserAvatar
            src={contact.picture ? contact.picture : placeholderUserAvatar}
            alt={contact.name}
          />
          <UserName>{contact.name}</UserName>
        </div>
        <CardActions>
          <Link to={`/contact/edit/${contact.id}`}>
            <Button size="small">
              <EditIcon size={20} />
            </Button>
          </Link>
          <Button
            size="small"
            onClick={e => {
              e.preventDefault();
              handleDelete(contact.id);
            }}
          >
            <DeleteIcon size={20} />
          </Button>
        </CardActions>
      </Link>
    </Container>
  );
};

export default ContactCard;
