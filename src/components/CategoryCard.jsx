import { Link } from 'react-router-dom'



const CategoryCard = ({ category }) => {
    const { strCategory, strCategoryThumb } = category


    return (
        <Link className="categoryLink" to='/meals' state={strCategory}>
            <div className='card'>
            <h3 className="headingsOfCategories">{strCategory}</h3>
            <img src={strCategoryThumb} alt={strCategory} />


        </div>
        </Link>

    )
}

export default CategoryCard
