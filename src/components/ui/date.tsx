import 'react'
import moment from "moment-jalaali"

export default function Date() {
    const date = moment().locale("fa").format("jYYYY/jMM/jDD"); // خروجی: ۱۴۰۲/۱۲/۲۹

  return (
 <div className='w-[78px] text-[#9A9898] h-[30px] border-2 text-[12px] flex items-center justify-center rounded-[15px] border-[#03045E]'>
    {date}
 </div>
  )
}
