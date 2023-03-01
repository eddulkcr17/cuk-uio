import React from 'react'

export const HeadLineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Bebidas calientes</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Ordenar</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Sanduches</p>
          <p className='px-2'></p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Ordenar</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1603898/pexels-photo-1603898.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>Bebidas frias</p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Ordenar</button>
        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/7790874/pexels-photo-7790874.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}

export default HeadLineCards
