import React from 'react'
const Navbar = () => {
  return (
    <div className='bg-gray-100 shadow-md'>
      <div className='container mx-auto py-2'>
      
          <nav className='flex justify-between items-center'>
              <a href='/' className='flex items-center gap-2 text-[20px] font-medium hover:text-sky-400 transition-all'><img
              className='hover:rotate-90 hover:transition-all'
              src='/logo192.png' width={50} height={50} alt='logo'/> React JS</a>
              <ul className='flex gap-6'>
                  <li><a className='hover:text-sky-400 hover:transition-colors' href='/'>Home</a></li>
                  <li><a className='hover:text-sky-400 hover:transition-colors' href='/'>Contact</a></li>
                  <li><a className='hover:text-sky-400 hover:transition-colors' href='/'>Services</a></li>
                  <li><a className='hover:text-sky-400 hover:transition-colors' href='/'>Features</a></li>
                  <li><a className='hover:text-sky-400 hover:transition-colors' href='/'>Book now</a></li>
                  <li><a className='hover:text-sky-400 hover:transition-colors' href='/'>About</a></li>
              </ul>
              <div className='bg-gray-200 p-1 rounded-sm' id='close'>
                <img src='/menu.svg' width={20} height={20} alt='Menu icon'/>
              </div>
          </nav>
      </div>
    </div>
  )
}

export default Navbar