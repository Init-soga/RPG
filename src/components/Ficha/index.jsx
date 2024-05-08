import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
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
      <MobileView>
        {/* MOBILE */}
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
      </MobileView>

      <BrowserView>
        {/* DESKTOP */}

        <div className='pt-10 h-[100vh] overflow-x-hidden'>
          <div className='w-[100%]'>
            
            {/* ROLE, REGION & SPLASH */}

            <div className='flex justify-around px-5'>
              <Role roleName={charData.roleName} roleUrl={charData.roleUrl} />
              <Splash splashUrl={charData.splashUrl} />
              <Region
                regionName={charData.regionName}
                regionUrl={charData.regionUrl}
              />
            </div>

            {/* TITULOS */}

            <Titles name={charData.name} title={charData.title} />

            {/* BIO */}

            <div>
              <Bio bioTitle={charData.bioTitle} charBio={charData.bio} />
            </div>

            {/* RELACIONADOS */}

            <div>
              <div>
                <div className='flex justify-center mb-7'>
                  <span className='text-xl text-[#C89B3C] font-bold'>
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
            </div>

            {/* FALA */}

            <div>
              <Speach charSpeach={charData.speach} />
            </div>
          </div>
        </div>
      </BrowserView>
    </>
  )
}

export default Ficha
