import React from 'react'
import Personagem from '../../components/Personagem'

const Fragmentos = () => {
  return (
    <div className='flex justify-center items-center flex-col pt-5'>
      <div>
        <span className='text-[#C89B3C] text-3xl'>PERSONAGENS</span>
      </div>
      <div className='md:flex  md:flex-wrap md:flex-row md:gap-10 md:pt-10 '>
        <Personagem
          nome='ANDRIUS'
          imagem='src/assets/personagens/Andrius/select.png'
        />
        <Personagem
          nome='KHAMZAT'
          imagem='src/assets/personagens/Khamzat/select.png'
        />
        <Personagem
          nome='MIZO'
          imagem='src/assets/personagens/Mizo/select.png'
        />
        <Personagem
          nome='KAIOH'
          imagem='src/assets/personagens/Kaioh/select.png'
        />
        <Personagem
          nome='NIVEK'
          imagem='src/assets/personagens/Nivek/select.jpg'
        />
        <Personagem
          nome='QALLINNA'
          imagem='src/assets/personagens/Qallinna/select.png'
        />
        <Personagem
          nome='RHODEN'
          imagem='src/assets/personagens/Rhoden/select.png'
        />
      </div>
    </div>
  )
}

export default Fragmentos
