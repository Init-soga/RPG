import React from 'react'
import Personagem from '../../components/Personagem'

const Fragmentos = () => {
  return (
    <div className='flex justify-center items-center flex-col pt-5 text-'>
      <div>
        <span className='text-[#C89B3C] text-3xl'>Personagens</span>
      </div>
      <div>
        <Personagem nome="ANDRIUS" imagem="/src/assets/personagens/andrius.png"/>
        <Personagem nome="KHAMZAT" imagem="/src/assets/personagens/khamzat.png"/>
        <Personagem nome="MIZO" imagem="/src/assets/personagens/mizo.png"/>
      </div>
    </div>
  )
}

export default Fragmentos
