import React from 'react'
import Button from '../../components/button/index'
import MeinImageMobile from '../../images/image-hero-mobile.png'
import MeinImage from '../../images/image-hero-desktop.png'
import { ReactComponent as Databiz } from '../../images/client-databiz.svg'
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg'
import { ReactComponent as Meet } from '../../images/client-meet.svg'
import { ReactComponent as Maker } from '../../images/client-maker.svg'

const MainSection = () => {
  return (
    <section className='w-full flex-col xl:flex-row flex mt-6 h-screen justify-between'>
        <div className="relative order-2 xl:order-1 w-full xl:w-2/4 text-center xl:text-left mt-12 xl:mt-60">
            <h1 className='text-3xl xl:text-8xl  font-black  whitespace-pre-line mt-6' >{`Make\n remote work`}</h1>
            <p className='text-medium-gray text-lg my-12 xl:whitespace-pre-line'>{`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Reprehenderit optio iure adipisci sapiente quasi minima neque esse sunt mollitia vero voluptates corrupti facere tenetur, nulla culpa consectetur laboriosam ipsam aliquam!`}</p>
        <Button isFilled={true}>Learn More</Button>
        <div className='flex  justify-around xl:absolute bottom-2 w-full mt-20'>
          <Databiz />
          <Audiophile />
          <Meet />
          <Maker />
        </div>
        </div>
        <div className='hidden xl:flex w-2/4 mt-20 xl:order-2'>
          <img src={MeinImage} alt="main-image" />
        </div>
        <div className='flex xl:hidden  mt-20 justify-center w-full mb-8 order-1'>
          <img src={MeinImageMobile} alt="main-image" />
        </div>
        
    </section>
  )
}

export default MainSection