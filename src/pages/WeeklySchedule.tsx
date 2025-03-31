import  'react'
import { FaRegDotCircle } from "react-icons/fa";
// import TablePlan from '../components/table/TablePlan';
import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import TableWeeklySchedule from '../components/table/TableWeeklySchedule';
import Date from '../components/ui/date';
import IsLoding from '../utils/loading/IsLoding';
import axios from 'axios';
// import WeeklySchedule from './WeeklySchedule';
interface Schedule {
  header: string[];
  rows: {
    data: (string | { course: string; level: string })[];
  }[];
};
export default function WeeklySchedule() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isloading,setIsLoading]=useState(true)
   const [dataTable, setDataTable] = useState<Schedule>(
      {
        header: [],
        rows:[]
      }
       ); 
       
  useEffect(() => {
      
    axios.get("http://localhost:3000/WeeklyScheduleData")
      .then((res) => {
        // نمایش داده‌های دریافتی برای بررسی
        console.log("داده‌های دریافتی از API:", res.data);

        // بررسی وجود داده‌ها قبل از به روز رسانی state
        if (res.data && res.data) {
          const fetchedData = res.data;
          localStorage.setItem("WeeklyScheduleData", JSON.stringify(fetchedData));
    
          setDataTable(fetchedData);
        } else {
          console.error("داده‌ها معتبر نیستند",res.data);
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.error("خطا در دریافت داده‌ها:", error);
      });
  }, []);

  useEffect(() => {
    const localData = localStorage.getItem("WeeklyScheduleData");
    if (localData) {
      const parsedData = JSON.parse(localData);
      setDataTable(parsedData);
      console.log("داده‌ها از LocalStorage بارگذاری شدند.");
    } else {
      console.log("هیچ داده‌ای در LocalStorage پیدا نشد.");
    }
    setIsLoading(false);
  }, []);
  
  
  const categirisFilter=[

    {
    title:"مقطع",
    datas:[
      {title:"همه", color:"#03045E"},
      {title:"کارشناسی", color:"#0077B6"},
      {title:"کارشناسی ارشد", color:"#62B6CB"},
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
const filteredProducts = dataTable.rows.map((row) => {
  // فیلتر کردن هر سلول از ردیف به صورت جداگانه
  const filteredCells = row.data.map((cell, index) => {
    if (index === 0) return cell; // (روزهای هفته)

    const filterMatch = Object.values(selectedFilters).every((filter) =>
      filter
        ? typeof cell === "object" &&
          (cell.course.toLowerCase().includes(filter.toLowerCase()) ||
            cell.level === filter)    
        : true
    );

    const searchMatch = searchTerm
      ? typeof cell === "object" &&
        (cell.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
          cell.level.toLowerCase().includes(searchTerm.toLowerCase()))
      : true;

    return filterMatch && searchMatch ? cell : ""; 
  });

  return { ...row, data: filteredCells };
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




          {/* {filteredProducts.length>0 ? 
          <TableWeeklySchedule data={{ header: dataTable.header, rows: filteredProducts }}></TableWeeklySchedule>
             :
             // <TablePlan data={data}></TablePlan>
           "پیدا نشد"
             } */}
        {isloading? 
               
               
               <>
               <IsLoding></IsLoding>
               </>   
               
             
           :
           filteredProducts.length>0  ? 
           <TableWeeklySchedule data={{ header: dataTable.header, rows: filteredProducts }}></TableWeeklySchedule>
            
          :
          // <TablePlan data={data}></TablePlan>
          <div className='text-center'>
          پیدا نشد
         </div>                   

           }


   
          {/* <Routes>
            <Route path={"weeklySchedule"} element={<WeeklySchedule></WeeklySchedule>}></Route>
          </Routes> */}

           {/* <WeeklySchedule></WeeklySchedule> */}
          
        
</div>
)
}
