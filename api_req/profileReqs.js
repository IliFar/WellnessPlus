import axios from "axios";
const url = " http://localhost:8000/profile";

const getProfileData = async (setData) => {
  await axios.get(url).then((res) => {
    const data = res.data;
    setData(data);
  })
  .catch((error) => {
    console.log(error);
  });
};
const postProfileData = async (data, setData) => {
  await axios.post(url, data);
  setData(data);
};

const calls = {
  get: getProfileData,
  post: postProfileData,
};

export { getProfileData, postProfileData };
