import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/recipes";

const getRecipesData = async (setData, setError) => {
  await axios
    .get(`${BASE_URL}/random?apiKey=${process.env.API_KEY}&number=9`)
    .then((res) => {
      const data = res.data;
      console.log(data);
      setData(data.recipes);
    })
    .catch((error) => {
      console.log(error);
      setError(error.message);
    });
};

const getRecipeById = async (id, setDetails, setError) => {
  await axios
    .get(`${BASE_URL}/${id}/information?apiKey=${process.env.API_KEY}`)
    .then((res) => {
      const recipe = res.data;
      console.log(recipe);
      setDetails(recipe);
    })
    .catch((error) => {
      console.log(error);
      setError(error.message);
    });
};
export { getRecipesData, getRecipeById };
