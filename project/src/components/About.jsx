export function About (){
  return(
    <section id="about" className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-6">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4">
          <div className="w-[300px] h-[400px] bg-[url('/images/Guia1.png')] bg-cover bg-center rounded-lg"></div>
          <div className="w-[300px] h-[400px] bg-[url('/images/Guia2.png')] bg-cover bg-center rounded-lg"></div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Pesca rico
          </h3>
          <p className="text-lg text-gray-600">
            Somos guías apasionados con años de experiencia en las aguas más ricas del país. Te llevamos a vivir una aventura inolvidable.
          </p>
        </div>
      </div>
    </section>
  )
}