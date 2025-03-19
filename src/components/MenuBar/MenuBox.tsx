import  'react'
interface dataType{
    title:string
    icon?: React.ReactNode
}
export default function MenuBox({title,icon}:dataType) {
  return (
    <div >
      <div dir='rtl' className="w-[285px] flex items-center h-[92px] bg-[#BEE9E8] rounded-[20px] px-2 py-3">
        <div className="flex items-center">
            <div className="icon w-[54px] h-[54px] rounded-[20px] border-1 border-[#1B4965] text-[#1B4965] flex items-center justify-center text-[20px] ml-2">{icon}</div>
            <div className="title">{title}</div>
        </div>
      </div>
    </div>
  )
}
