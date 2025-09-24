import { useState } from 'react'

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0)
    const [currentGuess, setCurrentGuess] = useState('')
    const [guesses, setGuesses] = useState([...Array(6)])
    const [history, setHistory] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [usedKeys, setUsedKeys] = useState({})

    const formatGuess = () => {
        let solutionArray = [...solution]
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        })

        //Encontrar letras que les corresponda el verde
        formattedGuess.forEach((l, i) => {
            if(solutionArray[i] === l.key){
                formattedGuess[i].color = 'green'
                solutionArray[i] = null
            }
        })

        //Encontrar letras que el corresponda el amarillo
        formattedGuess.forEach((l, i) => {
            if(solutionArray.includes(l.key) && l.color !== 'green'){
                formattedGuess[i].color = 'yellow'
                solutionArray[solutionArray.indexOf(l.key)] = null

            }
        })

        return formattedGuess
    }

    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution){
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) =>{
            let newGuesses = [...prevGuesses]
            newGuesses[turn] = formattedGuess
            return newGuesses
        })
        setHistory((prevHistory) =>{
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) =>{
            return prevTurn + 1
        })
        setUsedKeys((prevUsedKeys)=> {
            let newKeys = {...prevUsedKeys}

            formattedGuess.forEach((l) =>{
                const currentColor = newKeys[l.key]

                if(l.color === 'green'){
                    newKeys[l.key] = 'green'
                    return
                }
                if(l.color === 'yellow' && currentColor !== 'green'){
                    newKeys[l.key] = 'yellow'
                    return
                }
                if(l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow'){
                    newKeys[l.key] = 'grey'
                    return
                }
            })

            return newKeys
        })
        setCurrentGuess('')
    }

    const handleKeyup = ({ key }) => {
        if(key ==='Enter'){
            //Solo agregar una palabra si hay menos de 5 turnos
            if(turn > 5){
                console.log('Has usado todos tus intentos');
                return
            }
            //No agregar palabras repetidas
            if(history.includes(currentGuess)){
                console.log('Ya has insertado esa palabra');
                return
            }
            //Verificar si la palabra es de 5 caracteres
            if(currentGuess.length !== 5){
                console.log('La palabra debe tener 5 caracteres');
                return
            }
            const formatted = formatGuess()
            addNewGuess(formatted)
            
        }

        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1)
            }) 
            return
        }

        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5){
                setCurrentGuess((prev) => {
                    return prev + key.toLowerCase();
                })
            }
        }
    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}

}

export default useWordle;