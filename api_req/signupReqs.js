import axios from "axios";
const url = " http://localhost:8000/signup";

const getData = async (setData) => {
  await axios.get(url).then((res) => {
    const data = res.data;
    console.log(data);
    setData(data);
  });
};
const postData = async (data) => {
  await axios.post(url, data);
};

const calls = {
  get: getData,
  post: postData,
};

export { getData, postData };
