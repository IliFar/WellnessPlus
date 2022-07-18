import React, { useEffect, useState } from "react";
import { postData } from "../../../api_req/signupReqs";

const SignupForm = () => {
  const [signupForm, setSignupForm] = useState({
    username: "",
    lastName: "",
    password: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setSignupForm((signupForm) => ({ ...signupForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    await postData(signupForm);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <div className="signup-form-inputs">
          <input
            type="text"
            id="username"
            className="signup-form-input"
            name="username"
            required
            value={signupForm.username}
            onChange={handleInput}
            placeholder=" Name"
          />
        </div>
        <div className="signup-form-inputs">
          <input
            type="text"
            id="lastName"
            className="signup-form-input"
            name="lastName"
            required
            value={signupForm.lastName}
            onChange={handleInput}
            placeholder=" Last Name"
          />
        </div>
        <div className="signup-form-inputs">
          <input
            type="password"
            id="password"
            className="signup-form-input"
            name="password"
            required
            value={signupForm.password}
            onChange={handleInput}
            placeholder=" Password"
          />
        </div>
        <button className="signup-form-btn" type="submit">
          Sign Up
        </button>
      </form>
    </>
  );
};

export default SignupForm;
