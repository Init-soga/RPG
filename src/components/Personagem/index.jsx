import React from 'react'

const Personagem = ({ nome, imagem }) => {
  return (
    <>
      <div className='w-[60vw] flex justify-center flex-col items-center pt-5 pb-3 md:w-[15vw] md:flex'>
        <img src={imagem} className='rounded-full border-2 border-[#C89B3C]' />
        <div className='pt-2 text-[#C89B3C] text-xl'>{nome}</div>
      </div>
    </>
  )
}

export default Personagem
