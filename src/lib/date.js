/* import { parseISO, format } from 'date-fns'

export default function Date({ dateString }) {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
} */


  import { parseISO, format } from 'date-fns'  // Importa las funciones de date-fns
  import { es } from 'date-fns/locale'         // Importa el locale español
  
  export default function Date({ dateString }) {
    const date = parseISO(dateString)          // Convierte la fecha ISO a un objeto Date
    return (
      <time dateTime={dateString}>
        {/* Formatea la fecha usando el locale en español */}
        {format(date, 'LLLL d, yyyy', { locale: es })}
      </time>
    )
  }
  