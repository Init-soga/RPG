import React from 'react'
import { Carousel } from '@material-tailwind/react'

const Skills = ({ charData }) => {
  const carouselImages = charData.skills

  return (
    <div>
      <div className='flex justify-center h-[10vh] pt-[3vh] text-xl text-[#C89B3C]'>
        Habilidades/Itens de {charData.name}
      </div>
      <div>
        <Carousel nextArrow={() => (<></>)} prevArrow={() => (<></>)}>
          {carouselImages.map(image => (
            <img src={image} className='h-[85vh] w-full object-contain' />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default Skills
