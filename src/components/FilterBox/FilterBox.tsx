// import  'react'
// import { useState } from 'react'
// interface data{
//     data:string[]
// }
// export default function FilterBox({data}:data) {
 
//      const [i,setI]=useState(0)
    
//     //  const handelClick=(index)=>{
//     //   setI(index)
//     // }
//     // const [select,setselect]=useState("")
//     // const selectBox=(res)=>{
//     //   console.log(res)
//     //   setselect(res)
//     // }
//     const [select,setselect]=useState("")
//     const handelclick=(res)=>{
//         setselect(res)
//     }
//   return (
//     <div>
//       <div dir='rtl' className='flex items-center justify-around my-5'>
//         <>
//         <ul
//          className={` absolute max-w-[140px]  py-3 text-center   z-10 top-[140px] hiddenBox rounded-[15px] bg-[#CAF0F8]`} 
         
//          >
//           {data.map((res)=>(
//             <li onClick={()=>handelclick(res)} className='hover:bg-gray-300 px-5 my-1 cursor-pointer'>{res}</li>
//           ))}        
//         </ul>
        
//         </>
//       </div>
//       <div className="absolute top-0 bg-red-400">
//       {select}

//       </div>
     
//     </div>
//   )
// }
