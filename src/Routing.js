import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages, components, styles
import Nav from "./components/Nav";
import DetailedPost from "./pages/DetailedPost";
import EditProfile from "./pages/EditProfile";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Container from "./styles/Container";


const Routing = () => {
  return (
    <Router>
      <Nav />
      <Container>
        <Switch>
          <Route path="/explore" component={Explore} />
          <Route path="/p/:postId" component={DetailedPost} />
          <Route path="/accounts/edit" component={EditProfile} />
          <Route path="/:username" component={Profile} />
          <Route path="/" component={Home} />
        </Switch>
      </Container>
    </Router>
  );
};

export default Routing;
