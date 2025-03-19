// import 'react'
// import { IoMdSearch } from "react-icons/io";
// import { CiFilter } from "react-icons/ci";
// import {  useRef, useState } from 'react';
// import TablePlan from '../table/TablePlan';
// // import FilterBox from '../FilterBox/FilterBox';
// import { FaRegDotCircle } from "react-icons/fa";
// import { TbBaselineDensityMedium } from "react-icons/tb";

// interface Schedule{
//   header: string[];
//   rows: {
//     data: string[];
//   }[];
// };
// interface T{
//   datas:Schedule
// }
// export default function SerchFilter2({datas}:T) {
  

//   const categirisFilter=[
//     {
//     title:"دانشکده",
//     datas:["همه","ادبیات","علوم داده","علوم پایه","پتروشیمی","مهندسی"]
//     },
//     {
//     title:"دروس",
//     datas:[
//       "همه","اصلی","تخصصی","پایه","اختیاری","عمومی"
//     ]
//     },
//     {
//     title:"مقطع",
//     datas:["همه","کارشناسی","کارشناسی‌ارشد","دکتری"]
//     },
// ]

//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedFilters, setSelectedFilters] = useState({
//     filter1: "",
//     filter2: "",
//     filter3: "",

//   });
//   const data2 =datas;

//   const filteredData = data2.rows.filter((row) =>
  
//     row.data.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase()))
  

//   );
// //   const [dataPlan,setDataPlan]=useState<Schedule>({
// //     header:
// //       ["ظرفیت","دانشکده","مقطع","ساعت کلاسی","نام استاد","نام درس","گروه","کد درس"],
// //       rows:[
// //         {
// //           data:
// //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
// //         },
// //         {
// //           data:
// //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
// //         },
// //         {
// //           data:
// //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
// //         },
// //         {
// //           data:
// //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10","  اندیده","افسیر قرآن","1"," 1001"],
// //         },
// //         {
// //           data:
// //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," چ اندیده","افسیر قرآن","1"," 1001"],
// //         },
// //         {
// //           data:
// //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
// //         },
// //         {
// //           data:
// //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
// //         },
// //         {
// //           data:
// //           ["35","ادبیات","کارشناسی"," شنبه 8 تا10","  اندیده","افسیر قرآن","1"," 1001"],
// //         },
// //     ]}
// // )
//   const searchRef = useRef<HTMLInputElement>(null);
//   // const search=()=>{
//   //   console.log(serchRef.current.value)
    
//   // }
   

//     const [data,setData]=useState<Schedule>(datas)
//     // const [newData,setNewData]=useState<Schedule>()
//     const search = () => {
//     // e.preventDefault()
//     const query = searchRef.current?.value.toLowerCase() || "";

//     // فیلتر کردن داده‌ها
//     const filteredRows = data.rows.filter((row) =>
//       row.data.some((cell) => cell.toLowerCase().includes(query))
//     );

//     // به‌روزرسانی فقط rows
//     setData((prev) => ({ ...prev, rows: filteredRows }));
    

    
//   };

//   console.log(data)

  


//  const [hiddebBoxFilter,sethiddenBoxFilter]=useState<boolean>(false)
//  const handelHidddenBoxFilter=()=>{
//   if(hiddebBoxFilter===true){
//     sethiddenBoxFilter(false)
//   }else{
//     sethiddenBoxFilter(true)
//   }
 
//  }



//  const [i,setI]=useState(0)

//  const handelClick=(index)=>{
//   setI(index)
// }
// const [select,setselect]=useState("")

// const selectBox=(res:string)=>{
//   console.log(res)
//   setselect(res)
// }




//   // تابعی برای تغییر مقدار فیلترها
//   const handleSelectChange = (key:string, value:string) => {
//     setSelectedFilters((prev) => ({ ...prev, [key]: value }));
//     if(value=="همه"){
//       setSelectedFilters((prev) => ({ ...prev, [key]: " " }));
//     }
//   };

//   // فیلتر کردن داده‌ها بر اساس انتخاب‌های کاربر
//   const filteredProducts = data2.rows.filter((row) => {
//     // چک کردن فیلترها
//     const filterMatch = Object.values(selectedFilters).every((filter) =>
//       filter ? row.data.some((cell) => cell.toLowerCase().includes(filter.toLowerCase())) : true
//     );

//     // چک کردن جستجو
//     const searchMatch = searchTerm
//       ? row.data.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase())) 
//       : true;

//     return filterMatch && searchMatch; // هر دو باید true باشن
//     ;
//   });
// console.log("log",filteredProducts)

// const [clickMenu,setClickMenue]=useState(false)
// const handelClickMenu=()=>{
//   if(clickMenu){
//     setClickMenue(false)
//   }else{
//     setClickMenue(true)
//   }

// }

// const selectbyClick=(res:string)=>{
//   setItem(res)
//   handelClickMenu()


// }

//    const menuData=[
//     {title:"لیست دروس ارائه‌شده",link:"/"},
//     {title:"برنامه‌کلاسی اساتید",link:"/"},
//     {title:"برنامه روزانه",link:"/"},
//     {title:"برنامه امتحانی",link:"/"},

//    ]
    
    
    
//    const [item,setItem]=useState("لیست دروس ارائه‌شده")
//   return (
//     <div className=''>
//       <div dir='rtl' className="relative mt-5 mb-10 flex items-center justify-center w-[430px] h-[38px] bg-[#CAE9FF]">
//        <div onClick={handelClickMenu} className='absolute right-[30%]  cursor-pointer'>
//        <TbBaselineDensityMedium></TbBaselineDensityMedium>
//        </div>
//        <p className="select-none mr-2">
//         {item}
//        </p>
//        {clickMenu && 
//         <div className="boxMenu absolute z-20 top-[35px] mt-1 w-[217px] h-[146px] rounded-[15px] bg-[#CAF0F8]">
//         <ul className='text-center grid gap-1 py-2 text-[10px]'>
//           {menuData.map(res=>(
//             <li onClick={()=>selectbyClick(res.title)} className='select-none cursor-pointer py-2 hover:bg-[#A0DBE89E] hover:rounded-[15px]'>{res.title}</li>
//           ))}
//         </ul>
//         </div>
//       }
//       </div>
     
    
      
//       <div dir='rtl' className=" relative p-1 flex justify-center items-center">
//         <div dir="rtl" className="serch  rounded-[15px] ml-2  w-[184px] h-[30px] border-2 border-[#03045E] flex items-center " >
//          <div className='bg-[#03045E] flex items-center px-1 justify-center rounded-r-[15px] h-[30px] text-white'>
//          <button >
//          <IoMdSearch ></IoMdSearch>
//          </button>
//          </div>
//             <input 
//             onChange={(e) => setSearchTerm(e.target.value)}

//             type="search" placeholder="Search" className='w-[140px] text-[10px] outline-0 mr-2' />
//         </div>
//         <div dir="rtl" className="filter  flex items-center  justify-between" >
//             {/* <div className="rounded-[15px] h-[30px] flex  w-[103px] border-2 border-[#1B4965]">
//                 <div onClick={handelHidddenBoxFilter} className="filterIcon bg-[#1B4965] flex items-center px-1 justify-center rounded-r-[15px]  text-white">
//                    <CiFilter></CiFilter>
//                 </div>
//                 <button className='text-[10px] mr-2'>filter</button>
//             </div> */}
//             <div className='w-[78px] h-[30px] border-2 rounded-[15px] border-[#03045E]'></div>
//         </div>
//       </div>



//       <div className='flex items-center mx-1' dir='rtl'>
//         <div className='text-[#03045E]'>
//         <CiFilter></CiFilter>
//         </div>
//           <p className='mr-1 text-[10px]'>اعمال فیلتر</p>
//       </div>
//       <div className={`${hiddebBoxFilter===false ? "hidden":"block"} w-[344px] absolute top-[120px] h-[236px] rounded-[15px] bg-[#CAF0F8]`}>
//       </div>
//       {/* <div dir='rtl' className='flex items-center justify-around m-5'>
//       {categirisFilter.map((result,index)=>(
//         <>
//         <h1 key={index} onClick={()=>handelClick(index)} className=' w-[58.14px] h-[17px] rounded-[15px] border-2 border-[#03045E] text-[#03045e] flex justify-center items-center py-2 text-[10px]'>{result.title}</h1>
//         <ul className={`${index==i ?"block":"hidden"} absolute max-w-[140px]  py-3 text-center  z-10 top-[160px] hiddenBox rounded-[15px] bg-[#CAF0F8]`} >
//           {result.datas.map((res)=>(
//             <li onClick={()=>selectBox(res)} className='hover:bg-gray-300 px-5 my-1 cursor-pointer'>{res}</li>
//           ))}        
//         </ul>
//         {i==index? select:""}
//         </>
//       ))}
//       </div> */}
//       {/* <div dir='rtl' className="flex justify-around">
//         {categirisFilter.map((res,index)=>(
//           <div className='flex'>
//             <h1 key={index} onClick={()=>handelClick(index)}  className=' w-[58.14px] h-[17px] rounded-[15px] border-2 border-[#03045E] text-[#03045e] flex justify-center items-center py-2 text-[10px]'>{res.title}</h1>
//             {index==i ?
//             <FilterBox  data={res.datas}></FilterBox>
//            :""  
//           }
//           {select}
//           </div>
//         ))}
//       </div> */}
//       {/* 3 */}
//       <div className="flex justify-around mt-1 mb-5 items-center" dir='rtl'>
//       {categirisFilter.map((res,index)=>(
//         <div className='flex items-center justify-center'>
//         <label
//         className='text-center w-[58.14px] h-[17px] rounded-[15px] border-2 border-[#03045E] text-[#03045e] flex justify-center items-center py-2 text-[10px]'
//         >{res.title}</label>
//         <div className='text-[10px] mr-1 text-[#03045E]'>
//         <FaRegDotCircle></FaRegDotCircle>
//         </div>
//         <select 
//             onChange={(e) => handleSelectChange(`filter${index + 1}`, e.target.value)}
//             className={`text-[10px] w-[60px] appearance-none py-1  text-center z-10 hiddenBox rounded-[15px] border-none outline-none`} 
//          name={res.title} id={res.title}
//          >

//          {res.datas.map((result)=>(
         
//           <option
//         dir='rtl'
//         className='bg-[#CAF0F8]  border-none outline-none text-[10px]' value={result}>{result}</option>
       
      
//        ))}       
//       </select>
//       </div>

//        ))}
//        {select}
//      </div>

















//      {filteredProducts.length>0 ? 
//         <TablePlan data={{ header: data.header, rows: filteredProducts }} />
//       :
//       // <TablePlan data={data}></TablePlan>
//     "پیدا نشد"
//       }


     
//       {/* {filteredData.length>0 || filteredProducts.length>0 ? 
//         <TablePlan data={{ header: data.header, rows: filteredData }} />
//       :
//       // <TablePlan data={data}></TablePlan>
//       <p>not found</p>
//     } */}
        

//     </div>
//   )
// }
