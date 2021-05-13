import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export const Container = styled(Card)`
  width: 400px;
  max-width: 450px;
`;

export const UserAvatar = styled.img`
  width: 60px;
  height: auto;
  object-fit: cover;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
`;
