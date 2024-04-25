import React from 'react'
import Personagem from '../../components/Personagem'

const Fragmentos = () => {
  return (
    <div className='flex justify-center items-center flex-col pt-5'>
      <div>
        <span className='text-[#C89B3C] text-3xl'>PERSONAGENS</span>
      </div>
      <div className='md:flex  md:flex-wrap md:flex-row md:gap-10 md:pt-10 md:justify-center '>
        <Personagem
          nome='ANDRIUS'
          imagem='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/personagens/Andrius/select.png'
        />
        <Personagem
          nome='KHAMZAT'
          imagem='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/personagens/Khamzat/select.png'
        />
        <Personagem
          nome='MIZO'
          imagem='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/personagens/Mizo/select.png'
        />
        <Personagem
          nome='KAIOH'
          imagem='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/personagens/Kaioh/select.png'
        />
        <Personagem
          nome='NIVEK'
          imagem='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/personagens/Nivek/select.jpg'
        />
        <Personagem
          nome='QALINNA'
          imagem='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/personagens/Qallinna/select.png'
        />
        <Personagem
          nome='RHODEN'
          imagem='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/personagens/Rhoden/select.png'
        />
      </div>
    </div>
  )
}

export default Fragmentos
