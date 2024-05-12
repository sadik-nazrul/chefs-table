import PropTypes from 'prop-types';
import CookItem from '../CookItem/CookItem';

const CookingWishlist = ({ cooking, ToastContainer }) => {

    return (
        <div className='border rounded-xl p-5 col-span-2 space-y-4'>
            <h2 className='text-xl text-center pb-4 border-b-2'>Wat to Cook: {cooking.length}</h2>

            {
                cooking.map((cookItem, indx) => <CookItem key={indx} cookItem={cookItem} ToastContainer={ToastContainer}></CookItem>)
            }

        </div>
    );
};
CookingWishlist.propTypes = {
    cooking: PropTypes.array,
    ToastContainer: PropTypes.func
}

export default CookingWishlist;