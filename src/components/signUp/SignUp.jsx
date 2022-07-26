import React from "react";
import SignupForm from "./SignupForm";
import "./SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="sign-up-page container">
        <h1>Sign Up</h1>
        <SignupForm />
      </div>
    </>
  );
};

export default SignUp;
