import React, { useEffect, useState } from "react";
import { getUserData } from "../../../api_req/signupReqs";

const ProfileHeader = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getUserData(setData);
  }, []);

  return (
    <>
      <div className="profile-header">
        <img
          src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt=""
          className="profile-img"
        />
        <h2>
          {data &&
            `${data.map((item) => item.username)} ${data.map(
              (item) => item.lastName
            )}`}
        </h2>
      </div>
    </>
  );
};

export default ProfileHeader;
