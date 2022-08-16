import axios from "axios";
const url = " http://localhost:8000/signup";

const getUserData = async (setData) => {
  await axios
    .get(url)
    .then((res) => {
      const data = res.data;
      setData(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
const postUserData = async (data, setData) => {
  await axios.post(url, data);
  setData(data);
};

const calls = {
  get: getUserData,
  post: postUserData,
};

export { getUserData, postUserData };
