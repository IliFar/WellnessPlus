import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/recipes/"

const getRecipesData = async () => {
    await axios.get(`${BASE_URL}/complexSearch?apiKey=${process.env.API_KEY}&number=9&cuisine=mediterranean`)
    .then((res) => {
        const data = res.data;
        console.log(data);
        
    })
    .catch((error) => {
        console.log(error);
    })
}

export default getRecipesData;