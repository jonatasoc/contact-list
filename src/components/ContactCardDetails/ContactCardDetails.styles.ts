import styled from 'styled-components';
import Card from '@material-ui/core/Card';

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

export const BackButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  color: var(--text-light);

  font-size: 1.2rem;
`;
