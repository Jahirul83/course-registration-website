
import PropTypes from 'prop-types'
import { BsBook } from 'react-icons/Bs';

const Course = ({ course, handleSelectedCourses }) => {

    const { image, title, details, credit, price } = course;
    return (
        <div className='w-11/12 bg-slate-200 p-3 m-4 rounded-xl'>
            <img className='w-full' src={image} alt="" />
            <h3 className='text-xl font-bold'>{title}</h3>
            <p className='my-2 text-sm'>{details}</p>
            <div className='flex justify-between'>
                <p className='text-sm'>$ price: {price}</p>
                <p className='flex items-center ml-14'><BsBook></BsBook> <span className='ml-2 text-sm'> credit: {credit} hrs</span></p>
            </div>
            <div className='text-center mt-3'>
                <button onClick={()=>handleSelectedCourses(course)} className='text-white w-11/12 bg-blue-500 rounded-xl p-2'>Select</button>
            </div>
        </div>
    )
}

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectedCourses: PropTypes.func
}

export default Course