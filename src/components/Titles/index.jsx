import React from 'react'

const Titles = ({ name, title }) => {
  return (
    <>
      <div className='w-[100%] py-6'>
        <img
          src='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/visuals/divider.png'
          alt='Separator'
        />
      </div>
      <span className='flex justify-center text-2xl pt-2 text-[#C89B3C] md:text-4xl md:font-bold'>
        {name}
      </span>
      <span className='flex justify-center text-l text-[#C89B3C] md:text-2xl'>{title}</span>
    </>
  )
}

export default Titles
