import React from 'react';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import '../styles/signin-signout.scss';

const SigninSignout = () => {
  return (
    <div className="signin-signout">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninSignout;
