import React from 'react';
import '../styles/sign-in.scss';
import InputField from './InputField';
import CustomButton from './Button';
import { signInWithGoogle } from '../firebase/firebase.util';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
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

        <form>
          <InputField
            type="email"
            label="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
            autoComplete="off"
          />

          <InputField
            type="password"
            label="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />

          <CustomButton type="submit">SignIn</CustomButton>
        </form>
        <CustomButton onClick={signInWithGoogle}>SignInWithGoogle</CustomButton>
      </div>
    );
  }
}

export default SignIn;
