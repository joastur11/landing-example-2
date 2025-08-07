export function Circuits(){
  return(
     <section id="circuits" className="min-h-screen flex flex-col items-center justify-center bg-orange-200">
        <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          Nuestras Excursiones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-amber-500 p-3 rounded ring-3 ring-teal-700 shadow-xl">
          <div className="flex justify-center">
            <img 
              src="/images/Circuito1.jpg" 
              alt="Circuito 1" 
              className="rounded w-full max-w-[512px] h-auto object-cover hover:opacity-80 transition duration-300 cursor-pointer ring-2 ring-teal-700" />
          </div>
          <div className="col-span-1 grid grid-rows-2 gap-4">
            <img 
              src="/images/Circuito2.jpg" 
              alt="Circuito 2" 
              className="rounded w-full max-h-[334px] h-auto object-cover hover:opacity-80 transition duration-300 cursor-pointer ring-2 ring-teal-700" />
            <img 
              src="/images/Circuito3.jpg" 
              alt="Circuito 3" 
              className="rounded w-full max-h-[334px] h-auto object-cover hover:opacity-80 transition duration-300 cursor-pointer ring-2 ring-teal-700" />
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/Circuito4.jpg" 
              alt="Circuito 4" 
              className="rounded w-full max-w-[512px] h-auto object-cover hover:opacity-80 transition duration-300 cursor-pointer ring-2 ring-teal-700" />
          </div>
        </div>
     </section>
  )
}