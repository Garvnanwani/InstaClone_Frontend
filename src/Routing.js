import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Nav from "./components/Nav";
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./components/ResetPassword";
import Signup from "./components/Signup";
import DetailedPost from "./pages/DetailedPost";
import EditProfile from "./pages/EditProfile";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import NewPassword from "./pages/NewPassword";
import Profile from "./pages/Profile";
import Container from "./styles/Container";



const Routing = () => {
  return (
    <Router>
      <Nav />
      <Container>
        <Switch>
          <PrivateRoute path="/explore" component={Explore} />
          <PrivateRoute path="/p/:postId" component={DetailedPost} />
          <PrivateRoute path="/accounts/edit" component={EditProfile} />
          <PrivateRoute path="/:username" component={Profile} />
          <PrivateRoute path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reset-password" component={ResetPassword} />
          <Route path="/reset/:token" component={NewPassword} />
        </Switch>
      </Container>
    </Router>
  );
};

export default Routing;
