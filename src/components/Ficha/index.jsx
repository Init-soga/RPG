import React from 'react'
import Role from '../Role'
import Region from '../Region'
import Titles from '../Titles'
import Bio from '../Bio'
import Related from '../Related'
import Speach from '../Speach'
import Splash from '../Splash'

const Ficha = ({
  name,
  title,
  bioTitle,
  charBio,
  charSpeach,
  splashUrl,
  roleName,
  roleUrl,
  regionName,
  regionUrl,
  relatedSplash1,
  relatedName1,
  relatedSplash2,
  relatedName2,
  relatedSplash3,
  relatedName3
}) => {
  return (
    <>
      <div className='overflow-x-hidden'>
        {/* SPLASH ART */}

        <Splash splashUrl={splashUrl} />

        {/* TITULOS */}

        <div>
          <Titles name={name} title={title} />
        </div>

        {/* ROLE E REGION */}

        <div className='h-[10vh] md:h-[20vh] flex justify-center gap-5 md:gap-1 mt-5 mb-3'>
          <Role roleName={roleName} roleUrl={roleUrl} />
          <Region regionName={regionName} regionUrl={regionUrl} />
        </div>

        {/* BIO */}

        <Bio bioTitle={bioTitle} charBio={charBio} />

        {/* RELACIONADOS */}

        <div>
          <div className='flex justify-center mb-7'>
            <span className='text-xl text-[#C89B3C]'>
              PERSONAGENS RELACIONADOS
            </span>
          </div>
          <div className='w-[100vw] text-white flex justify-center gap-3 md:gap-8 pb-5'>
            <Related
              relatedSplash={relatedSplash1}
              relatedName={relatedName1}
            />
            <Related
              relatedSplash={relatedSplash2}
              relatedName={relatedName2}
            />
            <Related
              relatedSplash={relatedSplash3}
              relatedName={relatedName3}
            />
          </div>
        </div>

        {/* FALA */}

        <Speach charSpeach={charSpeach} />
      </div>
    </>
  )
}

export default Ficha
