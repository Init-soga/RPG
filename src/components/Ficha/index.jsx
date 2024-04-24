import React from 'react'

const Ficha = () => {
  const khamzatBio =
    'Khamzat é uma figura misteriosa, com uma presença intensa que impõe respeito. Seu estilo de luta único combina luta tradicional Ioniana com magia arcana, permitindo que ele ataque e defenda com precisão mortal. Sua determinação é implacável e seu olhar sombrio sugerem um passado obscuro e uma força interior indomável. Aqueles que se unem a Khamzat devem estar dispostos a enfrentar a escuridão e suas complexidades, mas também podem descobrir um aliado feroz e leal.'

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
        <span className='flex justify-center text-2xl pt-2 text-[#C89B3C]'>
          KHAMZAT
        </span>
        <span className='flex justify-center text-l text-[#C89B3C]'>
          O FILHO DE NOXUS
        </span>
      </div>
      <div className='h-[10vh] flex justify-center gap-5 mt-5 mb-3'>
        <div>
          <div className="w-[25vw] h-[8vh] bg-[url('https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/roles/fighter.png')] bg-center bg-contain bg-no-repeat"></div>
          <div className='text-center text-sm text-[#C89B3C]'>LUTADOR</div>
        </div>
        <div>
          <div className="w-[25vw] h-[8vh] bg-[url('https://raw.githubusercontent.com/Init-soga/RPG/main/src/assets/regions/ionia-noxus.png')] bg-center bg-contain bg-no-repeat"></div>
          <div className='text-center text-sm text-[#C89B3C]'>IONIA/NOXUS</div>
        </div>
      </div>
      <div className='p-5 text-l text-center text-[#C89B3C] flex flex-col justify-center'>
        <span className='pb-4'>"O PASSADO É O MESTRE MAIS CRUEL"</span>
        <span className='text-sm px-2 text-justify'>{khamzatBio}</span>
      </div>
    </>
  )
}

export default Ficha
