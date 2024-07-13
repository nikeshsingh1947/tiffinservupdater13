import React from 'react'
import {categories} from '../data/data.js'
import "./Category.css"
const Category = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-8'>
        {categories.map((item, index) => (
                <div key={index} className='bg-gray-100 rounded-lg p-4  items-center shadow-md cursor-pointer hover:bg-gray-200 '>
                    <img className='w-16' src={item.image} alt={item.name}/>
                    <p className='font-bold sm:text-xl' id='titlecat'>{item.name}</p>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Category