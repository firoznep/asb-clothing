import React from 'react';
import '../styles/sign-in.scss';
import InputField from './InputField';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: {
      email: '',
      password: '',
      // },
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
        <InputField
          type="text"
          label="email"
          name="email"
          isValue={this.state.email.length}
          onChange={this.handleChange}
        />

        <InputField
          type="password"
          label="password"
          name="password"
          isValue={this.state.password.length}
          onChange={this.handleChange}
        />

        {/* <form onSubmit={this.handleSubmit}>
          <div className="email-control">
            <input
              type="email"
              id="email"
              name="email"
              onChange={this.handleChange}
              // autoComplete="off"
              required
            />

            <label
              className={`${
                this.state.email.length ? 'shrink' : ''
              } email-label`}
              htmlFor="email"
            >
              Email:{' '}
            </label>
          </div>

          <div className="password-control">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={this.handleChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form> */}
      </div>
    );
  }
}

export default SignIn;
