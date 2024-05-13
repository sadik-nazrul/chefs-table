import PropTypes from 'prop-types'
import WantCook from '../WantCook/WantCook';
import CurrentCooking from '../CurrenCooking/CurrentCooking';

const Sidebar = ({ wantCook, ToastContainer, currentCooking, handlePrepareToCurrentCooking, prePareTime, calori }) => {


    return (
        <div className='w-full lg:col-span-2 p-4 border rounded-xl'>


            <div className='py-4 space-y-4'>
                <div className='bg-green-400 text-black rounded'>
                    <h2 className='text-xl text-center p-4 border-b-2 border-black'>Want to Cook: {wantCook.length}</h2>
                    <div className='flex p-2 m-2'>
                        <p className='w-[30%] px-2'>Name</p>
                        <p className='w-[20%] px-2'>Time</p>
                        <p className='w-[20%] px-2'>Calories</p>
                        <p className='w-[30%] px-2'></p>
                    </div>
                </div>
                <div className='space-y-3'>
                    {
                        wantCook.map((wantItem, indx) => <WantCook
                            key={indx} wantItem={wantItem}
                            ToastContainer={ToastContainer}
                            handlePrepareToCurrentCooking={handlePrepareToCurrentCooking}
                        ></WantCook>)
                    }
                </div>


            </div>
            <div className='py-4 space-y-4'>
                <div className='bg-green-400 text-black rounded'>
                    <h2 className='text-xl text-center p-4 border-b-2 border-black'>Current Cooking: {currentCooking.length}</h2>
                    <div className='flex p-2 m-2'>
                        <p className='w-[6%]'></p>
                        <p className='w-[40%]'>Name</p>
                        <p className='w-[20%]'>Time</p>
                        <p className='w-[26%]'>Calories</p>
                    </div>
                </div>
                {
                    currentCooking.map((crrCook, indx) => <CurrentCooking
                        key={indx}
                        crrCook={crrCook}
                    ></CurrentCooking>)
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