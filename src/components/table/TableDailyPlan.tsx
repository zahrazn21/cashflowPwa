
import 'react'


interface Schedule{
  header: string[];
  rows: {
    data: string[];
  }[];
};
interface T{
  data:Schedule
}
export default function TableDailyPlan({data}:T) {

  return (
    <div className='mx-1 flex items-center  justify-center'>
      <table className='w-[100%]' >
        <thead dir='rtl'>
          <tr className=''>
            {data.header.map((res,index)=>(
                    <th className='' key={index} >
                 <p className={`mx-[2px] ${index==5 ? "text-[#03045E] ":" bg-[#03045E] text-white" } border-1 border-[#03045E] text-[8px] p-1  `}    
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

                  <td className='text-center ' key={i}>
                  <p className={`${i==5 && "bg-[#03045E] text-white"} flex items-center justify-center hover:bg-gray-200 cursor-pointer border-1 m-[2px] h-[38px]  p-1 text-[8px]` }

                >
                  <p className="w-[20px] text-center flex items-center justify-center">
                  {result}
                  </p>
                  </p>
                  </td>
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

