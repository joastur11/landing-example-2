import { FaLongArrowAltRight } from "react-icons/fa";

export function About (){
  return(
    <section id="about" className="bg-orange-200 min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-50">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 gap-4">
          <div className="w-[300px] h-[400px] bg-[url('/images/Guia1.png')] bg-cover bg-center rounded-lg"></div>
          <div className="w-[300px] h-[400px] bg-[url('/images/Guia2.png')] bg-cover bg-center rounded-lg"></div>
        </div>
        <div className="w-full md:w-2/3 flex flex-col justify-center text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            Los Verdaderos Profesionales de la Pesca Deportiva
          </h3>
          <p className="text-lg text-gray-800">
            Somos guías con años de experiencia en las aguas más ricas y turbulentas del país. Bajo nuestra ala, podrás ser uno de nosotros, pescar y sentir como nosotros, para capturar tu propio monstruo de rio.
          </p>
          <div className="py-4 grid gap-4 text-left">
            <div className="flex gap-1">
              <FaLongArrowAltRight className='h-6 w-6 text-yellow-600 shrink-0' />
              <div className="flex flex-col">
                <h3 className="px-2 font-bold">Juan Fisher:</h3>
                <span className="text-left">Campeón mundial de pesca 5 años consecutivos (2015-16-17-18-19). Según expertos, nadie maneja la caña como el. Donde pone el ojo, pone el anzuelo, un francotirador del rio. Con sus indicaciones vas a clavar la caña donde quieras. </span>
              </div>
            </div>
            <div className="flex gap-1">
              <FaLongArrowAltRight className='h-6 w-6 text-yellow-600 shrink-0' />
              <div className="flex flex-col">
                <h3 className="px-2 font-bold">Pietro Placido Peterson:</h3>
                <span className="text-left">Criado por nutrias, abandonado como niño en una isla, creció prácticamente en el rio. No importa el clima, profundidad u hora del dia, Pietro puede rastrear un pez como si fuese un tiburón. Ademas, con sus conocimientos de la fauna local, siempre es un lujo escucharlo.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}