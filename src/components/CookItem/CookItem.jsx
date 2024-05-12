import PropTypes from 'prop-types';

const CookItem = ({ cookItem, ToastContainer }) => {
    const { recipe_id, recipe_name, preparing_time, calories } = cookItem;
    return (
        <div className='flex gap-2 shadow p-2 rounded'>
            <p>{recipe_id}</p>
            <p>{recipe_name}</p>
            <p>{preparing_time} min</p>
            <p>{calories} calories</p>
            <button className="bg-green-400 px-5 py-3 rounded">Preparing</button>
            <ToastContainer position="top-center"></ToastContainer>
        </div>
    );
};
CookItem.propTypes = {
    cookItem: PropTypes.object,
    ToastContainer: PropTypes.func
}

export default CookItem;