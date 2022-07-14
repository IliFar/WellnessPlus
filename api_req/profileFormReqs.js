import axios from "axios";
const url = " http://localhost:8000/profileform";


const getData = async (data) => {
    await axios.get(url, data);
}
const postData = async (data) => {
    await axios.post(url, data);
}

const calls = {
    "get" : getData,
    "post": postData
}

export default calls
