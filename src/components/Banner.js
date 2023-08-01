import Image from 'next/image'
import React from 'react'
import img from 'public/img/thunder.png'

export default function Banner() {
  return (
    <div className='w-full h-fit rounded-xl bg-teal-300 mb-2 p-4'>
        <Image src={img} width={32} alt='image'/>
        <h1 className='text-xl text-gray-800 font-bold mt-4'>Pengetahuan Zakat</h1>
        <p className='text-sm text-gray-700 font-semibold mt-1 max-w-[400px]'>Megenal lebih dalam tentang tata cara pelaksanaan Zakat</p>
    </div>
  )
}
