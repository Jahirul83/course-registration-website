
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Selects from './components/Selects/Selects'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selects, setSelects] = useState([]);
  const [remaining, setRemaining] = useState(20);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalMoney, setTotalMoney] = useState(0);

  const handleSelectedCourses = course => {

    let count = parseInt(course.credit);
    let itemCredit;
    const isExist = selects.find(item => item.id === course.id);
    if (isExist) {
      return toast("This course is already selected");
    }

    else {

      selects.forEach((item) => {
        itemCredit = parseInt(item.credit);
        count = count + itemCredit;
      });
      // console.log(count)
      if (count > 20) {
        toast('You cannot select more than 20 credits');
      }
      else {

        const totalRemaining = 20 - count;
        const newSelectedCourse = [...selects, course];
        setSelects(newSelectedCourse);
        setRemaining(totalRemaining);
        setTotalCredit(count);


        const newTotalMoney = parseInt(course.price) + totalMoney;
        setTotalMoney(newTotalMoney);
      }
    }


  };

  return (
    <>
      <div>
        <Header></Header>
        <div className='md:flex'>
          <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
          <Selects totalMoney={totalMoney} totalCredit={totalCredit} remaining={remaining} selects={selects}></Selects>

          {/* toast */}
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          {/* Same as */}
        </div>
      </div>
    </>
  )
}

export default App
