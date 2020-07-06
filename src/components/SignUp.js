import React from 'react';
import InputField from './InputField';
import CustomButton from './Button';

import '../styles/signup.scss';
import { auth, createUserProfileDocument } from '../firebase/firebase.util';

class SignUp extends React.Component {
  state = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert('Password is not matching');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <p>SignUp with your email account</p>

        <form onSubmit={this.handleSubmit}>
          <InputField
            type="text"
            name="displayName"
            value={displayName}
            label="displayName"
            onChange={this.handleChange}
            required
          />

          <InputField
            type="email"
            name="email"
            label="email"
            onChange={this.handleChange}
            value={email}
            required
          />

          <InputField
            type="password"
            name="password"
            label="password"
            onChange={this.handleChange}
            value={password}
            required
          />

          <InputField
            type="password"
            name="confirmPassword"
            label="confirmPassword"
            onChange={this.handleChange}
            value={confirmPassword}
            required
          />

          <CustomButton type="submit"> SignUp </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
