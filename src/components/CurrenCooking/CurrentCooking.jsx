import PropTyoes from 'prop-types'

const CurrentCooking = ({ crrCook }) => {

    const { recipe_name, preparing_time, calories } = crrCook;
    
    return (
        <div className='flex shadow p-2 rounded'>
            <p className='w-[40%]'>{recipe_name}</p>
            <p className='w-[30%]'>{preparing_time} Min</p>
            <p className='w-[30%]'>{calories} Calories</p>
        </div>
    );
};
CurrentCooking.propTypes = {
    crrCook: PropTyoes.object
}

export default CurrentCooking;