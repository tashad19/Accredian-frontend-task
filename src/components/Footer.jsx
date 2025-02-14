import React from 'react'
import Logo from "../assets/footer_logo.webp"

function Footer() {
  return (
    <div>
      <div className='bg-stone-800 max-w-full min-h-40 flex justify-center'>
        <div className='w-[80%] relative p-2 flex flex-col justify-around'>
            <div className='py-10'>
                <img src={Logo} className='w-30 absolute' alt="accredian logo" />
                <button className="bg-blue-500 hover:bg-blue-600 cursor-pointer w-50 py-2 text-white rounded-lg absolute right-5">
                    Schedule 1:1 Call Now
                </button>
            </div>

            <div className='border-t-2 border-stone-400 text-center text-white text-[0.8rem] py-2'>
                © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights Reserved
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
