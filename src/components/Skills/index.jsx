import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import { useNavigate } from 'react-router-dom'

const Skills = ({ charData }) => {
  const carouselImages = charData.skills

  const navigate = useNavigate()

  const handleBack = () => {
    navigate(`/personagens`)
  }

  return (
    <div>
      <div className='flex justify-center py-3 items-center font-bold text-xl text-[#C89B3C]'>
        Habilidades/Itens de {charData.name}
      </div>
      <div className='w-[100%] pb-3'>
        <img
          src='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/visuals/divider.png'
          alt='Separator'
        />
      </div>
      <div className='h-full px-5 pb-5'>
        <ImageGallery
          items={carouselImages}
          showNav={false}
          showThumbnails={true}
          showFullscreenButton={false}
          showPlayButton={false}
          infinite={false}
          showBullets={false}
        ></ImageGallery>
      </div>
      <div className='flex justify-center pb-5'>
        <button
          className='border-2 px-5 py-2 border-[#C89B3C] rounded-md text-[#C89B3C]'
          onClick={handleBack}
        >
          Voltar
        </button>
      </div>
    </div>
  )
}

export default Skills
