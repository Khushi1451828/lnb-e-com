import { createContext, useState } from "react"
import { useContext } from "react";

const CountContext=createContext();


const A = () =>{

    const [count,setCount]=useState(45);
    return(
        <>
        <CountContext.Provider value={count}>
            <h1>this is comp A</h1>
        </CountContext.Provider>
            <B count={count}/>
        </>
        
    )
}
const B = () =>{
    return(
        <>
            <h1>this is comp B</h1>
            <C />
        </>
        
    )
}
const C = () =>{
    const count = useContext(CountContext)
    return(
        <>
            <h1>this is comp C : {count} </h1>
        <D/>
        </>
        
    )
}
const D = () =>{
    return(
        <>
            <h1>this is comp D</h1>
            <E/>
        </>
        
    )
}
const E = () =>{
    const count = useContext(CountContext)
    return(
        <>
            <h1>this is comp E</h1>
        <h1>value of count is {count}</h1>
        </>
        
    )
}
export default A;
