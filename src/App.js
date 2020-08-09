import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, Cart } from './pages';
import { Header } from './components';

const App = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
    </div>
  );
};

export default App;
