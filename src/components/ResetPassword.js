import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../assets/logo.png";
import useInput from "../hooks/useInput";
import { client } from "../utils";
import { FormWrapper } from "./Login";

const ResetPassword = () => {
    const email = useInput("");

    const handleReset = async (e) => {
        e.preventDefault();

        const body = {
            email: email.value
        };

        try {
            client("/auth/reset-password", { body });
            toast.success("Check Your Email");
        } catch (err) {
            return toast.error(err.message);
        }

        email.setValue("");
    };

    return (
        <FormWrapper onSubmit={handleReset}>
            <img src={logo} alt="logo" />

            <p>
                Reset Password
            </p>

            <form>
                <input
                    type="email"
                    placeholder="Email"
                    value={email.value}
                    onChange={email.onChange}
                />
                <input type="submit" value="Reset" className="signup-btn" />
            </form>

            <div>
                <p>
                    Already have an account? <Link to="/login">Log In</Link>
                </p>
            </div>
        </FormWrapper>
    );
};

export default ResetPassword;
