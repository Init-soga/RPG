import React from 'react'

const Region = ({regionName, regionUrl}) => {
  return (
    <>
      <div className='flex flex-col justify-center items-center '>
        <div className={`w-[25vw] h-[8vh] md:h-[12vh]`}>
          <img
            src={regionUrl}
            alt=''
            className=' w-full h-full object-contain object-center'
          />
        </div>
        <div className='text-sm md:pt-5 text-[#C89B3C] font-bold'>{regionName}</div>
      </div>
    </>
  )
}

export default Region
