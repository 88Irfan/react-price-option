import PropTypes from 'prop-types';
import Featuer from '../Featuer/Featuer';

const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className='bg-blue-600 rounded-md p-4 flex flex-col text-white  my-5'>
            <h2>
                <span className='text-5xl font-extrabold text-center'>{price}</span>
                {/* <span className='text-5xl'>/mon</span> */}
            </h2>
            <h4 className='text-3xl my-5 text-center'>{name}</h4>
            <div className='pl-6 flex-grow'>
            {
                features.map((feature, index)=> <Featuer key={index} featuer={feature}></Featuer>)
            }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 text-2xl font-bold rounded-lg hover:bg-green-900'>Buy Now</button>
        </div>
    );
};
PriceOption.propTypes={
    option:PropTypes.object

}

export default PriceOption;