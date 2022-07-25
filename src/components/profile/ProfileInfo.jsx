import React, { useEffect, useState } from "react";
import { getData } from "../../../api_req/profileReqs";
import BMI from "./BMI";

const ProfileInfo = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData(setData);
  }, []);

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
          {data.map((info) => (
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
