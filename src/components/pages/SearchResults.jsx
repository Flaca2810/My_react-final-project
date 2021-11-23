import {useEffect, useContext} from 'react'
import MealCard from '../MealCard'
import {useNavigate} from 'react-router-dom'

import MyContext from '../../context/MyContext'

const SearchResults = () => {
    
    const context = useContext(MyContext)
    const navigate=useNavigate()
    const {search, searchResults, setSearchResults} = context


useEffect(() => {
  try {
    const getResults = async () => {
      const response = await fetch(
       `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await response.json();
      setSearchResults(data.meals)
    
    };
    getResults();
  } catch (error) {
    console.log(error);
  }
}, [search]);



 const mealsList = searchResults.map(meal => <MealCard key={meal.idMeal} meal={meal}/>)

    return (
        <div>
         {mealsList}  
         <button onClick={()=>navigate(-1)}>Return to Food Categories</button>
        </div>
    )
}

export default SearchResults
