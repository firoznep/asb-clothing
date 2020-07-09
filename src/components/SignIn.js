import React from 'react';
import '../styles/sign-in.scss';
import InputField from './InputField';
import CustomButton from './Button';
import { signInWithGoogle, auth } from '../firebase/firebase.util';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.createUserWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (err) {
      console.log('NOT LOGEDIN!', err);
    }
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>SignIn with your account</p>

        <form onSubmit={this.handleSubmit}>
          <InputField
            type="email"
            label="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <InputField
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <div className="custom-btn-container">
            <CustomButton type="submit">SignIn</CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle}>
              SignInWithGoogle
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
