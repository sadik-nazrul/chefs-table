import PropTypes from 'prop-types';
import { GoDotFill } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";


const Recipe = ({ recipe }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='border rounded-xl flex flex-col p-5 justify-between gap-4'>
            <img className=' max-w-full rounded-lg' src={recipe_image} alt={recipe_name} />
            <div className='border-b pb-4 space-y-2'>
                <h2 className="text-xl font-semibold">{recipe_name}</h2>
                <p className='{text-sm font-thin text-slate-500'>{short_description}</p>
            </div>
            <div className='border-b pb-4 space-y-2'>
                <h2 className="text-lg font-medium">Ingredients: {ingredients.length}</h2>
                <ul>
                    {
                        ingredients.map((ing, indx) => <li className='text-base font-light' key={indx}><GoDotFill className='inline' /> {ing}</li>)
                    }
                </ul>
            </div>
            <div className='flex justify-between items-center py-2'>
                <p className='text-sm font-light'><CiClock2 className='inline text-lg' /> {preparing_time} minutes</p>
                <p className='text-sm font-light'><FaFire className='inline text-lg' /> {calories} minutes</p>
            </div>
            <div>
                <button className="bg-green-400 px-5 py-3 rounded">Want to Cook</button>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object
}

export default Recipe;