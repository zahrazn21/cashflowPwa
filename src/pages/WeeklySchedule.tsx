import  'react'
import { FaRegDotCircle } from "react-icons/fa";
// import TablePlan from '../components/table/TablePlan';
import { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import TableWeeklySchedule from '../components/table/TableWeeklySchedule';
import Date from '../components/ui/date';
// import WeeklySchedule from './WeeklySchedule';

export default function WeeklySchedule() {
  const [searchTerm, setSearchTerm] = useState("");

    const dataPlan={
    header: ["17-19", "15-17", "13-15", "10-12", "8-10"],
    rows:[
        {
          data:
          ["دکتری","  ","  اندیده","افسیر قرآن",""," شنبه"],
        },
        {
          data:
          ["کارشناسی"," ","","","","یکشنبه"],
        },
        {
          data:
          [""," شنبه 8 تا10","کارشناسی‌ارشد"," ",""," دوشنبه"],
        },
        {
          data:
          ["کارشناسی‌ارشد"," شنبه 8 تا10"," "," ",""," سه شنبه"],
        },
        {
          data:
          ["کارشناسی "," ","","",""," چهارشنبه"],
        },
     
   
    ]
  }
  const categirisFilter=[

    {
    title:"مقطع",
    datas:[
      {title:"همه", color:"#03045E"},
      {title:"کارشناسی ", color:"#0077B6"},
      {title:"کارشناسی‌ارشد", color:"#62B6CB"},
      {title:"دکتری", color:"#48CAE4"}
    ]
    },
    
]


  const [selectedFilters, setSelectedFilters] = useState({
    filter1: "",



  });
// تابعی برای تغییر مقدار فیلترها
const handleSelectChange = (key:string, value:string) => {
setSelectedFilters((prev) => ({ ...prev, [key]: value }));
if(value=="همه"){
  setSelectedFilters((prev) => ({ ...prev, [key]: " " }));
}
};

// فیلتر کردن داده‌ها بر اساس انتخاب‌های کاربر
const filteredProducts = dataPlan.rows.filter((row) => {
// چک کردن فیلترها
const filterMatch = Object.values(selectedFilters).every((filter) =>
  filter ? row.data.some((cell) => cell.toLowerCase().includes(filter.toLowerCase())) : true
);

// چک کردن جستجو
const searchMatch = searchTerm
  ? row.data.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase())) 
  : true;

return filterMatch && searchMatch; // هر دو باید true باشن
;
});


return (
<div>
       {/*    search  */}
          <div dir='rtl' className=" relative p-1 flex justify-center items-center">
            <div dir="rtl" className="serch  rounded-[15px] ml-2  w-[184px] h-[30px] border-2 border-[#03045E] flex items-center " >
             <div className='bg-[#03045E] flex items-center px-1 justify-center rounded-r-[15px] h-[30px] text-white'>
             <button >
             <IoMdSearch ></IoMdSearch>
             </button>
             </div>
                <input 
                onChange={(e) => setSearchTerm(e.target.value)}
    
                type="search" placeholder="Search" className='w-[140px] text-[10px] outline-0 mr-2' />
            </div>
            <div dir="rtl" className="filter  flex items-center  justify-between" >
                {/* <div className='w-[78px] h-[30px] border-2 rounded-[15px] border-[#03045E]'></div> */}
              <Date></Date>
            </div>
          </div>
    
    
          {/*    filter text    */}
          <div className='flex items-center mx-1' dir='rtl'>
            <div className='text-[#03045E]'>
            <CiFilter></CiFilter>
            </div>
              <p className='mr-1 text-[10px]'>اعمال فیلتر</p>
          </div>
   <div className="flex justify-around mt-1 mb-5 items-center" dir='rtl'>
        {categirisFilter.map((res,index)=>(
          <div className='flex mt-[20px] items-center place-content-center text-center justify-items-center'>
          <label
          className='text-center  w-[58.14px] h-[17px] rounded-[15px] border-2 border-[#03045E] text-[#03045e] flex justify-center items-center py-2 text-[10px]'
          >{res.title}</label>
          <div className="flex justify-center items-center">
            {res.datas.map((result)=>(
              
                 <div className='ml-4 flex items-center justify-between'>
                     <div className={`ml-1 text-[10px] mr-1 text-[${result.color}]`}
                     style={{color:result.color}}>
                      <FaRegDotCircle></FaRegDotCircle>
                     </div>
                    <p className={`text-[${result.color}] text-[8px] cursor-pointer`}
                     style={{color:result.color}}
                      onClick={() => handleSelectChange(`filter${index + 1}`, result.title)}

                    >{result.title}</p>
                 </div>
            ))}
        
          
          </div>
        
        </div>
  
         ))}
       </div>




          {filteredProducts.length>0 ? 
          <TableWeeklySchedule data={{ header: dataPlan.header, rows: filteredProducts }}></TableWeeklySchedule>
             :
             // <TablePlan data={data}></TablePlan>
           "پیدا نشد"
             }



   
          {/* <Routes>
            <Route path={"weeklySchedule"} element={<WeeklySchedule></WeeklySchedule>}></Route>
          </Routes> */}

           {/* <WeeklySchedule></WeeklySchedule> */}
          
        
</div>
)
}
