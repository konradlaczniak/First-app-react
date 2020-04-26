
import React, { Component } from "react";

class App extends Component {
  state = {
    email: "",
    password: "",
    isSubmitted: false,
    isEmail: false,
    isPassword: false
  };

  handleLogin = (event) => {

    if(this.state.email === "" || this.state.password === "") {
      if (this.state.email === "")
        this.setState({ isEmail: true});
      else {
        this.setState({ isEmail: false});
        }
      if (this.state.password === "")
        this.setState({isPassword: true});
      else {
        this.setState({isPassword: false});
      }
    }
    else{
      this.setState({ isSubmitted: true });
    }
  };

  handleChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  handleChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogout = () => {
    this.setState({ password: "", email: "", isSubmitted: false });
  };

  render() {
    return (
      <>
        {this.state.isSubmitted === false && (
          <section>
            <div className="inputRow">
              <label>E-mail: </label>
              <input
                onChange={this.handleChangeEmail}
                value={this.state.email}
              />
              {this.state.isEmail === true && (
                <div className="validation">
                  <p>Please fill in your E-mail</p>
                </div>
              )}
            </div>

            <div className="inputRow">
              <label>Password: </label>
              <input
                onChange={this.handleChangePassword}
                type="password"
                value={this.state.password}
              />
              {this.state.isPassword === true && (
                <div className="validation">
                  <p>Please fill in your password</p>
                </div>
              )}
            </div>

            <button onClick={this.handleLogin}>Login</button>
          </section>
        )}

        {this.state.isSubmitted === true && (
          <section>
            <div>
              <label>E-mail:</label> {this.state.email}
            </div>

            <div>
              <label>Password:</label> {this.state.password}
            </div>
            <button onClick={this.handleLogout}>Logout</button>
          </section>
        )}
      </>
    );
  }
}

export default App;
