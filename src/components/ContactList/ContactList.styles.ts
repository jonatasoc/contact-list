import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  margin-left: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AddContactButton = styled(Fab)`
  left: -9px;
  position: absolute;
  top: -35px;
`;
