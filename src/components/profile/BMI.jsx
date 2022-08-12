import React, { useContext, useEffect, useState } from "react";
import { getProfileData } from "../../../api_req/profileReqs";
import { AppContext } from "../../../context/appContext";
import Button from "../element_components/Button";
import BMILogic from "./logic/BMILogic";

const BMI = () => {
  const { bmi, bmiRange, handleClick } = BMILogic();

  return (
    <>
      {bmi ? (
        <div>
          Your Body Mass Index is {bmi.toFixed(2)} so your weight is in the{" "}
          {bmiRange} category.
        </div>
      ) : (
        <Button class="bmi-btn" type="submit" onClick={handleClick}>
          Calculate Your BMI
        </Button>
      )}
    </>
  );
};

export default BMI;
