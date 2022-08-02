import axios from "axios";

async function axiosGet(setNutrients) {
    await axios
      .get("https://apimocha.com/wellnessplus/nutrients")
      .then((res) => {
        const data = res.data;
        console.log(data)
        setNutrients(data);
      });
  }
export default axiosGet;