

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
export default function TableExamSchedule({data}:T) {

  return (
    <div className="w-[432px] h-auto max-h-[70vh] flex justify-center overflow-y-auto">
      <table  className="table-auto w-[99%] border-collapse ">
      <thead dir='rtl' className="sticky top-0 bg-white z-10 w-[500px]">
      <tr className='' dir='rtl'>
            {data.header.map((res,index)=>(
                index<3 &&
                    <th className='' key={index} >
                 <p className={`mx-[2px] ${index==2 ? "bg-[#62B6CB] min-w-[200px] border-[#62B6CB]":"border-[#03045E] bg-[#03045E]" } text-white border-1 h-[32px] flex items-center justify-center text-[8px] p-1  `}    
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
                    i<3 &&

                  <td className='  text-center' key={i}>
                  <p className={`hover:bg-gray-200 cursor-pointer flex items-center justify-center h-[36px]  border-[#D9D9D9] border-1 m-[2px] p-1 text-[7px]` }

                >
                  {result}
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

