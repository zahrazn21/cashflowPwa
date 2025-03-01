import  'react';
// import data from '../../data/data';

// interface Type {
//   title: string;
// }

// interface T {
//   name: string;
//   day: string;
//   time: string;
// }

// type ScheduleData = {
//   headers: string[];
//   rows: {
//     time: string;
//     data: string[];
//   }[];
// };

// interface Ty{
//   time:string
//   data:string[]
// }
// interface T{
//   headers:string[]
//   rows:Ty[]
// }

interface dataType {
  datas: string[];
  // dat: T[];
  // datahead:Type[]
}

export default function Tr({ datas,  }: dataType) {
  return (
    <>
      {datas.map((res,index) => (
        <td
          key={index}
          className="bg-[#BFE9E8] text-center border-2 border-t-transparent border-r-transparent border-[rgb(119_161_165)]"
        >
            <p>
              {res}
                {/* {dat[index]?.time===datahead[i].title ? dat[i]?.name : ''} */}
            </p>
        
        </td>
      ))}
      

    </>
  );
}
