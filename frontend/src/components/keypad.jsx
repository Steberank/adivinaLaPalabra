import React, { useEffect, useState } from 'react'
import './keypad.css'

export default function Keypad( { usedKeys, handleKeyup } ) {
    const [letters, setLetters] = useState(null)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const API_URL = import.meta.env.VITE_API_URL;
            
        fetch(`${API_URL}/letter`)
        .then(res => res.json())
        .then(json => {
            setLetters(json.data)
        })
        .catch(error => console.error('Error:', error));
    }, [])

    useEffect(() => {
        // Detectar tipo de dispositivo
        const detectDevice = () => {
            const userAgent = navigator.userAgent || navigator.vendor || window.opera;
            
            // Detectar dispositivos móviles
            const isAndroid = /android/i.test(userAgent);
            const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
            
            return isAndroid || isIOS;
        }
        
        setIsMobile(detectDevice())
    }, [])

   const handleClick = (key) => {
        handleKeyup({ key })
    }

    // Definir las filas del teclado
    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']
    const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']
    const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm']

    if (!letters) return null

    return (
        <div className='keypad'>
            {/* Primera fila: Q-W-E-R-T-Y-U-I-O-P */}
            <div className='keypad-row'>
                {row1.map((letter) => {
                    const color = usedKeys[letter]
                    return (
                        <div key={letter} className={color} onClick={() => handleClick(letter)}>{letter}</div>
                    )
                })}
            </div>

            {/* Segunda fila: A-S-D-F-G-H-J-K-L (+ BACKSPACE en móvil) */}
            <div className='keypad-row'>
                {row2.map((letter) => {
                    const color = usedKeys[letter]
                    return (
                        <div key={letter} className={color} onClick={() => handleClick(letter)}>{letter}</div>
                    )
                })}
                {isMobile && (
                    <div className='keypad-special keypad-backspace' onClick={() => handleClick('Backspace')}>⌫</div>
                )}
            </div>

            {/* Tercera fila: Z-X-C-V-B-N-M (+ ENTER en móvil) */}
            <div className='keypad-row'>
                {row3.map((letter) => {
                    const color = usedKeys[letter]
                    return (
                        <div key={letter} className={color} onClick={() => handleClick(letter)}>{letter}</div>
                    )
                })}
                {isMobile && (
                    <div className='keypad-special keypad-enter' onClick={() => handleClick('Enter')}>ENTER</div>
                )}
            </div>
        </div>
    )
}