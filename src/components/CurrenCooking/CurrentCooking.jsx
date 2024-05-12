import PropTyoes from 'prop-types'

const CurrentCooking = ({ crrCook }) => {

    const { recipe_id, recipe_name, preparing_time, calories } = crrCook;
    
    return (
        <div className='flex justify-between shadow p-2 rounded'>
            <p>{recipe_id}</p>
            <p>{recipe_name}</p>
            <p>{preparing_time} Min</p>
            <p>{calories} Calories</p>
        </div>
    );
};
CurrentCooking.propTypes = {
    crrCook: PropTyoes.object
}

export default CurrentCooking;