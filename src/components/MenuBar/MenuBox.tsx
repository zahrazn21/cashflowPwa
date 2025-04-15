import  'react'
interface dataType{
    title:string
    icon?: React.ReactNode
}
export default function MenuBox({title,icon}:dataType) {
  return (
    <div >
      <div dir='rtl' className="w-[358px] border-2 shadow-xl group active:bg-[#03045E] active:text-white border-[#03045E] flex items-center h-[103px] bg-white rounded-[33px] px-2">
        <div className="flex items-center">
            {/* <div className="icon w-[70px] h-[70px] rounded-[20px] border-1 border-[#1B4965] text-[#1B4965] flex items-center justify-center text-[20px] ml-2">{icon}</div> */}
            <div className="icon mx-6 group-active:text-white text-[#03045E] flex items-center justify-center text-[70px] ">{icon}</div>

            <div className="title">{title}</div>
        </div>
      </div>
    </div>
  )
}
