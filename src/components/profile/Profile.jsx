import React from "react";
import ProfileForm from "./ProfileForm";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";
import ProfileInfo from "./ProfileInfo";
import ProfileLogic from "./logic/ProfileLogic";

const Profile = () => {
  const { length } = ProfileLogic();

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
