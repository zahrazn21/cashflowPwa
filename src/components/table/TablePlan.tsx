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
export default function TablePlan({data}:T) {
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
    <div className='mx-1 flex items-center  justify-center'>
      <table className='w-[100%]'>
        <thead>
          <tr className=''>
            {data.header.map((res,index)=>(
               <th className='' key={index} >
                 <p className={`mx-[2px] ${index==6 || index==7 ? "":"text-white"} text-[8px] p-1 bg-[${colorHead[7-index]}] `}    
                 style={index==6 || index ==7 ? {border:`1px solid black`}:{ backgroundColor: colorHead[(7-index) % colorHead.length] ,border:`1px solid ${colorHead[(7-index)%colorHead.length]}` }}
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
                 
                  <p className={`${i==7 || i==6  ? "bg-[#03045E] text-white" :" hover:bg-gray-200 cursor-pointer"} border-[#D9D9D9] border-1 m-[2px] p-1 text-[7px]` }
                // style={i==6 || i==7 ? {border:`1px solid black`}:{ border:`1px solid ${colorHead[(7-i)%colorHead.length]}` }}

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
