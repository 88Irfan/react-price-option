import PropTypes from 'prop-types';
import { FaRegCheckCircle } from "react-icons/fa";

const Featuer = ({featuer}) => {
    return (
        <div>
            <p className='flex items-center gap-4'><FaRegCheckCircle className='text-green-600'></FaRegCheckCircle>{featuer}</p>
        </div>
    );
};
Featuer.propTypes={
    featuer:PropTypes.string

}

export default Featuer;