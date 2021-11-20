import {useContext} from 'react'
import MyContext from '../context/MyContext'
import { Link } from "react-router-dom";



const Form = () => {
 
const context = useContext(MyContext)
const {input, setInput, handleSubmit} = context

    return (
      <form>
        <input
          value={input}
          type="text"
          onChange={(e) => setInput(e.target.value)}
        />

        <Link to="/searchresults" state={input}>
          <button onClick={(e) => handleSubmit(e)}>search</button>
        </Link>
      </form>
    );
}

export default Form


