import React from 'react'
function Keypad (){
    function handleChange(event){
        console.log('Entering password...')
    }
    return (
        <div>
            <input 
            type="password"
            name="search"
            onChange={handleChange}
            placeholder="Enter search term..."></input>
        </div>
    )
}

export default Keypad;





