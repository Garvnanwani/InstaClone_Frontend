import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import Login from "./components/Login";
import NewPassword from "./components/NewPassword";
import PrivateRoute from "./components/PrivateRoute";
import ResetPassword from "./components/ResetPassword";
import Signup from "./components/Signup";
import { ThemeContext } from "./context/ThemeContext";
import DetailedPost from "./pages/DetailedPost";
import EditProfile from "./pages/EditProfile";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer autoClose={2000} closeButton={false} />
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
    </StyledThemeProvider>
  );
};

export default App;
