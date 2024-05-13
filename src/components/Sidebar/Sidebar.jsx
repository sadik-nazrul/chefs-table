import PropTypes from 'prop-types'
import WantCook from '../WantCook/WantCook';
import CurrentCooking from '../CurrenCooking/CurrentCooking';

const Sidebar = ({ wantCook, ToastContainer, currentCooking, handlePrepareToCurrentCooking, prePareTime, calori }) => {

    

    return (
        <div className='col-span-2 p-4 border rounded-xl'>
            <h2 className='text-xl text-center pb-4 border-b-2'>Want to Cook: {wantCook.length}</h2>
            <div className='py-4 space-y-4'>
                {
                    wantCook.map((wantItem, indx) => <WantCook key={indx} wantItem={wantItem} ToastContainer={ToastContainer} handlePrepareToCurrentCooking={handlePrepareToCurrentCooking} ></WantCook>)
                }
            </div>
            <h2 className='text-xl text-center pb-4 border-b-2'>Current Cooking: {currentCooking.length}</h2>
            <div className='py-4 space-y-4'>
                {
                    currentCooking.map((crrCook, indx) => <CurrentCooking key={indx} crrCook={crrCook}></CurrentCooking>)
                }
            </div>
            <div className='flex flex-col items-end'>
                <p>Total prepare Time: {prePareTime}</p>
                <p>Total calories: {calori}</p>
            </div>
        </div>
    );
};

Sidebar.propTypes = {
    wantCook: PropTypes.array,
    ToastContainer: PropTypes.func,
    currentCooking: PropTypes.array,
    handlePrepareToCurrentCooking: PropTypes.func,
    prePareTime: PropTypes.number,
    calori: PropTypes.number
}

export default Sidebar;