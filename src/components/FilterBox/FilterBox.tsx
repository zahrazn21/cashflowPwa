import  'react'
import {  useEffect, useRef, useState } from 'react';

interface type{
    header: string[];
rows: {
  data: string[];
}[];

}

// type FilterBoxProps = {
//   categirisFilter: {
//     title:string;
//     datas:string[]
//   }; // تایپ درستشو اگه داری جایگزین کن
//   childComponent: React.ReactNode;
//   dataTable:{
//     header: string[];
// rows: {
//   data: string[];
// }[];
// }  
// filterCourses: () => void;
// };


interface Schedule{
    dataTable:{
        header: string[];
    rows: {
      data: string[];
    }[];
    }
    filteredCourses:{
      data:string[]
    }[]
    categirisFilter:{
        title:string;
        datas:string[]
    }[]
    childComponent: (props: { data: type }) => React.ReactNode;  
    filterCourses: () => void;
  };


  


export default function FilterBox({dataTable,categirisFilter,childComponent,filterCourses}:Schedule) {

  const [filteredCourses2, setFilteredCourses2] = useState<{ data: string[] }[]>(dataTable.rows);


  console.log("filteredCourses2",filteredCourses2);
  
  const [selectedFilters, setSelectedFilters] = useState({
    filter1: "",
    filter2: "",
    filter3: "",
    filter4: "",
  });

 
  //filter and search
  const handleSelectChange = (key: string, value: string) => {
    setShowTitle(value);
    setFlag(false);
    setSelectedFilters((prev) => ({ ...prev, [key]: value }));
    if (value == "همه") {
      setSelectedFilters((prev) => ({ ...prev, [key]: "" }));
    }
  };


  const [filterClick, setFilterClick] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");



  // فیلتر کردن داده‌ها بر اساس انتخاب‌های کاربر
  useEffect(() => {
    const filteredProducts = dataTable.rows.filter((row) => {
      setFilterClick(true);

      // چک کردن جستجو
      const searchMatch = searchTerm
        ? row.data.some((cell) =>
            cell.toLowerCase().includes(searchTerm.toLowerCase())
          )
        : true;

      return searchMatch; // هر دو باید true باشن
    });
    setFilteredCourses2(filteredProducts);
    console.log("setfilter2222", filteredCourses2);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTable, searchTerm]);




  const [clickMenu, setClickMenue] = useState(0);
  const [showTitle, setShowTitle] = useState("همه");
  const [flag, setFlag] = useState(false);

  const clickFilter = (index: number) => {
    if (clickMenu) {
      setClickMenue(index);
      setFlag(true);
    } else {
      setClickMenue(-1);
      setFlag(false);
    }
  };
    const boxRef = useRef<HTMLUListElement | null>(null);
  
    useEffect(() => {
      function handleClickOutside(event: MouseEvent): void {
        if (boxRef.current && !boxRef.current.contains(event.target as Node)) {
          setFlag(false);

        }
      }
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);









  return (
    <>
        <div dir='rtl' className=" relative p-1 flex justify-center items-center">
                    <div dir="rtl" className="serch  rounded-[15px] ml-2  w-[184px] h-[30px] border-2 border-[#03045E] flex items-center " >
                     <div  className='bg-[#03045E] flex items-center px-1 justify-center rounded-r-[15px] h-[30px] text-white'>
                     <button >
                     {/* <IoMdSearch ></IoMdSearch> */}
                     </button>
                     </div>
                        <input 
                        onChange={(e) => setSearchTerm(e.target.value)}
            
                        type="search" placeholder="Search" className='w-[140px] text-[10px] outline-0 mr-2' />
                    </div>
                   
        </div>
                  {/* <div dir="rtl" className="filter  flex items-center  justify-between" >
                     <Date></Date>
                    </div> */}
                  <div className='flex items-center mr-5' dir='rtl'>
                    <div className='text-[#03045E]'>
                    {/* <CiFilter></CiFilter> */}
                    </div>
                      <p className='mr-1 text-[10px] cursor-pointer' onClick={filterCourses}>اعمال فیلتر</p>
    
                  </div>
                 <div className=" justify-center">
           <div
            className="flex justify-around mt-1 mb-5 items-center w-[360px] md:w-[430px]"
            dir="rtl"
          >
            {categirisFilter.map((res, index:number) => (
              <div
              
              className="grid place-content-center text-center justify-items-center">
                <label
                  onClick={() => clickFilter(index + 1)}
                  className="text-center cursor-pointer  w-[58.14px] h-[17px] rounded-[15px] border-2 border-[#03045E] text-[#03045e] flex justify-center items-center py-2 text-[10px]"
                >
                  {res.title}
                </label>
                <div className="flex mt-2 justify-center items-center">
                  <div className="text-[10px] mr-1 text-[#03045E]">
                    {/* <FaRegDotCircle></FaRegDotCircle> */}
                  </div>
                  <div className="text-[10px] ">{index + 1 == clickMenu ? showTitle : Object.values(selectedFilters)[index] || "همه"}</div>
                  {clickMenu === index + 1 && flag && (
                    <ul
                    ref={boxRef}
  
                      className={`text-[10px] gap-[5px] grid  w-[80px] min-w-auto bg-[#fff] border-2 border-[#03045E]  appearance-none py-2 absolute  text-center z-50 top-48  rounded-[15px]  `}
                    >
                      {res.datas.map((result:string, j:number) => (
                        <li
                          onClick={() =>
                            handleSelectChange(`filter${index + 1}`, result)
                          }
                          dir="rtl"
                          className=" cursor-pointer py-[2px]  px-2 hover:bg-[#03045E] hover:text-white border-none outline-none text-[10px]"
                          value={j == 0 ? "" : result}
                        >
                          {result}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {filterClick}
          {/* {filteredCourses.length>0  &&
                      <TablePlan data={{ header: dataTable.header, rows: filteredCourses }} />}
               */}
                 </div>
          {/* {childComponent} */}
          {/* {childComponent({ data: { header: dataTable.header, rows: filteredCourses2 } })} */}





             { filterClick==false ? 
                       childComponent({ data:dataTable })
           :
           filteredCourses2.length>0? 
           childComponent({ data: { header: dataTable.header, rows: filteredCourses2 } })          :
          // <TablePlan data={data}></TablePlan>
          <div className='text-center'>
          پیدا نشد
         </div> 
           }







          </>
  )
}
