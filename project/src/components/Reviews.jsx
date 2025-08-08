export function Reviews (){
  return(
    <section id="reviews" className="min-h-screen flex flex-col items-center justify-center bg-orange-200">
      <h2 className="text-4xl md:text-4xl font-bold text-gray-800 mb-4">
        Sus testimonios
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-amber-500 p-3 rounded ring-3 ring-teal-700 shadow-xl">
        <div className="col-span-1 grid grid-rows-2 gap-4">
          <p>Lorem ipsum Lorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsumLorem ipsum</p>
        </div>
      </div>
    </section>
  )
}