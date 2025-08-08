import { circuits } from '../mocks/circuits.json'

export function Modal ({ isModalOpen, setIsModalOpen, idActivo, setIdActivo }){
  
  const circuito = circuits.find(c => c.id === idActivo)

  const cerrarModal = () => {
    setIsModalOpen(false);
    setIdActivo(null);
  }

  if (isModalOpen){
    return(
      <div onClick={()=>cerrarModal()} className='fixed inset-0 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
        <div onClick={(e)=>e.stopPropagation()} className='max-w-lg rounded bg-amber-500 p-2 z-50 ring-2 ring-teal-700 shadow-lg'>
          <img src={circuito.images} className='ring-2 ring-teal-700 object-cover w-full h-full rounded' alt={circuito.title} />
          <strong className="font-bold flex flex-col items-center text-xl mb-2">{circuito.title}</strong>
          <p className="flex mt-2 flex-col items-center text-lg font-normal mx-auto text-center"> {circuito.details} </p>
        </div>
      </div>
    )
  }
  return null
}