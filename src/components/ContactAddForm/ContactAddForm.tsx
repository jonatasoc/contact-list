/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { ChangeEvent, useCallback, useState } from 'react';
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
} from './ContactAddForm.styles';

import placeholderUserAvatar from '../../assets/images/default-user-avatar.jpg';
import { useContactsContext } from '../../context/ContactsContext';

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

const ContactAddForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<ContactInfo>({} as ContactInfo);
  const [isLoadingAvatar, setIsLoadingAvatar] = React.useState<boolean>(false);
  const [validationErros, setValidationErros] = useState(
    {} as ValidationErrors,
  );

  const { addContact } = useContactsContext();
  const history = useHistory();

  const handleAvatarChange = useCallback(
    // eslint-disable-next-line consistent-return
    async (e: ChangeEvent<HTMLInputElement>) => {
      setIsLoadingAvatar(true);
      if (e.target!.files![0]) {
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(e.target!.files![0]);
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
        await addContact(userInfo);
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
    [addContact, userInfo, history],
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
            Add
          </Button>
        </ButtonsContainer>
      </form>
    </Container>
  );
};

export default ContactAddForm;
