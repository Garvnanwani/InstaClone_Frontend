import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import { UserContext } from "../context/UserContext";
import useInput from "../hooks/useInput";
import { client } from "../utils";
import { FormWrapper } from "./Login";

const Signup = () => {
  const { setUser } = useContext(UserContext);
  const email = useInput("");
  const username = useInput("");
  const password = useInput("");
  const history = useHistory();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!email.value || !password.value || !username.value) {
      return toast.error("Please fill in all the fields");
    }

    if (username.value === "explore") {
      return toast.error(
        "The username you entered is not acceptable, try again"
      );
    }

    const re = /^[a-z0-9]+$/i;
    if (re.exec(username.value) === null) {
      return toast.error(
        "The username you entered is not acceptable, try again"
      );
    }

    const body = {
      email: email.value,
      password: password.value,
      username: username.value,
    };

    try {
      const { token } = await client("/auth/signup", { body });
      localStorage.setItem("token", token);
    } catch (err) {
      return toast.error(err.message);
    }

    const user = await client("/auth/userprofile");
    setUser(user.data);
    localStorage.setItem("user", JSON.stringify(user.data));

    username.setValue("");
    password.setValue("");
    email.setValue("");
    history.push('/')
  };

  return (
    <FormWrapper onSubmit={handleSignup}>
      <img src={logo} alt="logo" />

      <form>
        <input
          type="email"
          placeholder="Email"
          value={email.value}
          onChange={email.onChange}
        />
        <input
          type="text"
          placeholder="Username"
          value={username.value}
          onChange={username.onChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={password.value}
          onChange={password.onChange}
        />
        <input type="submit" value="Sign up" className="signup-btn" />
      </form>

      <div>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      </div>
    </FormWrapper>
  );
};

export default Signup;
