import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Switch } from 'react-router-dom';

import ShopPage from './pages/ShopPage';
import NavBar from './components/NavBar';
import PageNotFound from './pages/PageNotFound';
import SigninSignout from './pages/SigninSignout';

import './styles/app.scss';
import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {
  state = {
    currentUser: null,
  };

  unSubscribeGoogleAuth = null;

  componentDidMount() {
    this.unSubscribeGoogleAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.setState(
            {
              currentUser: {
                id: snapshot.id,
                photoURL: userAuth.photoURL,
                ...snapshot.data(),
              },
            },
            () => console.log(this.state)
          );
        });
      } else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeGoogleAuth();
  }

  render() {
    return (
      <div style={{ margin: '50px auto' }}>
        <NavBar
          brand="ASB"
          shop="Shop"
          home="HomePage"
          signin="SignIn"
          currentUser={this.state.currentUser}
        />
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
