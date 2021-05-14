import React, { ChangeEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { MdModeEdit, MdSave } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import {
  Container,
  EditAvatarContainer,
  AvatarInputButton,
  UserAvatar,
  UserName,
  UserContactDetails,
  UserInfo,
  ButtonsContainer,
  BackButton,
  SaveButton,
} from './ContactEditForm.styles';

const img = 'https://avatars.githubusercontent.com/u/16616459?v=4';

interface UserInfo {
  id: string;
  name: string;
  contact: string;
  email: string;
  picture: string;
}

const ContactEditForm: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({} as UserInfo);
  const [isLoadingAvatar, setIsLoadingAvatar] = React.useState<boolean>(false);
  const [isLoadingSubmitButton, setIsLoadingSubmitButton] =
    React.useState<boolean>(false);

  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const data = new FormData();

      data.append('avatar', e.target.files[0]);

      // api.patch('/users/avatar', data).then(response => {
      //   updateUser(response.data);
      // });
    }
  }, []);

  return (
    <Container>
      <form onSubmit={(e: any) => ''}>
        <EditAvatarContainer>
          <UserAvatar src={img} alt="Jonatas de Oliveira Coelho" />

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

        <UserInfo>
          <UserName>Jonatas de Oliveira Coelho</UserName>
          <UserContactDetails>
            <strong>Contact: </strong> 55 61981200652
          </UserContactDetails>
          <UserContactDetails>
            <strong>Email: </strong> jonatas.oliveiracoelho@gmail.com
          </UserContactDetails>
        </UserInfo>
        <ButtonsContainer>
          <Link to="/">
            <BackButton>
              <FiArrowLeft size={25} style={{ marginRight: '10px' }} />
              Back
            </BackButton>
          </Link>
          <SaveButton type="submit">
            <MdSave size={25} style={{ marginRight: '10px' }} />
            Save
          </SaveButton>
        </ButtonsContainer>
      </form>
    </Container>
  );
};

export default ContactEditForm;
