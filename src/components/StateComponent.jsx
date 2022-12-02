import React, {useState} from "react";

const StateComponent = () => {
    const [userInput, setUserInput] = useState("")
    
    //each piece of useState has two variables. The first is one that I can reference

    const handleUpdateState = (event) => {setUserInput(event.target.value)}
    
    return (
        <div classname='card'>
            <h2>useState</h2>
            <h3>State: {userInput}</h3>
            <input type="text" onChange={handleUpdateState}/>

        </div>
    )
}

export default StateComponent