import {useEffect, useState} from 'react'


function About(){

    const [count , setCount]= useState(0)
    const [flag , setFlag] =  useState(false)

useEffect(()=>{

    console.log("I am here")

    if(count == 5)
    {
        setFlag(true)
    }
    else{
        setFlag(false)
    }

    return ()=>{
        console.log("Bye")
    }


},[count])


const handleIncre= ()=>{
    setCount(count+1)
}



    return(
        <>
        <h1>Value of Count is : {count}</h1>
        {flag ? 
        <div style={{width : 100 ,  height:100 , backgroundColor:"green" ,  border : "1px solid black"}}></div>
        : null}
        <button  onClick={handleIncre}>Incre</button>
        </>
    )
    
    
    }
    
    export default About