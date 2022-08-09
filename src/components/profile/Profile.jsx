import React, { useContext, useEffect, useState } from "react";
import ProfileForm from "./ProfileForm";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import { getProfileData } from "../../../api_req/profileReqs";
import ProfileInfo from "./ProfileInfo";
import BMI from "./BMI";
import { AppContext } from "../../../context/appContext";

const Profile = () => {

  const {profileData} = useContext(AppContext);

  const length = profileData.length <= 0;

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
