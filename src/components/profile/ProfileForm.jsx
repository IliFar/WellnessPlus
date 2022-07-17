import React, { useEffect, useState } from "react";
import calls from "../../../api_req/profileFormReqs";

const ProfileForm = () => {
  const [profileForm, setProfileForm] = useState({
    age: 0,
    weight: 0,
    height: 0,
    address: "",
  });

  const [image, setImage] = useState([]);

  const handleInput = (e) => {
    setProfileForm({ ...profileForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calls.post(profileForm);
  };

  return (
    <>
      <form className="profile-form" onSubmit={handleSubmit}>
        <div className="profile-form-inputs">
          <label htmlFor="age">Age</label>
          <input
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
          <input
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
          <input
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
          <input
            type="text"
            id="address"
            name="address"
            required
            className="profile-form-input"
            value={profileForm.address}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="profile-form-btn">
          Submit
        </button>
      </form>
    </>
  );
};

export default ProfileForm;
