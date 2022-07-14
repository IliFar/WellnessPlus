import React, { useEffect, useState } from "react";
import axios from "axios";

const ProfileForm = () => {
  const url = "https://apimocha.com/profileform";
  const [profileForm, setProfileForm] = useState({
    age: 0,
    weight: 0,
    height: 0,
    address: "",
    image: [],
  });

  const handleInput = (e) => {
    // const {value, name}= e.target;
    
    setProfileForm({...profileForm, [e.target.name] : e.target.value});
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(profileForm);
    axios.post(url, profileForm)
  }

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

        <div className="profile-form-inputs">
          <label htmlFor="photo">Upload Photo</label>
          <input
            type="file"
            name="photo"
            id="photo"
            required
            className="profile-form-input"
            value={profileForm.image[0]}
            onChange={handleInput}
          />
        </div>

        <button type="submit" className="profile-form-btn">Submit</button>
      </form>
    </>
  );
};

export default ProfileForm;
