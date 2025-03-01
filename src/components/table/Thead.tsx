import 'react'


// interface Type {
//   title: string;
// }

interface dataType {
  datas: string[]; 
}


export default function Thead({datas}:dataType) {
    
  console.log(datas)
  return (
  <tr className=''>
      <th className='bg-[rgb(24_73_103)] w-[10px]  text-center h-[20px] rounded-tr-full'></th>
      {datas.map((res , index)=>(
        <th key={index} className={`${index==0 ? "rounded-tl-[10px] " : "rounded-t-[10px]" } text-center bg-[rgb(24_73_103)] w-[100px] h-[10px] text-[10px]`}>
          {res}
        
        </th>
      ))}
  </tr>
  )
}
