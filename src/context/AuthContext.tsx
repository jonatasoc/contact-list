import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';
// import { login } from '../services/login.service';

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextData {
  user: User;
  token: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface AuthState {
  token: string;
  user: User;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ContactList: token');
    const user = localStorage.getItem('@ContactList: user');

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`;

      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      // const response = await login(email, password);
      const response = {
        data: { token: '', user: { id: '', name: '', email: '', avatar: '' } },
      };

      const { token, user } = response.data;

      localStorage.setItem('@ContactList: token', token);
      localStorage.setItem('@ContactList: user', JSON.stringify(user));

      api.defaults.headers.authorization = `Bearer ${token}`;

      setData({ token, user });
    } catch (err) {
      throw new Error(err);
    }
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ContactList: token');
    localStorage.removeItem('@ContactList: user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem('@ContactList: user', JSON.stringify(user));

      setData({
        ...data,
        user,
      });
    },
    [setData, data],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { useAuth, AuthProvider };
