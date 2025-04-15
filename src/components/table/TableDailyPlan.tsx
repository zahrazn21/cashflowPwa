
import 'react'
import { motion } from 'framer-motion';



const rowVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i:number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2, // فاصله بین هر ردیف
      duration: 0.2,
    },
  }),
};


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
    <div className='flex justify-center'>
    <div className="w-auto md:w-[420px] h-auto max-h-[60vh]  overflow-y-auto flex justify-center">
      <table  className="table-auto  md:max-w-[420px] max-w-[370x] border-collapse ">
      <thead className="sticky top-0 bg-white z-10 w-[500px]">
   
          <tr className=''>
            {data.header.map((res,index)=>(
              index<6 &&
           
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
              
                   <motion.tr
                   key={index}
                   custom={index}
                   initial="hidden"
                   animate="visible"
                   variants={rowVariants}
                 >
                {res.data.map((result,i)=>(
                 i<6&&
          
                   <td className='text-center ' key={i}>
                  <p className={`${i==5 && "bg-[#03045E] text-white"} flex items-center justify-center hover:bg-gray-200 cursor-pointer border-1 m-[2px] h-[38px]  p-1 text-[8px]` }

                >
                  <p className=" text-center flex items-center justify-center">
                  {result}
                  </p>
                  </p>
                  </td>
                
                ))}
              </motion.tr>
 

          ))}
        </tbody>
      </table>
    </div>
    </div>

  )
}

