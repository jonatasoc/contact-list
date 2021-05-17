/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useCallback, useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

interface UserInfo {
  id: string;
  name: string;
  contact: string;
  email: string;
  picture: any;
}

interface AuthContextData {
  contacts: UserInfo[];
  removeContact(contactId: string): void;
  addContact(contact: UserInfo): void;
  updateContact(contact: UserInfo): void;
}

export const ContactsContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const ContactsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<UserInfo[]>(() => {
    const contacts: UserInfo[] = JSON.parse(
      localStorage.getItem('@ContactList: contacts') || '[]',
    );

    if (contacts && contacts.length > 0) {
      return contacts;
    }

    const defaultContacts = [
      {
        id: uuidv4(),
        name: 'Jonatas de Oliveira Coelho',
        contact: '55 61 98120-0652',
        email: 'jonatas.oliveiracoelho@gmail.com',
        picture: 'https://avatars.githubusercontent.com/u/16616459?v=4',
      },
      {
        id: uuidv4(),
        name: 'Arthur Serafim',
        contact: '55 61 98123-4567',
        email: 'arthurserafim@gmail.com',
        picture: 'https://avatars.githubusercontent.com/u/45845759?v=4',
      },
    ];

    localStorage.setItem(
      '@ContactList: contacts',
      JSON.stringify(defaultContacts),
    );

    return defaultContacts;
  });

  const addContact = useCallback(async (newContact: UserInfo) => {
    try {
      const contacts: UserInfo[] = JSON.parse(
        localStorage.getItem('@ContactList: contacts') || '[]',
      );

      const existentEmail = contacts.filter(
        contact => contact.email === newContact.email,
      );

      if (existentEmail.length > 0) {
        throw new Error('Email already exists');
      }

      // eslint-disable-next-line no-param-reassign
      newContact.id = uuidv4();

      contacts.push(newContact);

      localStorage.setItem('@ContactList: contacts', JSON.stringify(contacts));

      setData(contacts);
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  const removeContact = useCallback(async (contactId: string) => {
    try {
      const contacts: UserInfo[] = JSON.parse(
        localStorage.getItem('@ContactList: contacts') || '[]',
      );

      const contactToRemove = contacts.filter(
        contact => contact.id === contactId,
      );

      if (!contactToRemove) {
        throw new Error('Contact not exists');
      }

      const contactsFiltered = contacts.filter(
        contact => contact.id !== contactId,
      );

      localStorage.setItem(
        '@ContactList: contacts',
        JSON.stringify(contactsFiltered),
      );

      setData(contactsFiltered);
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  const updateContact = useCallback(contactNewInfo => {
    try {
      const contacts: UserInfo[] = JSON.parse(
        localStorage.getItem('@ContactList: contacts') || '[]',
      );

     const newData = contacts.map(contact => contact.id === contactNewInfo.id 
       ? 
        {...contact, contactNewInfo} : contact
      );

      localStorage.setItem(
        '@ContactList: contacts',
        JSON.stringify(newData),
      );

      setData(newData);
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  return (
    <ContactsContext.Provider
      value={{
        contacts: data,
        addContact,
        removeContact,
        updateContact,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

function useContactsContext(): AuthContextData {
  const context = useContext(ContactsContext);

  if (!context) {
    throw new Error(
      'useContactsContext must be used within an ContactsProvider',
    );
  }

  return context;
}

export { useContactsContext, ContactsProvider };
