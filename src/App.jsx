
import './App.css'
import Header from './components/Header/Header'
import Courses from './components/Courses/Courses'
import Selects from './components/Selects/Selects'

function App() {

  return (
    <>
      <div>
        <Header></Header>
        <div className='md:flex'>
          <Courses></Courses>
          <Selects></Selects>
        </div>
      </div>
    </>
  )
}

export default App
