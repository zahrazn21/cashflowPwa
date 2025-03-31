import 'react'
import {  useState } from 'react';
// import { IoPersonOutline } from "react-icons/io5";
// import { TbBaselineDensityMedium } from "react-icons/tb";
// import { FiAlertCircle } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { PiBookOpenText } from "react-icons/pi";
import { GrPlan } from "react-icons/gr";
import { Link, Route,  Routes, useLocation } from 'react-router-dom';
// import { routemenue } from '../../routers/routeMenu';
import CoursesOffered from '../../pages/CoursesOffered';
import ProfessorsClass from '../../pages/ProfessorsClass';
import WeeklySchedule from '../../pages/WeeklySchedule';
import DailySchedule from '../../pages/DailySchedule';
import ExamSchedule from '../../pages/ExamSchedule';
// import WeeklySchedule from '../../pages/WeeklySchedule';
// import WeeklySchedule from '../../pages/WeeklySchedule';

// interface Schedule{
//   header: string[];
//   rows: {
//     data: string[];
//   }[];
// };
// interface T{
//   datas:Schedule
// }
export default function SerchFilter() {
  


const [clickMenu,setClickMenue]=useState(false)
const handelClickMenu=()=>{
  if(clickMenu){
    setClickMenue(false)
  }else{
    setClickMenue(true)
  }

}

const selectbyClick=(res:string,icon:React.ReactNode)=>{
  setItem(res)
  setIconItem(icon)
  handelClickMenu()


}

   const menuData=[
    {title:"لیست دروس ارائه‌شده",link:"" , icon:<PiBookOpenText></PiBookOpenText>},
    {title:"برنامه‌کلاسی اساتید",link:"professorsClass", icon:<BsFillPersonLinesFill></BsFillPersonLinesFill>},
    {title:"برنامه روزانه",link:"dailySchedule",icon:<IoNewspaperOutline></IoNewspaperOutline>},
    {title:"برنامه امتحانی",link:"ExamSchedule", icon:<GrPlan></GrPlan>},

   ]
   
    
    
   const [item,setItem]=useState("لیست دروس ارائه‌شده")
   const [iconItem,setIconItem]=useState<React.ReactNode>(<PiBookOpenText></PiBookOpenText>)

  //  const router=useRoutes(routemenue)

  const pageVariants = {
    initial: { opacity: 0, y: "-100vh" }, // شروع از بالا
    animate: { 
      opacity: 1, 
      y: "0", 
      transition: { 
        duration: 2,  // مدت زمان بیشتر برای نرم‌تر شدن
        ease: [0.25, 1, 0.5, 1]  // یک منحنی طبیعی برای حرکت نرم
      } 
    },
    exit: { 
      opacity: 0, 
      y: "50px",  // کمی پایین میره و محو میشه
      transition: { 
        duration: 0.5, 
        ease: "easeIn"  // خروج سریع‌تر
      } 
    },
  };
  const location = useLocation();
   

  return (
    <div className=''>
      {/*    menue  */}
      <div  dir='rtl' className="relative mt-5 mb-10 flex items-center justify-center w-[430px] h-[38px] bg-[#CAE9FF]">
       <div className="cursor-pointer flex items-center" onClick={handelClickMenu}>
       <div  className='text-[20px] text-[#03045E]'>
        {iconItem}
       </div>
       <p className="select-none mr-2 text-[#03045E]">
        {item}
       </p>
       </div>
      
       {clickMenu && 
        <div className="boxMenu absolute z-20 top-[35px] mt-1 w-[217px] h-[146px] rounded-[15px] bg-[#CAF0F8]">
        <ul className='text-center grid gap-1 py-2 text-[10px]'>
          {menuData.map((res,index)=>(
            <Link to={res.link}>
                        <li key={index} onClick={()=>selectbyClick(res.title,res.icon)} className='select-none cursor-pointer py-2 hover:bg-[#A0DBE89E] hover:rounded-[15px] text-[#03045E]'>{res.title}</li>
            </Link>
          ))}
        </ul>
        </div>
      }
      </div>
     

      {/* {router} */}
      <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        // initial={shouldAnimate ? "initial" : false}

        animate="animate"
        // exit="exit"
        variants={pageVariants}
      >
        <Routes>
        <Route path='/' element={<CoursesOffered></CoursesOffered>}></Route>
        <Route path='professorsClass' element={<ProfessorsClass></ProfessorsClass>}></Route>
        <Route path='weeklySchedule' element={<WeeklySchedule></WeeklySchedule>}></Route>
        <Route path={"dailySchedule"} element={<DailySchedule></DailySchedule>}></Route>
        <Route path={"ExamSchedule"} element={<ExamSchedule></ExamSchedule>}></Route>

      </Routes>
      </motion.div>
      </AnimatePresence>
  
     
    </div>
  )
}
