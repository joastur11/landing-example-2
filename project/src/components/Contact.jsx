import { useState } from "react"
import { PiBuildingOffice } from "react-icons/pi"
import { BsTelephone } from "react-icons/bs"
import { MdOutlineEmail } from "react-icons/md"
import { validateForm } from "../utils/validations"

export function Contact (){
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    mensaje: ""
  })

  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validateForm(formData)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length === 0) { // esto dsp manda al back
      setSuccess("Mensaje enviado! Te responderemos en brevedad.")
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        mensaje: ""
      })
    } else {
      setSuccess("")
    }
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-orange-200">
      <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto gap-50">
        <div className="relative flex flex-col justify-center w-full md:w-1/2 gap-4">
          <div className="absolute inset-0 bg-orange-900/30 blur-2xl"></div>
          <h3 className="text-3xl text-center font-bold mb-4 text-gray-800">Contacto</h3>
          <p className="text-lg font-medium text-center">Podes hablar con nosotros por cualquiera de estos métodos. Si estas muy interesado en nuestros circuitos, llena el formulario a continuación para recibir una respuesta casi inmediata!</p>
          <div className="flex gap-1">
            <PiBuildingOffice className='h-6 w-6 text-teal-800 shrink-0'/>
            <p className="px-2 font-medium">Calle Urquiza 234, Paraná, Entre Ríos</p>
          </div>
          <div className="flex gap-1">
            <BsTelephone className='h-6 w-6 text-teal-800 shrink-0'/>
            <p className="px-2 font-medium">343-4856-4214</p>
          </div>
          <div className="flex gap-1">
            <MdOutlineEmail className='h-6 w-6 text-teal-800 shrink-0'/>
            <p className="px-2 font-medium">hellofishing@holache.com</p>
          </div>
        </div>
        <div className="bg-amber-500 p-3 rounded ring-3 ring-teal-700 shadow-xl w-full md:w-2/3 flex flex-col justify-center">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-3xl font-bold text-gray-800 mb-4">Pregúntanos!</h2>
          </div>
          <form action="#" onSubmit={handleSubmit} method="POST">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label htmlFor="nombre" className="block text-sm/6 font-bold text-gray-900">Nombre</label>
                <div className="mt-2.5">
                  <input id="nombre" type="text" name="nombre" value={formData.nombre} onChange={handleChange} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-teal-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600" />
                  {errors.nombre && <p className="text-sm/6 font-bold text-red-500 text-sm">{errors.nombre}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="apellido" className="block text-sm/6 font-bold text-gray-900">Apellido</label>
                <div className="mt-2.5">
                  <input id="apellido" type="text" name="apellido" value={formData.apellido} onChange={handleChange} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-teal-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600" />
                  {errors.apellido && <p className="text-sm/6 font-bold text-red-500 text-sm">{errors.apellido}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-gray-900">Email</label>
                <div className="mt-2.5">
                  <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-teal-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600" />
                  {errors.email && <p className="text-sm/6 font-bold text-red-500 text-sm">{errors.email}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="mensaje" className="block text-sm/6 font-bold text-gray-900">Que excursión te interesa?</label>
                <div className="mt-2.5">
                  <textarea id="mensaje" name="mensaje" rows="2" value={formData.mensaje} onChange={handleChange} className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-teal-500 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-600"></textarea>
                  {errors.mensaje && <p className="text-sm/6 font-bold text-red-500 text-sm">{errors.mensaje}</p>}
                </div>
              </div>
              <div className="sm:col-span-2">
                <button type="submit" className="block w-full rounded-md bg-teal-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs cursor-pointer hover:bg-teal-600">Vamos a pescar</button>
                {success && <p className="text-sm/6 font-bold text-teal-700 mt-2">{success}</p>}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}