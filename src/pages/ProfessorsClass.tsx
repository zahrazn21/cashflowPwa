import  'react'
import { FaRegDotCircle } from "react-icons/fa";
// import TablePlan from '../components/table/TablePlan';
import { useEffect, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import TableProfessors from '../components/table/TableProfessors';
import { Link } from 'react-router-dom';
import Date from '../components/ui/date';
import axios from 'axios';
import IsLoding from '../utils/loading/IsLoding';
// import WeeklySchedule from './WeeklySchedule';
interface Schedule{
  header: string[];
  rows: {
    data: string[];
  }[];
};

export default function ProfessorsClass() {
    const [searchTerm, setSearchTerm] = useState("");
    const [isloading,setIsLoading]=useState(true)
    // const dataPlan={
    //     header:
    //       ["ظرفیت","دانشکده","مقطع","ساعت کلاسی","نام استاد","نام درس","گروه","کد درس"],
    //       rows:[
    //         {
    //           data:
    //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","اختیاری","1"," 1001"],
    //         },
    //         {
    //           data:
    //           ["35","علوم داده","کارشناسی"," شنبه 8 تا10","اختیاری","افسیر قرآن","1"," 1001"],
    //         },
    //         {
    //           data:
    //           ["35","علوم داده","کارشناسی"," شنبه 8 تا10","پایه","افسیر قرآن","1"," 1001"],
    //         },
    //         {
    //           data:
    //           ["35","علوم پایه","کارشناسی"," شنبه 8 تا10","پایه","اصلی","1"," 1001"],
    //         },
    //         {
    //           data:
    //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," چ اندیده","افسیر قرآن","1"," 1001"],
    //         },
    //         {
    //           data:
    //           ["35","مهندسی","کارشناسی ارشد"," شنبه 8 تا10","تخصصی","افسیر قرآن","1"," 1001"],
    //         },
    //         {
    //           data:
    //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10","تخصصی","افسیر قرآن","1"," 1001"],
    //         },
    //         {
    //           data:
    //           ["35","مهندسی","کارشناسی ارشد"," شنبه 8 تا10","پایه","افسیر قرآن","1"," 1001"],
    //         },
    //     ]
    // }
   const [dataTable, setDataTable] = useState<Schedule>(
      {
        header: [],
        rows:[]
      }
       );    
    useEffect(() => {
      
      axios.get("http://localhost:3000/ProfessorsClassِData")
        .then((res) => {
          // نمایش داده‌های دریافتی برای بررسی
          console.log("داده‌های دریافتی از API:", res.data);
  
          // بررسی وجود داده‌ها قبل از به روز رسانی state
          if (res.data && res.data[0]) {
            setDataTable(res.data[0]);
            setFilteredCourses(res.data[0]);

          } else {
            console.error("داده‌ها معتبر نیستند");
          }
          setIsLoading(false)
        })
        .catch((error) => {
          console.error("خطا در دریافت داده‌ها:", error);
        });
    }, []);
    const categirisFilter=[
        {
        title:"دانشکده",
        datas:[
          "همه",
          "ادبیات",
          "علوم",
          "مهندسی",
          "هنر",
          "حقوق"
        ]
        },
        {
            title:"رشته",
            datas: [
              "همه",
              "زبان و ادبیات فارسی",
              "ریاضی",
              "کامپیوتر",
              "طراحی صنعتی",
              "حقوق بین‌الملل",
              "شیمی",
              "نرم‌افزار",
              "ادبیات فارسی",
              "تاریخ هنر",
              "حقوق عمومی",
              "عمران",
              "فیزیک",
              "زبان‌شناسی",
              "حقوق تجارت",
              "الکترونیک",
              "زیست‌شناسی",
              "نقاشی",
              "ادبیات تطبیقی",
              "کامپیوتر",
              "حقوق جزا"
            ]
            
            },
        {
        title:"دروس",
        datas:[
          "همه","اصلی","تخصصی","پایه","اختیاری","عمومی"
        ]
        },
        {
        title:"مقطع",
        datas:["همه","کارشناسی","کارشناسی ارشد","دکتری"]
        },
        
    ]


      const [selectedFilters, setSelectedFilters] = useState({
        filter1: "",
        filter2: "",
        filter3: "",
        filter4: "",

    
      });


      const handleSelectChange = (key:string, value:string) => {
        setSelectedFilters((prev) => ({ ...prev, [key]: value }));
        if(value=="همه"){
          setSelectedFilters((prev) => ({ ...prev, [key]: " " }));
        }
      };
    
      const [filteredCourses, setFilteredCourses] = useState<{ data: string[] }[]>([]);
    
      const [filterClick,setFilterClick]=useState(false)
    
      // فیلتر کردن داده‌ها
      const filterCourses = () => {
        setFilterClick(true)
        const result = dataTable.rows.filter(course => {
          const courseMoqat = course.data[3];  // مقطع درس
          const courseNoe = course.data[7];    // نوع درس
          const courseDaneshkadeh = course.data[1];    // دانشکده
          const courseReshteh = course.data[2];    // رشته

       // مقایسه مقطع و نوع با ورودی‌های کاربر
          return (
            (selectedFilters.filter3 ? courseNoe === selectedFilters.filter3 : true) &&
            (selectedFilters.filter2 ? courseReshteh === selectedFilters.filter2 : true) &&
            (selectedFilters.filter1 ? courseDaneshkadeh === selectedFilters.filter1 : true)&&
            (selectedFilters.filter4 ? courseMoqat === selectedFilters.filter4 : true)

          );
        });
        setFilteredCourses(result);  // آپدیت کردن وضعیت با داده‌های فیلتر شده
      };
    
    
      
      // فیلتر کردن داده‌ها بر اساس انتخاب‌های کاربر
      useEffect(()=>{
        const filteredProducts = dataTable.rows.filter((row) => {
    
          setFilterClick(true)
    
          // چک کردن جستجو
          const searchMatch = searchTerm
            ? row.data.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase())) 
            : true;
      
          return  searchMatch; // هر دو باید true باشن
          ;
        });
        setFilteredCourses(filteredProducts);
        console.log("setfilter2222",filteredCourses);
    
      // eslint-disable-next-line react-hooks/exhaustive-deps
      },[dataTable,searchTerm])
    









  // تابعی برای تغییر مقدار فیلترها
  // const handleSelectChange = (key:string, value:string) => {
  //   setSelectedFilters((prev) => ({ ...prev, [key]: value }));
  //   if(value=="همه"){
  //     setSelectedFilters((prev) => ({ ...prev, [key]: " " }));
  //   }
  // };

  // // فیلتر کردن داده‌ها بر اساس انتخاب‌های کاربر
  // const filteredProducts = dataTable.rows.filter((row) => {
  //   // چک کردن فیلترها
  //   const filterMatch = Object.values(selectedFilters).every((filter) =>
  //     filter ? row.data.some((cell) => cell.toLowerCase().includes(filter.toLowerCase())) : true
  //   );

  //   // چک کردن جستجو
  //   const searchMatch = searchTerm
  //     ? row.data.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase())) 
  //     : true;

  //   return filterMatch && searchMatch; // هر دو باید true باشن
  //   ;
  // });

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
                    <Date></Date>
                </div>
              </div>
        
        
              {/*    filter text    */}
              <div className='flex items-center mx-1 cursor-pointer ' dir='rtl' onClick={filterCourses}>
                <div className='text-[#03045E]'>
                <CiFilter></CiFilter>
                </div>
                  <p className='mr-1 text-[10px]'>اعمال فیلتر</p>
              </div>
       <div className="flex justify-around mt-1 mb-5 items-center" dir='rtl'>
            {categirisFilter.map((res,index)=>(
              <div className='grid place-content-center text-center justify-items-center'>
              <label
              className='text-center  w-[58.14px] h-[17px] rounded-[15px] border-2 border-[#03045E] text-[#03045e] flex justify-center items-center py-2 text-[10px]'
              >{res.title}</label>
              <div className="flex justify-center items-center">
              <div className='text-[10px] mr-1 text-[#03045E]'>
              <FaRegDotCircle></FaRegDotCircle>
              </div>
              <select 
                  onChange={(e) => handleSelectChange(`filter${index + 1}`, e.target.value)}
                  className={`text-[10px]  appearance-none py-1  text-center z-10 hiddenBox rounded-[15px] border-none outline-none`} 
               name={res.title} id={res.title}
               >
      
               {res.datas.map((result,j)=>(
               
                <option
              dir='rtl'
              className='bg-[#CAF0F8]  border-none outline-none text-[10px]' value={j==0 ? "":result}>{result}</option>
             
            
             ))}       
              </select>
              </div>
            
            </div>
      
             ))}
           </div>


           

           
                          {isloading? 
                          
                          
                          <>
                          <IsLoding></IsLoding>
                          </>   
                          
                          :  
                          filterClick==false ? 
                                  <TableProfessors data={dataTable}/>
                      :
                      filteredCourses.length>0  ? 
                       <TableProfessors data={{ header: dataTable.header, rows: filteredCourses }} />
                       
                     :
                     // <TablePlan data={data}></TablePlan>
                     <div className='text-center'>
                     پیدا نشد
                    </div>                   
           
                      }



              
              <Link to={"/SerchFilter/weeklySchedule"}>
              <div className='flex justify-center  items-center fixed bottom-20  botton-[20px] right-0 left-0  w-[100%]'>
                <button className='w-[105px] text-amber-50 text-[7px] h-[37px] rounded-[10px] bg-[#03045E]'>
                نمایش به‌صورت برنامه‌هفتگی
                </button>
              </div>
              </Link>
              {/* <Routes>
                <Route path={"weeklySchedule"} element={<WeeklySchedule></WeeklySchedule>}></Route>
              </Routes> */}

               {/* <WeeklySchedule></WeeklySchedule> */}
              
            
           
    </div>
  )
}
