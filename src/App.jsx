
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Selects from './components/Selects/Selects'
import { useState } from 'react'

function App() {

  const[selects,setSelects] = useState([]);

  const handleSelectedCourses = course =>{
    const newSelectedCourse = [...selects,course]
    setSelects(newSelectedCourse);

  }

  return (
    <>
      <div>
        <Header></Header>
        <div className='md:flex'>
        <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
          <Selects selects={selects}></Selects>
        </div>
      </div>
    </>
  )
}

export default App
