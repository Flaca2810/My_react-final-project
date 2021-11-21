import React ,{useEffect, useNavigate, useState, useContext} from 'react'

import MyContext from '../../context/MyContext'
import MealCard from '../MealCard.jsx'

const SearchResults = () => {

    const context = useContext(MyContext)

    //const navigate = useNavigate()
    

    const {search} = context


const [ meals, setMeals ] = useState([])

useEffect(() => {
  try {
    const getResults = async () => {
      const response = await fetch(
       `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      setMeals(data.meals || []);
    
    };
    getResults();
  } catch (error) {
    console.log(error);
  }
}, [search]);



 const mealsList = meals.map(meal => <MealCard key={meal.idMeal} meal={meal}/>)

    return (
        <div>
         {mealsList}   
        </div>
    )
}

export default SearchResults
