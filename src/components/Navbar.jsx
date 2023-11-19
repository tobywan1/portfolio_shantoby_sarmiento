import React from 'react'

export default function Navbar({logo}) {
  return (
    <nav className='p-6 w-full flex flex-row items-center justify-between bg-gray-500'>
    <div className='text-3xl font-bold'>{logo}</div>
    <div className='flex flex-row gap-2 font-bold justify-between'>
    <div>Home</div>
    <div>Services</div>
    <div>Portfolios</div>
    <div>Testimonials</div>
    </div>
    <button className='px-4 py-2 bg-blue-500 rounded-full'>Hire Me!</button>
      </nav>
  )
}
