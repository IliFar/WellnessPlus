import axios from "axios";
const url = " http://localhost:8000/profile";

const getData = async (setData) => {
  await axios.get(url).then((res) => {
    const data = res.data;
    setData(data);
  });
};
const postData = async (data, setData) => {
  // const response = await axios.post(url, data);
  // setData([...data, response.data])

  await axios.post(url, data);
  setData(data);
};

const calls = {
  get: getData,
  post: postData,
};

export { getData, postData };
