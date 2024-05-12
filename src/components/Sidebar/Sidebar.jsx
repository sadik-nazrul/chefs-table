import PropTypes from 'prop-types'
import WantCook from '../WantCook/WantCook';
import { useState } from 'react';
import CurrentCooking from '../CurrenCooking/CurrentCooking';

const Sidebar = ({ wantCook, ToastContainer }) => {
    const [currentCooking, setCurrenCooking] = useState([]);
    const [prePareTime, setPrpareTime] = useState(0);
    const [calori, setCalori] = useState(0)


    const handlePrepareToCurrentCooking = (cookinItem, prePareTime, calories) => {
        const newCurrentCook = [...currentCooking, cookinItem];
        setCurrenCooking(newCurrentCook);
        timeCal(prePareTime, calories)
    }

    const timeCal = (prptime, calories) => {
        setPrpareTime(prePareTime + prptime);
        setCalori(calori + calories)
    }




    return (
        <div className='col-span-2 p-4 border rounded-xl'>
            <h2 className='text-xl text-center pb-4 border-b-2'>Want to Cook: {wantCook.length}</h2>
            <div className='py-4 space-y-4'>
                {
                    wantCook.map((wantItem, indx) => <WantCook key={indx} wantItem={wantItem} ToastContainer={ToastContainer} handlePrepareToCurrentCooking={handlePrepareToCurrentCooking}></WantCook>)
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
    ToastContainer: PropTypes.func
}

export default Sidebar;