import axios from "axios";
const url = "https://apimocha.com/wellnessplus/nutrients";

const GetNutrients = async (setNutrients) => {
  await axios
    .get(url)
    .then((res) => {
      const data = res.data;
      console.log(data);
      setNutrients(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
export default GetNutrients;
