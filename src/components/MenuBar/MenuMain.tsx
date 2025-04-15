import  'react'
import { IoNewspaperOutline } from "react-icons/io5";
import MenuBox from './MenuBox';
import { BsFillPersonLinesFill } from "react-icons/bs";
import { PiBookOpenText } from "react-icons/pi";
import { GrPlan } from "react-icons/gr";
import { Link } from 'react-router-dom';
export default function MenuMain() {
    const data=[
        {title:"دروس ارائه شده",icon:<PiBookOpenText></PiBookOpenText> , link:"/SerchFilter"},
        {title:"برنامه‌کلاسی اساتید",icon:<BsFillPersonLinesFill></BsFillPersonLinesFill>, link:"/SerchFilter/professorsClass"},
        {title:"برنامه روزانه",icon:<IoNewspaperOutline></IoNewspaperOutline>, link:"/SerchFilter/dailySchedule"},
        {title:" برنامه امتحانی",icon:<GrPlan></GrPlan>, link:"/SerchFilter/ExamSchedule"},

    ]
  return (
    <div className='bg-white'>
        <div className='bg-white flex items-center justify-center mt-3 mb-10 w-[430px] h-[57px] border-b-2 border-b-[#03045E] shadow-xl'>
            <p className='text-[15px]'>دانشگاه خلیج فارس بوشهر</p>
        </div>
    <div className='flex items-center justify-center'>
    <div className='text-center grid gap-16'>
      {data.map((res,index)=>(
           <Link to={res.link}>
                   <MenuBox key={index} title={res.title} icon={res.icon} />
           </Link>
      ))}
    </div>
    </div>
    </div>
   
   
  )
}
