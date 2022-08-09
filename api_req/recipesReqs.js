import axios from "axios";

const BASE_URL = "https://api.spoonacular.com/recipes";

const getRecipesData = async (setData) => {
  await axios
    .get(`${BASE_URL}/random?apiKey=${process.env.API_KEY}&number=9`)
    .then((res) => {
      const data = res.data;
      console.log(data);
      setData(data.recipes);
    })
    .catch((error) => {
      console.log(error);
    });
};

const getRecipeById = async (id, setDetails) => {
  await axios
    .get(`${BASE_URL}/${id}/information?apiKey=${process.env.API_KEY}`)
    .then((res) => {
      const recipe = res.data;
      console.log(recipe);
      setDetails(recipe);
    });
};
export { getRecipesData, getRecipeById };
