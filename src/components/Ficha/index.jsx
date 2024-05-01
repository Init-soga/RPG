import React from 'react'
import Role from '../Role'
import Region from '../Region'
import Titles from '../Titles'
import Bio from '../Bio'
import Related from '../Related'
import Speach from '../Speach'
import Splash from '../Splash'

const Ficha = ({ charData }) => {
  return (
    <>
      <div className='overflow-x-hidden'>
        {/* SPLASH ART */}

        <Splash splashUrl={charData.splashUrl} />

        {/* TITULOS */}

        <div>
          <Titles name={charData.name} title={charData.title} />
        </div>

        {/* ROLE E REGION */}

        <div className='h-[10vh] md:h-[20vh] flex justify-center gap-5 md:gap-1 mt-5 mb-3'>
          <Role roleName={charData.roleName} roleUrl={charData.roleUrl} />
          <Region
            regionName={charData.regionName}
            regionUrl={charData.regionUrl}
          />
        </div>

        {/* BIO */}

        <Bio bioTitle={charData.bioTitle} charBio={charData.bio} />

        {/* RELACIONADOS */}

        <div>
          <div className='flex justify-center mb-7'>
            <span className='text-xl text-[#C89B3C]'>
              PERSONAGENS RELACIONADOS
            </span>
          </div>
          <div className='w-[100vw] text-white flex justify-center gap-3 md:gap-8 pb-5'>
            <Related
              relatedSplash={charData.relatedSplash1}
              relatedName={charData.relatedName1}
            />
            <Related
              relatedSplash={charData.relatedSplash2}
              relatedName={charData.relatedName2}
            />
            <Related
              relatedSplash={charData.relatedSplash3}
              relatedName={charData.relatedName3}
            />
          </div>
        </div>

        {/* FALA */}

        <Speach charSpeach={charData.speach} />
      </div>
    </>
  )
}

export default Ficha
