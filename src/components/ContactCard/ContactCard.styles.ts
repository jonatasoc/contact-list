import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { MdDelete, MdModeEdit } from 'react-icons/md';

export const Container = styled(Card)`
  width: 100%;
  max-width: 600px;
  padding: 8px;

  cursor: pointer;

  transition: all 0.3s;

  margin-top: 15px;

  div:first-child {
    display: flex;
    align-items: center;
  }

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
    z-index: 10;
  }

  button {
    min-width: 40px;
  }
`;

export const UserAvatar = styled.img`
  width: 60px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 10px;
`;

export const CardActions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px;
  align-items: center;
`;

export const EditIcon = styled(MdModeEdit)`
  color: var(--text);
`;

export const DeleteIcon = styled(MdDelete)`
  color: var(--red);
`;
