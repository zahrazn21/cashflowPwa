import 'react'
import { IoMdSearch } from "react-icons/io";

interface TypeInput{
    color:string
    rounded:string
    size:string

}
export default function SerchInput({color,size,rounded}:TypeInput) {
  return (
     <div dir="rtl" className={`serch rounded-[15px] bg-white  w-[${size}px] h-[30px]  flex items-center `} 
       style={{border:`2px solid ${color}`}}
     >
       <div className={`bg-[${color}] rounded-r-[${rounded}]  flex items-center px-1 justify-center  h-[30px] text-white`}>
            <IoMdSearch ></IoMdSearch>
       </div>
       <input type="search" placeholder="Search" className={`w-[ text-[10px] outline-0 mr-2`} 
        style={{width:`${parseInt(size)-40}px`}}
    />
    </div>
  )
}
