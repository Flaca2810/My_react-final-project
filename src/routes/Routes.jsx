import {HashRouter as Router, Routes as Switch, Route} from 'react-router-dom'
import NavBar from '../components/Header'

import MyProvider from '../context/MyProvider'
import Header from '../components/Header'


import Home from '../components/pages/Home'
import Meals from '../components/pages/Meals'
import Ingredients from '../components/pages/Ingredients'
import SearchResults from "../components/pages/SearchResults"

const Routes = () => {
    return (
      <MyProvider>
        <Router>
          <Header />
          <Switch>
            <Route path="/" element={<Home />} />
            <Route path="/meals" element={<Meals />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/searchresults" element={<SearchResults />} />
          </Switch>
        </Router>
      </MyProvider>
    );
}

export default Routes
