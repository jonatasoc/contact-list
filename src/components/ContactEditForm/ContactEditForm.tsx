import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MdModeEdit, MdSave } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Button, TextField } from '@material-ui/core';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import {
  Container,
  EditAvatarContainer,
  AvatarInputButton,
  UserAvatar,
  ButtonsContainer,
  BackButton,
} from './ContactEditForm.styles';

import { useContactsContext } from '../../context/ContactsContext';

import placeholderUserAvatar from '../../assets/images/default-user-avatar.jpg';

interface ValidationErrors {
  [key: string]: string;
}

interface ContactInfo {
  id: string;
  name: string;
  contact: string;
  email: string;
  picture: any;
}

interface ContactEditFormProps {
  contact?: ContactInfo;
}

const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast',
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
});

const ContactEditForm: React.FC<ContactEditFormProps> = ({ contact }) => {
  const [userInfo, setUserInfo] = useState<ContactInfo>({} as ContactInfo);
  const [isLoadingAvatar, setIsLoadingAvatar] = React.useState<boolean>(false);
  const [validationErros, setValidationErros] = useState(
    {} as ValidationErrors,
  );

  const { updateContact } = useContactsContext();
  const history = useHistory();

  useEffect(() => {
    if (contact) {
      setUserInfo(contact);
    }
  }, [contact]);

  const handleAvatarChange = useCallback(
    // eslint-disable-next-line consistent-return
    async (e: ChangeEvent<HTMLInputElement>) => {
      setIsLoadingAvatar(true);
      if (e.target.files && e.target.files[0]) {
        const picutre = e.target.files[0];

        new Promise(resolve => {
          const reader = new FileReader();
          reader.readAsDataURL(picutre);
          reader.onload = () => resolve(reader.result);
        }).then(result => {
          setUserInfo({
            ...userInfo,
            picture: result,
          });
        });
        setIsLoadingAvatar(false);
      }
    },
    [userInfo],
  );

  const handleSubmit = useCallback(
    async e => {
      e.preventDefault();

      try {
        updateContact(userInfo);
        await Toast.fire({
          icon: 'success',
          title: '<span style="color: white">Saved!<span> ',
          background: '#4cd62b',
          iconColor: 'white',
        });

        history.push('/');
      } catch (err) {
        await Toast.fire({
          icon: 'error',
          title: `<span style="color: white">${err}<span> `,
          background: '#e83f5b',
          iconColor: 'white',
          timer: 4000,
        });
      }
    },
    [updateContact, userInfo, history],
  );

  return (
    <Container>
      <form onSubmit={(e: any) => handleSubmit(e)}>
        <EditAvatarContainer>
          <UserAvatar
            src={userInfo.picture ? userInfo.picture : placeholderUserAvatar}
            alt={userInfo.picture ? userInfo.name : ''}
          />

          <AvatarInputButton htmlFor="avatar">
            {isLoadingAvatar ? (
              <AiOutlineLoading3Quarters className="lds-dual-ring" />
            ) : (
              <MdModeEdit />
            )}
            <input
              type="file"
              name=""
              id="avatar"
              onLoad={handleAvatarChange}
              onChange={handleAvatarChange}
              accept="image/x-png,image/jpeg, image/jpg"
            />
          </AvatarInputButton>
        </EditAvatarContainer>

        <TextField
          label="Name"
          variant="outlined"
          required
          value={userInfo.name}
          onChange={e => {
            setUserInfo({
              ...userInfo,
              name: e.target.value,
            });

            setValidationErros({
              ...validationErros,
              name: '',
            });
          }}
          error={!!validationErros.name}
          helperText={validationErros.name}
        />
        <TextField
          label="Contact"
          variant="outlined"
          required
          type="text"
          value={userInfo.contact}
          onChange={e =>
            setUserInfo({
              ...userInfo,
              contact: e.target.value,
            })
          }
          error={!!validationErros.contact}
          helperText={validationErros.contact}
        />
        <TextField
          label="Email"
          variant="outlined"
          required
          type="email"
          value={userInfo.email}
          onChange={e =>
            setUserInfo({
              ...userInfo,
              email: e.target.value,
            })
          }
          error={!!validationErros.email}
          helperText={validationErros.email}
        />
        <ButtonsContainer>
          <Link to="/">
            <BackButton>
              <FiArrowLeft size={25} style={{ marginRight: '10px' }} />
              Back
            </BackButton>
          </Link>
          <Button
            variant="contained"
            color="primary"
            endIcon={<MdSave />}
            type="submit"
          >
            Save
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  );
};

export default ContactEditForm;
