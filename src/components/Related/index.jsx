import React from 'react'

const Related = ({relatedSplash, relatedName}) => {
  return (
    <div>
      <div className='w-[25vw] md:w-[15vw] flex flex-col'>
        <img
          src={relatedSplash}
          alt='First character with interaction with main char.'
          className='border-2 border-[#C89B3C] rounded-full'
        />
        <span className='text-center pt-2 text-[#C89B3C]'>{relatedName}</span>
      </div>
    </div>
  )
}

export default Related
