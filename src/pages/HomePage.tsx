import  'react'
import logoUni from "../assets/image/logoUni.png"
import SerchInput from '../components/ui/serchInput'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div className='bg-[#BEE9E8] flex items-center justify-center'>
         <div className=" my-10 grid max-w-[430px] min-h-[512px] ">
                <div className="logo size-[219px]">
                  <img src={logoUni} alt="" />
                </div>
                <div>
                    <Link to={"/menu"}>
                    <button className="w-[224px] py-1 rounded-[20px] bg-white">
                    <p className='text-[#03045E]'>
                        ورود
                    </p>
                    </button>
                    </Link>
              
                </div>
               
                <div>
                    <SerchInput size='224' rounded='15px' color='#03045E'></SerchInput>
                </div>
                
         </div>
    </div>
  )
}
