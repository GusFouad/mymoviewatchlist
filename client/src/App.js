import React, { Component } from "react";
import { Route } from "react-router-dom";
import jwtDecode from "jwt-decode";
import MyMovieList from "./components/MyMovieList";
import LoginForm from "./components/loginForm";
import Logout from "./components/logoutForm";
import RegisterForm from "./components/registerform";
import NavBar from "./components/navBar";
import Search from "./components/search.jsx";
import "./App.css";
class App extends Component {
  state = {};
  componentDidMount() {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      console.log(user);
      this.setState({ user });
    } catch (ex) {}
  }
  render() {
    return (
      <React.Fragment>
        <NavBar user={this.state.user} />

        <main className="container">
          <Route path="/mylist" component={MyMovieList} />
          <Route path="/login" component={LoginForm} />
          <Route path="/logout" component={Logout} />
          <Route path="/search" component={Search} />
          <Route path="/register" component={RegisterForm} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
