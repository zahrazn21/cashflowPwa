import 'react'
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";

export default function SerchFilter() {
  return (
    <div className=''>
      <div dir='rtl' className="p-1 flex justify-between items-center">
        <div dir="rtl" className="serch  rounded-[15px]   w-[184px] h-[30px] border-2 border-[#1B4965] flex items-center " >
         <div className='bg-[#1B4965] flex items-center px-1 justify-center rounded-r-[15px] h-[30px] text-white'>
         <IoMdSearch ></IoMdSearch>
         </div>
            <input type="search" placeholder="Search" className='w-[150px] text-[10px] outline-0 mr-2' />
        </div>
        <div dir="rtl" className="filter  w-[186px]   flex items-center  justify-between" >
            <div className="rounded-[15px] h-[30px] flex  w-[103px] border-2 border-[#1B4965]">
                <div className="filterIcon bg-[#1B4965] flex items-center px-1 justify-center rounded-r-[15px]  text-white">
                   <CiFilter></CiFilter>
                </div>
                <button className='text-[10px]'>clck</button>
            </div>
            <div className='w-[78px] h-[30px] border-2 rounded-[15px] border-[#1B4965]'></div>
        </div>
      </div>
    </div>
  )
}
