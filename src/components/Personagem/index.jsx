import React from 'react'
import { useNavigate } from 'react-router-dom'

const Personagem = ({ nome, imagem }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    let nomeLower = nome.toLowerCase()
    navigate(`/personagens/${nomeLower}`)
  }

  return (
    <>
      <div
        className='w-[60vw] flex justify-center flex-col items-center pt-5 pb-3 md:w-[15vw] md:flex'
        onClick={handleClick}
      >
        <img src={imagem} className='rounded-full border-2 border-[#C89B3C]' />
        <div className='pt-2 text-[#C89B3C] text-xl font-bold'>{nome}</div>
      </div>
    </>
  )
}

export default Personagem
