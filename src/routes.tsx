import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactCardDetails from './components/ContactCardDetails';
import ContactEditForm from './components/ContactEditForm';
import ContactList from './components/ContactList';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/contact/edit/:id" component={ContactEditForm} />
      <Route exact path="/contact/:id" component={ContactCardDetails} />
      <Route exact path="/" component={ContactList} />
    </Switch>
  );
};

export default Routes;
