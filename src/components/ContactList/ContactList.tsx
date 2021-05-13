import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';

import {
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@material-ui/core';
import * as Yup from 'yup';
import { MdSend } from 'react-icons/md';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Container } from './ContactList.styles';
import api from '../../services/api';
import ContactCard from '../ContactCard';

interface UserInfo {
  id: string;
  name: string;
  contact: string;
  email: string;
  picture: string;
}

interface ValidationErrors {
  [key: string]: string;
}

const contacts = [
  'AB',
  'BC',
  'MB',
  'NB',
  'NL',
  'NT',
  'NU',
  'ON',
  'PE',
  'SK',
  'QC',
  'YT',
];

const ContactList: React.FC = () => {
  const [userInfo, setUserInfo] = useState({} as UserInfo);
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [validationErros, setValidationErros] = useState(
    {} as ValidationErrors,
  );

  const history = useHistory();

  return (
    <Container>
      <ContactCard />
    </Container>
  );
};

export default ContactList;
