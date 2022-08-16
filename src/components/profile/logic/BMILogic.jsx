import { useContext } from "react";
import { AppContext } from "../../../../context/appContext";

const BMILogic = () => {
  const { profileData, bmi, setBMI, bmiRange, setBmiRange } =
    useContext(AppContext);

  const handleClick = () => {
    const height = profileData.map((item) => item.height);
    const heightInMeters = height / 100;
    const weight = profileData.map((item) => item.weight);

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

  return {bmi, bmiRange, handleClick};
};

export default BMILogic;
