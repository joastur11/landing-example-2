export function validateForm(data) {
  const errors = {}

  if (!data.nombre.trim()) errors.nombre = "El nombre es obligatorio"
  if (!data.apellido.trim()) errors.apellido = "El apellido es obligatorio"
  if (!data.email.trim()) {
    errors.email = "El email es obligatorio"
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "El email no es válido"
  }
  if (!data.mensaje.trim()) errors.mensaje = "Por favor, escribe un mensaje"

  return errors
}
