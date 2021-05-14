import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Home from './pages/Home';
import { ContactsProvider } from './context/ContactsContext';

const App: React.FC = () => {
  return (
    <ContactsProvider>
      <Router>
        <GlobalStyle />
        <Home />
      </Router>
    </ContactsProvider>
  );
};

export default App;
