import PropTypes from 'prop-types';
import { GoDotFill } from "react-icons/go";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
    // Desctructure the recipe object for showing in UI
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe;

    return (
        <div className='p-5 flex flex-col gap-2 border rounded-xl justify-between'>
            <img className='rounded-xl max-w-full' src={recipe_image} alt={recipe_name} />
            <div className='border-b-2 space-y-1 pb-3'>
                <h2 className='text-xl font-semibold'>{recipe_name}</h2>
                <p className='text-sm font-light'>{short_description}</p>
            </div>
            <div className=' border-b-2 pb-3'>
                <h3 className="text-lg font-semibold">Ingredients: {ingredients.length}</h3>
                {
                    ingredients.map((ing, indx) => <p className=' text-base font-light flex items-center' key={indx}><GoDotFill />{ing}</p>)
                }
            </div>
            <div className='flex justify-between items-center border-b-2 pb-3'>
                <button className='flex items-center gap-1'>
                    <CiClock2 />
                    {preparing_time} minutes
                </button>

                <button className='flex items-center gap-1'>
                    <FaFire />
                    {calories} calories
                </button>
            </div>

            <div>
            <button className='bg-[#0BE58A] px-5 py-3 rounded-full'>Want to Cook</button>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object
}
export default Recipe;