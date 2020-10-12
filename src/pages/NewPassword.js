import React from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import { FormWrapper } from "../components/Login";
import useInput from "../hooks/useInput";
import { client } from "../utils";

const NewPassword = () => {

    const new_password = useInput("");

    const { token } = useParams()

    console.log(token)

    const handlePassword = async (e) => {
        e.preventDefault();

        const body = {
            token: token,
            password: new_password.value,
        };

        try {
            client("/auth/new-password", { body });
            toast.success("Password Reset Successful");
        } catch (err) {
            return toast.error(err.message);
        }

        new_password.setValue("");
    };

    return (
        <FormWrapper onSubmit={handlePassword}>
            <img src={logo} alt="logo" />

            <form>
                <input
                    type="password"
                    placeholder="New Password"
                    value={new_password.value}
                    onChange={new_password.onChange}
                />
                <input type="submit" value="Sign up" className="signup-btn" />
            </form>

            <div>
                <p>
                    Already have an account? <Link to="/">Log In</Link>
                </p>
            </div>
        </FormWrapper>
    );
};

export default NewPassword;
