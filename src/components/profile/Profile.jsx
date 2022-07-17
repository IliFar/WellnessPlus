import React from "react";
import ProfileForm from "./ProfileForm";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <div className="profile">
        <ProfileHeader username="Iliass" />
        <ProfileForm />
      </div>
    </>
  );
};

export default Profile;
