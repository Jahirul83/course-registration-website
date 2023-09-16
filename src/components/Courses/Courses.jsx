import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Course from '../Course/Course';

const Courses = ({handleSelectedCourses}) => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2'>
                {
                    courses.map((course) => <Course 
                    key={course.id} 
                    course={course}
                    handleSelectedCourses={handleSelectedCourses}
                    
                    ></Course>)
                }
            </div>
        </div>
    )
}

Courses.propTypes = {
    handleSelectedCourses: PropTypes.func
}

export default Courses