import React, { useState } from "react";
import Login from "./Login";
import ResetPassword from "./ResetPassword";
import Signup from "./Signup";

const Auth = () => {
  const [auth, setAuth] = useState("LOGIN");

  const login = () => setAuth("LOGIN");
  const signup = () => setAuth("SIGNUP");
  const reset = () => setAuth("RESET");

  if (auth === "LOGIN") {
    return <Login signup={signup} reset={reset} />;
  }

  if (auth === "SIGNUP") {
    return <Signup login={login} />;
  }

  if (auth === "RESET") {
    return <ResetPassword login={login} />;
  }

};

export default Auth;
