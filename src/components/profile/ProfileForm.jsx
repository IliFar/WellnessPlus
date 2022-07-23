import React, { useEffect, useState } from "react";
import { postData } from "../../../api_req/profileReqs";
import Button from "../element_components/Button";
import Input from "../element_components/Input";

const ProfileForm = () => {
  const [profileForm, setProfileForm] = useState({
    age: 0,
    weight: 0,
    height: 0,
    address: "",
  });

  const handleInput = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProfileForm((profileForm) => ({
      ...profileForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    postData(profileForm);
  };

  return (
    <>
      <h3>Please fill in the informations below for better experience.</h3>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-form-inputs">
          <label htmlFor="age">Age</label>
          <Input
            type="number"
            id="age"
            name="age"
            step={0.01}
            required
            className="profile-form-input"
            value={profileForm.age}
            onChange={handleInput}
          />
        </div>
        <div className="profile-form-inputs">
          <label htmlFor="weight">Weight (kg)</label>
          <Input
            type="number"
            id="weight"
            name="weight"
            required
            className="profile-form-input"
            value={profileForm.weight}
            onChange={handleInput}
          />
        </div>

        <div className="profile-form-inputs">
          <label htmlFor="height">Height (cm)</label>
          <Input
            type="number"
            id="height"
            name="height"
            required
            className="profile-form-input"
            value={profileForm.height}
            onChange={handleInput}
          />
        </div>

        <div className="profile-form-inputs">
          <label htmlFor="address">Address</label>
          <Input
            type="text"
            id="address"
            name="address"
            required
            className="profile-form-input"
            value={profileForm.address}
            onChange={handleInput}
          />
        </div>

        <Button class="profile-form-btn" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
};

export default ProfileForm;
