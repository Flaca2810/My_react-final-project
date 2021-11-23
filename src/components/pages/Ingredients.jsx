import { useEffect, useContext } from "react";

import { useLocation, useNavigate } from "react-router-dom";
import MyContext from "../../context/MyContext";

const Ingredients = () => {
  const location = useLocation();
  const mealId = location.state;
  const context = useContext(MyContext);
  const navigate = useNavigate();

  const { ingredients, setIngredients } = context;
  const { strMeal, strMealThumb, strInstructions } = ingredients;

  useEffect(() => {
    try {
      const getIngredients = async () => {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
        );

        const data = await response.json();
        setIngredients(data.meals[0]);
      };
      getIngredients();
    } catch (error) {
      console.log(error);
    }
  }, []);

  const ingredientsArray = [];
  let ingredientObj = { ingredient: "", measurement: "" };

  for (let i = 1; i <= 20; i++) {
    let strIngredient = "strIngredient" + i;
    let strMeasure = "strMeasure" + i;
    if (
      ingredients[strIngredient] !== "" &&
      ingredients[strIngredient] !== null
    ) {
      ingredientObj = {
        ingredient: ingredients[strIngredient],
        measurement: ingredients[strMeasure],
      };
      ingredientsArray.push(ingredientObj);
    }
  }

  const ingredientsList = ingredientsArray.map((object) => (
    <li>
      {object.ingredient}---{object.measurement}
    </li>
  ));

  return (
    <div className="recipes">
      <h4> Recipe and Measurement of Food</h4>

      <h5>{strMeal}</h5>

      <div className="recipesInnerContainer">
        <div>
          <img
            className="recipePicture"
            src={strMealThumb}
            alt={strMeal}
            width="500px"
          />
        </div>

        <div className="ingredients">
          <h6>Ingredients and Mesurements</h6>
          <ul>{ingredientsList}</ul>
        </div>
      </div>

      <div className="instruction">
        <h6>Method of Preparation</h6>
        <p>{strInstructions}</p>
        &nbsp;
      </div>

      <button className="buttonIngredients" onClick={() => navigate(-1)}>
        Return to Meals
      </button>
    </div>
  );
};

export default Ingredients;
