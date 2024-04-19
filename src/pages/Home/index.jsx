import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/fragmentos')
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center min-w-screen min-h-screen bg-[url('./assets/root.png')] md:bg-[url('./assets/pcRoot.jpg')]">
        <br />
        <button
          className='border-[#C89B3C] bg-[#0A1428] border py-3 px-6 text-[#FFF]'
          onClick={handleClick}
        >
          Iniciar
        </button>
      </div>
    </>
  )
}

export default Home
