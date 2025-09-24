import React, { useEffect, useState } from 'react'

export default function Keypad( { usedKeys } ) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3000/letter')
        .then(res => res.json())
        .then(json => {
            setLetters(json.data)
        })
    }, [])

  return (
    <div className='keypad'>
        {letters && letters.map((l) => {
            const color = usedKeys[l.id]
            return (
                <div key={l.id} className={color}>{l.id}</div>
            )
        })}
    </div>
  )
}
