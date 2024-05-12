import PropTypes from 'prop-types'

const WantCook = ({wantItem, ToastContainer, handlePrepareToCurrentCooking}) => {
    
    
    const {recipe_id, recipe_name, preparing_time, calories} = wantItem;
    return (
        <div className='flex gap-2 shadow p-2 rounded'>
            <p>{recipe_id}</p>
            <p>{recipe_name}</p>
            <p>{preparing_time} Min</p>
            <p>{calories} Calories</p>
            <button className="bg-green-400 px-5 py-3 rounded" onClick={()=>handlePrepareToCurrentCooking(wantItem, preparing_time,calories)}>Preparing</button>
            <ToastContainer 
            position="top-center"
            ></ToastContainer>
        </div>
    );
};
WantCook.propTypes = {
    wantItem: PropTypes.object,
    ToastContainer: PropTypes.func,
    handlePrepareToCurrentCooking: PropTypes.func
}

export default WantCook;