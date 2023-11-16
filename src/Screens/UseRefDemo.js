import React, {  useEffect, useRef, useState } from 'react'


const UseRefDemo = () => {
    const [value,setValue]=useState("")
    const inputE1 = useRef();
useEffect(()=>{
    inputE1.current = value
},[value])
    const handleFocus = ()=>{
        if(!value)
        {

            inputE1.current.style.border='2px solid red';
        }
        else
        {

            inputE1.current.style.border='2px solid blue';
        }
        console.log(inputE1.current);
    }

    
  return (
    <div>
     <input placeholder='enter any value' ref={inputE1} value={value} onChange={(e)=>setValue(e.target.value)}/>
    <br/>
    <br/>
    <button onClick={handleFocus}>click me</button>
    <h1>current value : {value}</h1>
    <h1>previous value : {inputE1.current}</h1>
    
    </div>
  )
}

export default UseRefDemo
