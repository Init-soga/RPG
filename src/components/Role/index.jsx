import React from 'react'

const Role = ({ roleUrl, roleName }) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <div className='w-[25vw] h-[8vh] md:h-[12vh]'>
          <img
            src={roleUrl}
            alt=''
            className='w-full h-full object-contain object-center'
          />
        </div>
        <div className='text-center text-sm md:pt-5 text-[#C89B3C] font-bold'>
          {roleName}
        </div>
      </div>
    </>
  )
}

export default Role
