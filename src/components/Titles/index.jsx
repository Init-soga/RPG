import React from 'react'

const Titles = ({name, title}) => {
  return (
    <>
      <div className='w-screen'>
        <img
          src='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/visuals/divider.png'
          alt=''
        />
      </div>
      <span className='flex justify-center text-2xl pt-2 text-[#C89B3C]'>
        {name}
      </span>
      <span className='flex justify-center text-l text-[#C89B3C]'>{title}</span>
    </>
  )
}

export default Titles
