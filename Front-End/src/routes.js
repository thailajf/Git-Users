import React from 'react';
import { Switch, Route } from 'react-router-dom';

import User from './Page/User';
import UsersList  from './Page/UsersList';


export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={UsersList} />
      <Route path="/user" exact component={User} />

    </Switch>
  );
}