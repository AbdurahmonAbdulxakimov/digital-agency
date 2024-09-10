import Image from 'next/image'
import React from 'react'

interface IBannerProps {
  title: string,
  content: string,
  hasLogo ?: boolean,
  btn ?: React.ReactNode
}

const Banner = ({title, content, hasLogo = false, btn = null}: IBannerProps) => {
  return (
    <div className='w-full flex flex-col justify-center items-center text-center gap-10 py-24 banner'>
      {hasLogo ? <Image src={`/Logo/logo-abstract.svg`} alt="Logo" width={50} height={50} className='lg:w-[60px] lg:h-[60px] xl:w-[80px] xl:h-[80px]' /> : ""}
      <div>
        <h2 className='xl:text-4xl md:text-3xl text-2xl mb-2'>{title}</h2>
        <p className='text-secondary-foreground'>{content}</p>
      </div>
      {btn !== null ? btn : ""}
    </div>
  )
}

export default Banner