import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/personagens')
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[#010A13] pb-10">
        <div className='md:w-[40vw] pb-10'>
          <img src="https://live.staticflickr.com/65535/53760773719_c4d7daf624_o.png" alt="" />
        </div>
        <button
          className='border-[#C89B3C] bg-[#0A1428] border-2 text-xl py-3 px-6 text-[#FFF] font-bold rounded'
          onClick={handleClick}
        >
          Iniciar
        </button>
      </div>
    </>
  )
}

export default Home

