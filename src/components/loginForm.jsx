import React, { Component } from "react";

class LoginForm extends Component {
  username = React.createRef();

  state = {
    account: {
      username: "",
      password: ""
    }
  };

  //   componentDidMount() {
  //     //this.username.current.focus();
  //   }

  handleSubmit = e => {
    e.preventDefault();

    // Call the server
    const username = this.username.current.value; // document.getElementById('username').value;
    console.log("Submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    // handleChange = (e) =>
    const account = { ...this.state.account };
    account[input.name] = input.value; //e.currentTarget.name
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="from-group">
            <label htmlFor="username">Username</label>
            <input
              autoFocus
              value={account.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
              className="fom-control"
            />
          </div>
          <div className="from-group">
            <label htmlFor="password">Password</label>
            <input
              value={account.password}
              onChange={this.handleChange}
              name="password"
              id="password"
              type="text"
              className="fom-control"
            />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
