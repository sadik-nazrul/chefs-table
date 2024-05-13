import PropTyoes from 'prop-types'

const CurrentCooking = ({ crrCook }) => {

    const { recipe_id, recipe_name, preparing_time, calories } = crrCook;
    
    return (
        <div className='flex shadow p-2 rounded'>
            <p className='w-[6%]'>{recipe_id}</p>
            <p className='w-[40%]'>{recipe_name}</p>
            <p className='w-[20%]'>{preparing_time} Min</p>
            <p className='w-[26%]'>{calories} Calories</p>
        </div>
    );
};
CurrentCooking.propTypes = {
    crrCook: PropTyoes.object
}

export default CurrentCooking;