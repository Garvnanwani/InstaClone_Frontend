import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import NewPassword from "./components/NewPassword";
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./components/ResetPassword";
import Signup from "./components/Signup";
import DetailedPost from "./pages/DetailedPost";
import EditProfile from "./pages/EditProfile";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

const Routing = () => {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/explore" component={Explore} />
        <PrivateRoute path="/p/:postId" component={DetailedPost} />
        <PrivateRoute path="/accounts/edit" component={EditProfile} />
        <PrivateRoute path="/u/:username" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/reset/:token" component={NewPassword} />
      </Switch>
    </Router>
  );
};

export default Routing;
