import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import PropTypes from 'prop-types';

const Recipes = ({ handleWantCook }) => {
    // console.log(handleWantCook);
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        fetch('./recipes.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className='lg:col-span-3 p-4 lg:p-0'>
            <div className='grid lg:grid-cols-2 gap-5'>
                {
                    recipes.map(recipe => <Recipe
                        key={recipe.recipe_id}
                        recipe={recipe}
                        handleWantCook={handleWantCook}
                    ></Recipe>)
                }
            </div>
        </div>
    );
};
Recipes.propTypes = {
    handleWantCook: PropTypes.func
}

export default Recipes;