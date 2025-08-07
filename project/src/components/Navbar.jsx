import { GiFishingLure } from "react-icons/gi"

export function Navbar (){
  return(
    <header className="sticky z-50 top-0 bg-teal-700 shadow-md">
      <div className='max-w-6xl mx-auto px-4 py-3 flex items-center justify-between'>
        <div className='flex items-center'>
          <GiFishingLure className='h-10 w-10 text-yellow-500' />
          <h1 className='px-1 text-xl text-yellow-500 font-bold'>Hello Fishing Tours</h1>
        </div>
        <nav className='space-x-6 hidden md:flex text-yellow-500 font-medium'>
          <a href="#about" className='hover:text-yellow-300'>Nosotros</a>
          <a href="#circuits" className='hover:text-yellow-300'>Excursiones</a>
          <a href="" className='hover:text-yellow-300'>Ustedes</a>
          <a href="" className='hover:text-yellow-300'>Contacto</a>
        </nav>
      </div>
    </header>
  )
}