import {useContext} from 'react'
import MyContext from '../context/MyContext'
import { Link, useNavigate } from "react-router-dom";

import { v4 as uuid } from "uuid"


const Form = () => {
 
const navigate = useNavigate()
const context = useContext(MyContext)
const {input, setInput, handleSubmit} = context

// Force the link to refresh even if we're already on the
// searchresults page.
// https://stackoverflow.com/a/43986993/1927589
const linkTarget = {
  pathname: "/searchresults",
  key: uuid(), // we could use Math.random, but that's not guaranteed unique.
  state: {
    applied: true
  }
};

const checkForEnter = event => {
  const code = event.code
  if (code === "Enter") {
    // Act as if the submit search button had been pressed
    event.preventDefault()
    handleSubmit()
    navigate("/searchresults")

  }
}

    return (
      <form>
        <input
          value={input}
          type="text"
          onKeyPress={checkForEnter}
          onChange={event => setInput(event.target.value)}
        />

        <Link to={linkTarget}>
          <button onClick={(e) => handleSubmit(e)}>search</button>
        </Link>
      </form>
    );
}

export default Form


