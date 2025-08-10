export function Hero (){
  return(
    <section id="hero" className="
    bg-orange-200
    bg-[url('/images/Hero2.png')]
    bg-cover
    bg-bottom
    bg-no-repeat
    min-h-screen
    flex
    items-center
    justify-center">
      <div className="flex flex-col md:flex-row w-full max-w-2xl mx-auto">
        <div className="border border-white/15 ring-1 ring-white/10 bg-white/10 backdrop-blur-md p-6 rounded-lg w-full md:w-[400px] h-[400px] flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Pesca como un campeón!</h2>
          <p className="text-lg md:text-xl font-bold text-white mb-8">Guiado por profesionales</p>
          <a href="#circuits" className="
            inline-block
            bg-yellow-600
            text-white 
            px-6 
            py-3 
            rounded-lg 
            text-lg
            ring
            ring-white/10 
            font-medium 
            hover:bg-yellow-700 
            transition
          "
          >Ver excursiones</a>
        </div>
      </div>
      <div className="w-1/2 hidden md:block"></div>
    </section>
  )
}
