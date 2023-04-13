import { useEffect, useState } from 'react';
import { letters } from './helpers/letters';
import { HangImage } from './components/HangImage';
import { getRandomWord } from './helpers/getRandomWord';

import './App.css'

function App() {

  const [ word, setWord ] = useState( getRandomWord() );
  const [ hiddenWord, setHiddenWord ] = useState( '_ '.repeat( word.length ) );
  const [ attempts, setAttempts ] = useState( 0 );
  const [ lose, SetLose ] = useState( false );
  const [ won, SetWon ] = useState( false );

  // Determinar si la persona perdió
  useEffect( () => {
    if( attempts >= 9 ){
      SetLose( true );
    }
  }, [attempts]);

  // Determinar que la persona ganó
  useEffect( () => {
    const currentHiddenWord = hiddenWord.split(' ').join('');
    if( currentHiddenWord === word ){
      SetWon( true );
    }
  }, [hiddenWord]);

  const checkLetter = ( letter: string ) => {
    
    if( lose ) return;
    if( won ) return;

    if ( !word.includes( letter ) ){
      setAttempts( Math.min( attempts + 1, 9 ));
      return;
    }

    const hiddenWordArray = hiddenWord.split( ' ' );
    
    for( let i = 0; i < word.length; i++ ){
      if ( word[i] === letter ){
        hiddenWordArray[ i ] = letter;
      }
    }
    setHiddenWord( hiddenWordArray.join( ' ' ) );
  }

  const newGame = () => {

    setWord( getRandomWord() );
    setHiddenWord( '_ '.repeat( word.length ) );
    setAttempts( 0 );
    SetLose( false );
    SetWon( false );

  }

  return (
    <>
      {/* Imágenes */}
      <HangImage imageNumber = { attempts } />

      {/* Palabra oculta */}
      <h3>{ hiddenWord }</h3>
      
      {/* Contador de intentos */}
      <h3>Intentos: { attempts }</h3>

      {/* Mensaje si perdió */}
      { 
        ( lose )
          ? <h2>Perdio!!, la palabra es: { word }</h2>
          :''
      }
      {/* Mensaje si perdió */}
      { 
        ( won )
          ? <h2>Felicidades, usted ganó</h2>
          :''
      }
      
      {/* Botones de letras */}
      { letters.map( ( letter: string, i: number ) => <button onClick={ () => checkLetter( letter ) } key={ i }> {letter} </button> )}

      {/* Boton de nuevo juego */}
      <br></br>
      <button onClick={ newGame }>Juego nuevo</button>

    </>
  )
}

export default App