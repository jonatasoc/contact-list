import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

export const Container = styled(Card)`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div:first-child {
    display: flex;
    align-items: center;
  }

  &:first-child {
    margin-top: 15px;
  }

  & + & {
    margin-top: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiFormControl-root.MuiTextField-root {
      width: 100%;
    }

    .MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-formControl {
      margin-bottom: 10px;
    }
  }
`;

export const EditAvatarContainer = styled.div`
  position: relative;
  margin-bottom: 40px;

  @media only screen and (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const AvatarInputButton = styled.label`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 0;
  border: 0;
  bottom: 40px;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--white);
  background: var(--blue);

  input {
    display: none;
  }

  svg {
    width: 20px;
    height: 20px;

    color: var(--road);
  }

  &:hover {
    opacity: 0.9;
  }
`;

export const UserInfo = styled.div`
  margin-top: 30px;
`;

export const UserAvatar = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  text-align: center;
`;

export const UserContactDetails = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.54);
  margin-top: 10px;
  text-align: center;
`;

export const ButtonsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;

  button:first-child {
    margin-right: 15px;
  }
`;

export const SaveButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  background-color: var(--blue);

  font-size: 1rem;
`;
export const BackButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-light);

  font-size: 1rem;
`;
