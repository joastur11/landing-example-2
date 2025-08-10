import { FaGithub } from "react-icons/fa";

export function Footer (){
  return(  
    <section className="bg-orange-200 flex justify-start p-6">
      <footer className="rounded-lg shadow-sm m-4 bg-gray-800 opacity-95 backdrop-blur-xs w-fit">
          <div className="flex flex-row gap-4 items-center p-4">
            <span className="text-sm sm:text-center text-gray-400">2025 
              <a href="https://github.com/joastur11" className="hover:underline ml-1 items-center inline-flex">@joastur11<FaGithub className="ml-1 h-4 w-4" /></a>
            </span>
            <span className="text-sm sm:text-center text-gray-400">Landing Page Example 2</span>
            <span className="text-sm sm:text-center text-gray-400"><a href="#hero" className="hover:underline me-4 md:me-6">Ir arriba</a></span>
          </div>
      </footer>
    </section>
  )
}
