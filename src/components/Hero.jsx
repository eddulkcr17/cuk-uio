import React from 'react'

export const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 '>
      <div className='max-h-[500px] relative'>
        {/*Overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center '>
          <h1 className='px-4 text-4xl sm:text-5xl md:text6xl lg:text-7xl font-bold'>Una <span className='text-green-500'>Experiencia</span></h1>
          <h1 className='px-4 text-4xl sm:text-5xl md:text6xl lg:text-7xl font-bold'> <span  className='text-green-500'>diferente</span> para llevar</h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src='https://w4y8u4v5.rocketcdn.me/wp-content/uploads/2020/03/Hay-algo-mejor-que-un-desayuno-espanol-en-el-centro-de-Berlin.jpg' alt="" />
      </div>
    </div>
  )
}

export default Hero