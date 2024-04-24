import React from 'react'

const Ficha = () => {
  return (
    <>
      <div className="w-screen h-[30vh] mb-4 md:h-[40vh] border-2 md:border-[#C89B3C] border-none bg-[url('https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/personagens/Khamzat/splash.png')] bg-cover bg-center"></div>
      <div>
        <div className='w-screen'>
          <img
            src='https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/visuals/divider.png'
            alt=''
          />
        </div>
        <span className='flex justify-center text-3xl pt-2 text-[#C89B3C]'>
          KHAMZAT
        </span>
        <span className='flex justify-center text-xl text-[#C89B3C]'>
          O FILHO DE NOXUS
        </span>
      </div>
      <div className='h-[15vh] flex justify-center gap-5'>
        <div className="w-[25vw] bg-[url('https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/roles/fighter.png')] bg-center bg-contain bg-no-repeat"></div>
        <div className="w-[25vw] bg-[url('https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/regions/ionia-noxus.png')] bg-center bg-contain bg-no-repeat"></div>
      </div>
      <span className='p-5 text-center text-[#C89B3C] flex justify-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga sint
        ratione ex aliquid dolorem, consequatur earum quisquam! Iure ea sit
        minus ipsam dolorum officia praesentium. Eaque consectetur odio eligendi
        aspernatur necessitatibus consequuntur libero expedita, similique
        mollitia at iusto quibusdam nam odit ipsam et cum voluptate repudiandae
        dolor quas ratione cumque?
      </span>
    </>
  )
}

export default Ficha
