/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { createContext, useCallback, useContext, useState } from 'react';

interface UserInfo {
  id: number;
  name: string;
  contact: string;
  email: string;
  picture: string;
}

interface AuthContextData {
  contacts: UserInfo[];
  removeContact(contactId: number): void;
  addContact(contact: UserInfo): void;
  updateContact(contact: UserInfo, contactId: number): void;
}

export const ContactsContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const ContactsProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<UserInfo[]>(() => {
    const contacts: UserInfo[] = JSON.parse(
      localStorage.getItem('@ContactList: contacts') || '[]',
    );

    if (contacts) {
      return contacts;
    }

    return [
      {
        id: 1,
        name: 'Jonatas de Oliveira Coelho',
        contact: '55 61 98120-0652',
        email: 'jonatas.oliveiracoelho@gmail.com',
        picture: 'https://avatars.githubusercontent.com/u/16616459?v=4',
      },
      {
        id: 2,
        name: 'Arthur Serafim',
        contact: '55 61 98123-4567',
        email: 'arthurserafim@gmail.com',
        picture: 'https://avatars.githubusercontent.com/u/45845759?v=4',
      },
    ];
  });

  const addContact = useCallback(async (newContact: UserInfo) => {
    try {
      const contacts: UserInfo[] = JSON.parse(
        localStorage.getItem('@ContactList: contacts') || '[]',
      );

      const existentEmail = contacts.filter(
        contact => contact.email === newContact.email,
      );

      if (existentEmail) {
        throw new Error('Email already exists');
      }

      contacts.push(newContact);

      localStorage.setItem('@ContactList: contacts', JSON.stringify(contacts));

      setData(contacts);
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  const removeContact = useCallback(async (contactId: number) => {
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

  const updateContact = useCallback((contactNewInfo, contactId) => {
    try {
      const contacts: UserInfo[] = JSON.parse(
        localStorage.getItem('@ContactList: contacts') || '[]',
      );

      let contactToEdit = contacts.filter(contact => contact.id === contactId);

      contactToEdit = { ...contactToEdit, ...contactNewInfo };

      localStorage.setItem(
        '@ContactList: contacts',
        JSON.stringify({ ...contacts, contactToEdit }),
      );

      setData([...contacts, ...contactToEdit]);
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
