import {useContext} from 'react';
import {useNavigate} from 'react-router-dom'
import MyContext from '../context/MyContext';





const Form = () => {
    
const context = useContext(MyContext)
const {input, setInput, setSearch} = context
const navigate=useNavigate()




 const handleSubmit = (e) => {
   e.preventDefault();
   setSearch(input);
   navigate("/searchresults");
 };




    return (
      <form className="formSearch">
        <input className="searchField"
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />
          <button className="searchbutton" onClick={(e) => handleSubmit(e)}>search for a special meal</button>
      </form>
    );
}





export default Form


