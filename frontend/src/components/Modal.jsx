import React from 'react'

export default function Modal( { isCorrect, turn, solution } ) {
  return (
    <div className='modal'>
        {isCorrect && (
            <div>
                <h1>Ganaste!</h1>
                <p className='solution'>{solution}</p>
                <p>Adivinaste la palabra en {turn} intentos!</p>
            </div>
        )}
        {!isCorrect && (
            <div>
                <h1>Que lastima! Perdiste.</h1>
                <p>La palabra a adivinar era: {solution}</p>
            </div>
        )}
    </div>
  )
}
