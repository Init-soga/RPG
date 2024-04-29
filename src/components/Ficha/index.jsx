import React from 'react'

const Ficha = ({
  name,
  title,
  bioTitle,
  charBio,
  charSpeach,
  splashUrl,
  roleName,
  roleUrl,
  regionName,
  regionUrl,
  relatedSplash1,
  relatedName1,
  relatedSplash2,
  relatedName2,
  relatedSplash3,
  relatedName3
}) => {
  return (
    <>
      <div className='w-screen h-[30vh] mb-4 md:h-[40vh] border-none'>
        <img
          src={splashUrl}
          alt=''
          className='w-[100%] h-[100%] object-cover object-center'
        />
      </div>
      <div>
        <div className='w-screen'>
          <img
            src='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/visuals/divider.png'
            alt=''
          />
        </div>
        <span className='flex justify-center text-2xl pt-2 text-[#C89B3C]'>
          {name}
        </span>
        <span className='flex justify-center text-l text-[#C89B3C]'>
          {title}
        </span>
      </div>
      <div className='h-[10vh] flex justify-center gap-5 mt-5 mb-3'>
        <div className='flex flex-col justify-center items-center'>
          <div className={`w-[25vw] h-[8vh]`}>
            <img
              src={roleUrl}
              alt=''
              className='w-full h-full object-contain object-center'
            />
          </div>
          <div className='text-center text-sm text-[#C89B3C]'>{roleName}</div>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <div className={`w-[25vw] h-[8vh]`}>
            <img
              src={regionUrl}
              alt=''
              className=' w-full h-full object-contain object-center'
            />
          </div>
          <div className='text-sm text-[#C89B3C]'>{regionName}</div>
        </div>
      </div>
      <div className='p-5 pb-8 text-l text-center text-[#C89B3C] flex flex-col justify-center'>
        <span className='pb-4'>"{bioTitle}"</span>
        <span className='text-sm px-4 text-justify'>{charBio}</span>
      </div>

      <div className='flex justify-center mb-7'>
        <span className='text-xl text-[#C89B3C]'>PERSONAGENS RELACIONADOS</span>
      </div>
      <div className='w-[100vw] text-white flex justify-center gap-3 pb-5'>
        <div className='w-[25vw] flex flex-col'>
          <img
            src={relatedSplash1}
            alt='First character with interaction with main char.'
            className='border-2 border-[#C89B3C] rounded-full'
          />
          <span className='text-center text-[#C89B3C]'>{relatedName1}</span>
        </div>
        <div className='w-[25vw] flex flex-col'>
          <img
            src={relatedSplash2}
            alt=''
            className='border-2 border-[#C89B3C] rounded-full'
          />
          <span className='text-center text-[#C89B3C]'>{relatedName2}</span>
        </div>
        <div className='w-[25vw] flex flex-col'>
          <img
            src={relatedSplash3}
            alt=''
            className='border-2 border-[#C89B3C] rounded-full'
          />
          <span className='text-center text-[#C89B3C]'>{relatedName3}</span>
        </div>
      </div>
      <div className='text-[#C89B3C] text-xs text-center p-5'>
        <span>{charSpeach}</span>
      </div>
    </>
  )
}

export default Ficha
