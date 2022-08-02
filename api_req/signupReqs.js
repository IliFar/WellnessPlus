import axios from "axios";
const url = " http://localhost:8000/signup";

const getData = async (setData) => {
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
const postData = async (data, setData) => {
  await axios.post(url, data);
  setData(data);
};

const calls = {
  get: getData,
  post: postData,
};

export { getData, postData };
