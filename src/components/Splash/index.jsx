import React from 'react'

const Splash = ({splashUrl}) => {
  return (
    <div className='w-screen h-[30vh] md:h-[45vh] mb-4 md:flex md:justify-center md:mt-6 '>
      <img
        src={splashUrl}
        alt=''
        className='w-[100%] md:w-auto md:rounded-full md:border-4 md:border-[#C89B3C] h-[100%] object-cover object-center'
      />
    </div>
  )
}

export default Splash
