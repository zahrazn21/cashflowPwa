
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
export default function TableProfessors({data}:T) {
  // const dataPlan={
  //   header:
  //     ["ظرفیت","دانشکده","مقطع","ساعت کلاسی","نام استاد","نام درس","گروه","کد درس"],
  //     rows:[
  //       {
  //         data:
  //         ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
  //       },
  //       {
  //         data:
  //         ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
  //       },
  //       {
  //         data:
  //         ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
  //       },
  //       {
  //         data:
  //         ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
  //       },
  //       {
  //         data:
  //         ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
  //       },
  //       {
  //         data:
  //         ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
  //       },
  //       {
  //         data:
  //         ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
  //       },
  //       {
  //         data:
  //         ["35","ادبیات","کارشناسی"," شنبه 8 تا10"," علی اندیده","افسیر قرآن","1"," 1001"],
  //       },
  //   ]
  // }
  const colorHead=[
    "#ffffff",
    "#ffffff",
    "#03045E",
    "#023E8A",
    "#00B4D8",
    "#90E0EF",
    "#48CAE4",
    "#48CAE4"

  ]
  console.log(colorHead[1])
  return (
    <div className="flex justify-center">
         <div className="w-[370px] xl:w-[420px] h-auto max-h-[50vh] overflow-x-scroll overflow-y-auto flex justify-center">
      <table dir='rtl' className="table-auto max-h-[50vh] w-[370px] xl:w-[420px] max-w-[430px] border-collapse ">
      <thead className="sticky top-0 bg-white z-10 w-[500px]">
      <tr className=''>
            {data.header.map((res,index)=>(
                index>0 &&
                    <th className='' key={index} >
                 <p className={`mx-[2px] ${index==6 ? "text-[#03045E]":"text-white bg-[#03045E]" } flex items-center justify-center h-[32px] border-1 border-[#03045E] text-[8px] p-1  `}    
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
                    i>0 &&
                  <td className='  text-center' key={i}>
                  <p className={`${ i==6  ? "bg-[#03045E] text-white" :" hover:bg-gray-200 cursor-pointer"} h-[36px] flex items-center justify-center border-[#D9D9D9] border-1 m-[2px] p-1 text-[7px]` }

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
    </div>
 
  )
}

