import React from 'react'
import { Carousel } from 'flowbite-react'

const Skills = ({ charData }) => {
  const carouselImages = charData.skills

  return (
    <div>
      <div className='flex justify-center h-[10vh] pt-[3vh] text-xl text-[#C89B3C]'>
        Habilidades/Itens de {charData.name}
      </div>
      <div>
        <Carousel leftControl="left" rightControl="right" slide={false} className='h-[85vh]'>
          {carouselImages.map(image => (
            <img src={image} className='w-full object-contain' />
          ))}
        </Carousel>
        {/* <Carousel nextArrow={() => (<></>)} prevArrow={() => (<></>)}>
          {carouselImages.map(image => (
            <img src={image} className='h-[85vh] w-full object-contain' />
          ))}
        </Carousel> */}
      </div>
    </div>
  )
}

export default Skills
