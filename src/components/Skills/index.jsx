import React from 'react'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'

const Skills = ({ charData }) => {
  const carouselImages = charData.skills

  return (
    <div>
      <div className='flex justify-center h-[10vh] pt-[3vh] text-xl text-[#C89B3C]'>
        Habilidades/Itens de {charData.name}
      </div>
      <div>
        <ImageGallery
          className='h-[85vh]'
          items={carouselImages}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          infinite={false}
        ></ImageGallery>
      </div>
    </div>
  )
}

export default Skills
