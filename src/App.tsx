import { letters } from './helpers/letters';
import './App.css'

function App() {
  
  return (
    <>
      {/* Imágenes */}
      <h3>Imagen del juego</h3>

      {/* Palabra oculta */}
      <h3>_ _ _ _ _ _ _ _ _ _</h3>
      
      {/* Contador dew intentos */}
      <h3>Intentos: 0</h3>
      
      {/* Botones de letras */}
      { letters.map( ( letter: string, i: number ) => <button key={ i }> {letter} </button> )}
    </>
  )
}

export default App