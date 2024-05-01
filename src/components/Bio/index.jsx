import React from 'react'

const Bio = ({bioTitle, charBio}) => {
  return (
    <>
      <div className='p-5 pb-8 text-l text-center md:pb-14 text-[#C89B3C] flex flex-col justify-center'>
        <span className='pb-4 md:text-2xl'>"{bioTitle}"</span>
        <span className='text-sm px-4 md:text-xl text-center'>{charBio}</span>
      </div>
    </>
  )
}

export default Bio
