
import './App.css'
import SerchFilter from './components/header/Serch&Filter'
import TablePlan from './components/table/TablePlan'

function App() {

  return (
    <>
    <div className='h-[100vh] bg-gray-400 flex items-center justify-center '>
    {/* <Table></Table> */}
    <div className='h-[100vh] bg-white w-[430px]'>
      <div className='my-10'>
      <SerchFilter></SerchFilter>

      </div>
    <TablePlan></TablePlan>
    </div>
  
    </div>
    </>
  )
}

export default App
