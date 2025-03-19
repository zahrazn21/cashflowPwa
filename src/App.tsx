
import { Route, Routes } from 'react-router-dom'
import './App.css'
// import { routes } from './routers/rouer'
import HomePage from './pages/HomePage'
import MenuMain from './components/MenuBar/MenuMain'
import ProfessorsClass from './pages/ProfessorsClass'
import SerchFilter from './components/header/Serch&Filter'
import CoursesOffered from './pages/CoursesOffered'
import WeeklySchedule from './pages/WeeklySchedule'
import DailySchedule from './pages/DailySchedule'
import ExamSchedule from './pages/ExamSchedule'
// import SerchFilter from './components/header/Serch&Filter'
// import TableMain from './components/table/TableMain'
// import TablePlan from './components/table/TablePlan'
// import HomePage from './pages/HomePage'

function App() {

  // const routers=useRoutes(routes)

  return (
    <>
    <div className='h-[100vh] bg-gray-400 flex items-center justify-center '>
    {/* <Table></Table> */}
    <div className='h-[100vh] bg-white w-[430px] grid '>
      {/* <div className="mt-10">
      <SerchFilter></SerchFilter>
      </div>
    
      <TablePlan></TablePlan>

      <TableMain></TableMain>
      <HomePage></HomePage> */}
      

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}>
        </Route>
        <Route path='/SerchFilter' element={<SerchFilter/>}>
        <Route path='professorsClass' element={<ProfessorsClass></ProfessorsClass>}></Route>
        <Route path='weeklySchedule' element={<WeeklySchedule/>}></Route>
        <Route path='dailySchedule' element={<DailySchedule></DailySchedule>}></Route>
        <Route path='' element={<CoursesOffered></CoursesOffered>}/>
         <Route path='ExamSchedule' element={<ExamSchedule></ExamSchedule>}>
        </Route>
        </Route>
        <Route path='/menu' element={<MenuMain></MenuMain>}>
        </Route>
        {/* <Route path='/ExamSchedule' element={<ProfessorsClass></ProfessorsClass>}>
        </Route> */}
      </Routes>

 

    </div>
  
    </div>
    </>
  )
}

export default App
