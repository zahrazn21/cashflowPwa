import  'react'
import { IoPersonOutline } from "react-icons/io5";
import MenuBox from './MenuBox';
import { Link } from 'react-router-dom';
export default function MenuMain() {
    const data=[
        {title:"برنامه رشته‌ها",icon:<IoPersonOutline></IoPersonOutline> , link:"/SerchFilter"},
        {title:"برنامه‌کلاسی اساتید",icon:<IoPersonOutline></IoPersonOutline>, link:"/SerchFilter"},
        {title:"برنامه روزانه",icon:<IoPersonOutline></IoPersonOutline>, link:"/"},
        {title:"برنامه‌کلاسی اساتید",icon:<IoPersonOutline></IoPersonOutline>, link:"/"},
        {title:"برنامه روزانه",icon:<IoPersonOutline></IoPersonOutline>, link:"/"},

    ]
  return (
    <div className=''>
        <div className='bg-[#62B6CB] flex items-center justify-center mt-3 mb-10 w-[430px] h-[57px] '>
            <p className='text-[15px]'>دانشگاه خلیج فارس بوشهر</p>
        </div>
    <div className='flex items-center justify-center'>
    <div className='text-center grid gap-8'>
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
