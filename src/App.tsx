
import './App.css'
import SerchFilter from './components/header/Serch&Filter'
import TableMain from './components/table/TableMain'
import TablePlan from './components/table/TablePlan'

function App() {

  return (
    <>
    <div className='h-[100vh] bg-gray-400 flex items-center justify-center '>
    {/* <Table></Table> */}
    <div className='h-[100vh] bg-white w-[430px] grid '>
      <div className="mt-10">
      <SerchFilter></SerchFilter>
      </div>
    
      <TablePlan></TablePlan>

      <TableMain></TableMain>

    </div>
  
    </div>
    </>
  )
}

export default App
