import 'react'
import "./isloading.css"
export default function IsLoding() {
  return (
    <div className='w-[430px] h-[50vh] fixed  z-50 flex items-center justify-center  bg-[rgba(238,238,238,0.55)]'>

    {/* <div className='w-[430px] h-[50%] fixed  z-50 flex items-center justify-center bg-[rgba(19,19,19,0.55)]'> */}
    
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      {/* <div className='loader  w-[400px] h-[500px] size-[60px]'></div> */}
    </div>
  )
}
