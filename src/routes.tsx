import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactCardDetails from './components/ContactCardDetails';
import ContactList from './components/ContactList';
import ContactAdd from './pages/ContactAdd';
import ContactEdit from './pages/ContactEdit';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/contact/edit/:id" component={ContactEdit} />
      <Route exact path="/contact/:id" component={ContactCardDetails} />
      <Route exact path="/contact/add" component={ContactAdd} />
      <Route exact path="/" component={ContactList} />
    </Switch>
  );
};

export default Routes;
