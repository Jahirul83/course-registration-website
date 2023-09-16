
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Selects from './components/Selects/Selects'
import { useState } from 'react'

function App() {

  const [selects, setSelects] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);

  const handleSelectedCourses = course => {

    let count = parseInt(course.credit);
    let itemCredit;
    const isExist = selects.find(item => item.id === course.id);
    if (isExist) {
      return alert('already exist');
    }

    else {

      selects.forEach((item) => {
        itemCredit = parseInt(item.credit);
        count = count + itemCredit;
      });
      // console.log(count)
      if (count > 20) {
        alert('You do not have enough credit to select this course');
      }
      else {

        const totalRemaining = 20 - count;
        const newSelectedCourse = [...selects, course];
        setSelects(newSelectedCourse);
        setRemaining(totalRemaining);
        setTotalCredit(count);
      }
    }


  };

  return (
    <>
      <div>
        <Header></Header>
        <div className='md:flex'>
          <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
          <Selects totalCredit={totalCredit} remaining={remaining} selects={selects}></Selects>
        </div>
      </div>
    </>
  )
}

export default App
