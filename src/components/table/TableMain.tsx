import 'react'

export default function TableMain() {
  const dataPlan={
    header:
      ["","8-10","10-12","1-3","3-5","5-7"],
      rows:[
        {
          data:
          ["شنبه","Ai",'','',"SE",""],
        },
        {
          data:
          ["یکشنبه","",'DM','',"SE","Ai"],

        },
        {
          data:
          ["دوشنبه","",'DM','',"",""],
        },
        {
          data:
          ["سه شنبه","Ai",'','',"",""],
        },
        {
          data:
          ["چهارشنبه","Ai",'DM','',"SE",""],
        },
       
    ]

  }
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
      <table className='w-[100%]' dir='rtl'>
        <thead>
          <tr className='' >
            {dataPlan.header.map((res,index)=>(
               <th className={` bg-[rgb(24_73_103)]  ${index==1 ?"h-[20px] rounded-tl-[15px]": index==0 ?"w-[15px] rounded-tr-[15px] ": "rounded-t-[12px] "}`}  key={index} >
                 <p className={` ${ index==0 ? "w-[15px] ":"text-white"} text-[8px]   `}    
                >
                 {res}
                 </p>
               </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dataPlan.rows.map((res,index)=>(
            <tr key={index}>
                {res.data.map((result,i)=>(
                  <td className='  text-center' key={i}>
                  <p className={`${i==0 && index==0  ? "rounded-br-[8px]" :index>=1 && i==0 ? "rounded-r-[8px] ":""} ${i==0  ? "bg-[rgb(24_73_103)] text-white w-auto":"bg-[#BFE9E8] hover:bg-gray-200 cursor-pointer"} h-[39px] border-1 border-[rgb(24_73_103)] text-[7px] items-center flex justify-center` }

                >
                    <p className={`${index>=0 && i==0 ? "rotate-90 text-[4px]":""}`}>
                    {result || "-"}
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
