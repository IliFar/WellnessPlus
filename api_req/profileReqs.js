import axios from "axios";
const url = " http://localhost:8000/profile";

const getProfileData = async (setData) => {
  await axios.get(url).then((res) => {
    const data = res.data;
    setData(data);
  });
};
const postProfileData = async (data, setData) => {
  // const response = await axios.post(url, data);
  // setData([...data, response.data])

  await axios.post(url, data);
  setData(data);
};

const calls = {
  get: getProfileData,
  post: postProfileData,
};

export { getProfileData, postProfileData };
