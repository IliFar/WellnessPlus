import React, { useContext } from "react";
import { getProfileData } from "../../../api_req/profileReqs";
import { AppContext } from "../../../context/appContext";
import BMI from "./BMI";

const ProfileInfo = () => {
  const {profileData} = useContext(AppContext)

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Age</th>
            <th>Weight</th>
            <th>Height</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {profileData.map((info) => (
            <tr key={info.id}>
              <td>{info.age} Years Old</td>
              <td>{info.weight} kg</td>
              <td>{info.height} cm</td>
              <td>{info.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <BMI />
    </>
  );
};

export default ProfileInfo;
