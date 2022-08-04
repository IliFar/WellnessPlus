import React, { useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import { getProfileData } from "../../../api_req/profileReqs";
import ProfileInfo from "./ProfileInfo";
import BMI from "./BMI";

const Profile = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProfileData(setData);
  }, []);

  const length = data.length <= 0;

  return (
    <>
      <h1>Profile</h1>
      <div className="profile">
        <ProfileHeader />
        {length ? <ProfileForm /> : <ProfileInfo />}
      </div>
    </>
  );
};

export default Profile;
