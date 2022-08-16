import React, { useEffect, useState } from "react";
import { postProfileData } from "../../../../api_req/profileReqs";

const ProfileFormLogic = () => {
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

  useEffect(() => {
    handleSubmit;
  }, []);

  const handleSubmit = (e) => {
    postProfileData(profileForm, setProfileForm);
  };

  return {profileForm, handleInput, handleSubmit};
};

export default ProfileFormLogic;
