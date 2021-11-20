import React ,{useEffect, useNavigate, useState, useContext} from 'react'

import MyContext from '../../context/MyContext'

const SearchResults = () => {

    const context = useContext(MyContext)

    //const navigate = useNavigate()
    

    const {search} = context




useEffect(() => {
  try {
    const getResults = async () => {
      const response = await fetch(
       `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      console.log(data.meals);
    
    };
    getResults();
  } catch (error) {
    console.log(error);
  }
}, []);



 //const mealsList = data.meals.map(meal => <MealCard key={meal.idMeal} meal={meal}/>)

    return (
        <div>
         SearchResults   
        </div>
    )
}

export default SearchResults
