
import 'react'
import { useEffect, useState } from 'react';
interface Schedule {
  header: string[];
  rows: {
    data: (string | { course: string; level: string })[];
  }[];
};

interface T{
  data:Schedule
}
export default function TableWeeklySchedule({data}:T) {

    const dataFilter=[
        {title:"کارشناسی", color:"#0077B6"},
        {title:"کارشناسی‌ارشد", color:"#62B6CB"},
        {title:"دکتری", color:"#48CAE4"}
    ]
    const [test,setTest]=useState("")
    useEffect(() => {
        // در اینجا بررسی می‌کنیم که آیا تغییرات جدید در data.rows هست
        const match = dataFilter.find(item1 =>
          data.rows.some(item2 => item2.data.includes(item1.title))
        );
        if (match) {
          setTest(match.color);  // اگر تطابق پیدا کرد رنگ را به‌روزرسانی می‌کنیم
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [data.rows]);  // فقط زمانی که data.rows تغییر کند، useEffect اجرا می‌شود
    
    

     console.log("l",test)    
        
        
  return (
    <div className='mx-1 flex items-center  justify-center'>
      <table className='w-[100%]' dir='rtl'>
        <thead >
          <tr className=''>
            {data.header.map((res,index)=>(
                    <th className='' key={index} >
                        {dataFilter.map((res2)=>(
                                res.includes(res2.title) 
                            

                        ))}
                 <p className={`mx-[2px] border-[#03045E] h-[32px] flex items-center justify-center text-[#03045E]  border-2  text-[8px] p-1  `}    
                >
                 {res}
                 </p>
               </th>
                
               
            ))}
          </tr>
        </thead>
        <tbody>
          {data.rows.map((res,index)=>(
            <tr key={index}>
                {res.data.map((result,i)=>(

                  <td className='  text-center' key={i}>
                         {typeof result === "object" ? (
                  <>
                    <p className={`${i==5 ? "border-[#03045E]":""}  ${result.level === "کارشناسی" ? "bg-[#0077B6] border-[#0077B6]" : 
                     result.level === "کارشناسی ارشد" ? "bg-[#62B6CB] border-[#62B6CB]" : 
                     result.level === "دکتری" ? "bg-[#48CAE4] border-[#48CAE4]" : "border-gray-400"} 
                     ${i==0 ? "" : "text-white"} h-[36px] border-2 m-[2px]  flex items-center justify-center p-1 text-[6px]`}
                     >
                    {result.course}</p>
                  </>
                ) : (
                  <p className={`border-[#03045E] h-[36px]   border-2 m-[2px]  flex items-center justify-center p-1 text-[6px]` }
                  >{result}</p>
                )}
                  {/* <p className={`${i==5 ? "border-[#03045E]":""} ${result.includes("کارشناسی ") ? "bg-[#0077B6] border-[#0077B6]": result.includes("کارشناسی‌ارشد") ? "bg-[#62B6CB] border-[#62B6CB]": result.includes("دکتری") ? "bg-[#48CAE4] border-[#48CAE4]" :"border-gray-400"} ${i==0 ?"":"text-white"} h-[36px] hover:bg-gray-200 cursor-pointer border-2 m-[2px]  flex items-center justify-center p-1 text-[6px]` }
                >
                  {result}
                  </p> */}
                  </td>
                ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}

