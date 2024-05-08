import React from 'react'

const Splash = ({ splashUrl }) => {
  return (
    <div className='w-[100%] h-[30vh] md:h-[40vh] mb-4 md:border-2 md:mb-0 md:border-[#C89B3C]'>
      <img
        src={splashUrl}
        alt=''
        className='w-[100%] h-[100%] object-cover object-center'
      />
    </div>
  )
}

export default Splash
