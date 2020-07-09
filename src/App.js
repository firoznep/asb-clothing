import React from 'react';
import HomePage from './pages/HomePage';
import { Route, Switch, Redirect } from 'react-router-dom';

import ShopPage from './pages/ShopPage';
import NavBar from './components/NavBar';
import PageNotFound from './pages/PageNotFound';
import SigninSignout from './pages/SigninSignout';

import './styles/app.scss';
import { auth, createUserProfileDocument } from './firebase/firebase.util';
import { connect } from 'react-redux';
import { userAction } from './reducers/users/user.action';

class App extends React.Component {
  // state = {
  //   currentUser: null,
  // };

  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            photoURL: userAuth.photoURL,
            ...snapshot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div style={{ margin: '50px auto' }}>
        <NavBar
          brand="ASB"
          shop="Shop"
          home="HomePage"
          signin="SignIn"
          // currentUser={this.state.currentUser}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/asb-clothing" component={HomePage} />
          <Route exact path="/asb-clothing/shop" component={ShopPage} />
          <Route
            exact
            path="/asb-clothing/signin-signout"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SigninSignout />
            }
            // component={SigninSignout}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(userAction(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
