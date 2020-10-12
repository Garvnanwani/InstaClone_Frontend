import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NewPassword from "../pages/NewPassword";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";

// const Auth = () => {
//   const [auth, setAuth] = useState("LOGIN");

//   const login = () => setAuth("LOGIN");
//   const signup = () => setAuth("SIGNUP");
//   const reset = () => setAuth("RESET");

//   if (auth === "LOGIN") {
//     return <Login signup={signup} reset={reset} />;
//   }

//   if (auth === "SIGNUP") {
//     return <Signup login={login} />;
//   }

//   if (auth === "RESET") {
//     return <ResetPassword login={login} />;
//   }

// };


const Auth = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/reset-password" component={ResetPassword} />
        <Route path="/:token" component={NewPassword} />
      </Switch>
    </Router>
  );
};

export default Auth;
