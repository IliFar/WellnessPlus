import React, { useEffect, useState } from "react";
import { getData } from "../../../api_req/profileReqs";
import Button from "../element_components/Button";

const BMI = () => {
  const [data, setData] = useState([]);
  const [bmi, setBMI] = useState(null);
  const [bmiRange, setBmiRange] = useState("");

  useEffect(() => {
    getData(setData);
  }, []);

  const handleClick = () => {
    const height = data.map((item) => item.height);
    const heightInMeters = height / 100;
    const weight = data.map((item) => item.weight);

    const calculateBMI = weight / Math.pow(heightInMeters, 2);
    setBMI(calculateBMI);

    if (calculateBMI < 18.5) {
      setBmiRange("Underweight");
    } else if (calculateBMI >= 18.5 && calculateBMI <= 24.9) {
      setBmiRange("Healthy Weight");
    } else if (calculateBMI >= 25 && calculateBMI <= 29.9) {
      setBmiRange("Overweight");
    } else {
      setBmiRange("Obese");
    }
  };

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
