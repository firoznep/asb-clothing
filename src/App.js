import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';

import ShopPage from './pages/ShopPage';
import NavBar from './components/NavBar';
import PageNotFound from './pages/PageNotFound';
import SigninSignout from './pages/SigninSignout';

class App extends React.Component {
  render() {
    return (
      <div style={{ margin: '50px auto' }}>
        <NavBar brand="ASB" shop="Shop" home="HomePage" signin="SignIn" />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/asb-clothing" component={HomePage} />
          <Route exact path="/asb-clothing/shop" component={ShopPage} />
          <Route
            exact
            path="/asb-clothing/signin-signout"
            component={SigninSignout}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
