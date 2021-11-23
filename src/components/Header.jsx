import React from 'react'
import Form from './Form'


const Header = () => {
    return (
      <header>
        <h1 class="headline">Welcome to my recipes page</h1>
        <h2 className="foodcategories">Food Categories</h2>
        <Form />
      </header>
    );
}

export default Header
