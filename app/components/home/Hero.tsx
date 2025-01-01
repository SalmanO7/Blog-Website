import Image from 'next/image'
import React from 'react'
import HeroImg from "@/public/assets/Hero3.jpeg"


const Hero = () => {
    return (
        <div>
            <Image className='w-full h-screen' src={HeroImg} alt={"hero Img"} />
        </div>
    )
}

export default Hero