import React, { useState } from 'react'
import { data } from '../data/data.js'

function Food() {

  const [foods, setFoods] = useState(data);
  //filter Type
  const filterType =(category)=>{
    setFoods(
      data.filter((item)=>{
        return item.category === category;
      })
    )
  };

  // Filter by price

  const filterPrice =(price)=>{
    setFoods(
      data.filter((item)=>{
        return item.price === price;
      })
    )
  }

  return (

    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-green-600 font-bold text-4xl text-center'>Destacados del Menu</h1>
      {/* Filter Row */}
      <div className='flex flex-col lg-:flex-row justify-between'>
        {/*filter Type*/}
        <div>
          <p className='font-bold text-gray-700'>Filtro por Tipo</p>
          <div className='flex justify-between flex-wrap'>
            <button onClick={()=>setFoods(data)} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>Todo</button>
            <button onClick={()=>filterType('PICAR')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>Picar</button>
            <button onClick={()=>filterType('ACOMPAÑANTES')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>Acompanantes</button>
            <button onClick={()=>filterType('CAFE')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>Cafe</button>
            <button onClick={()=>filterType('CHOCOLATE')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>Chocolate</button>
            <button onClick={()=>filterType('BEBIDAS')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>Bebidas</button>
            <button onClick={()=>filterType('POSTRES')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>Postres</button>
            
          </div>

        </div>
        {/*filter Price*/}
        <div >
          <p className='font-bold text-gray-700'>Filtro por precio</p>
          <div className='flex justify-between max-w-[390px]'>
            <button onClick={()=>filterPrice('$')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>$</button>
            <button onClick={()=>filterPrice('$$')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>$$</button>
            <button onClick={()=>filterPrice('$$$')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>$$$</button>
            <button onClick={()=>filterPrice('$$$$')} className='m-1 border-green-600 text-green-700 hover:bg-green-700 hover:text-white'>$$$$</button>
          </div>
        </div>
      </div>
      {/*Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div key={index} className='border shadow-lg hover:scale-105 duration-300'>
            <img src={item.image} alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg' />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-green-600 text-white p-1 rounded-full'> {item.price}  </span>
              </p>
            </div>
          </div>
        )

        )}
      </div>

    </div >
  )
}

export default Food