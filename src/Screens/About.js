import {useEffect} from 'react'
import { useState } from 'react'


function About()
{
    const [count,setCount]=useState(0);
    const [flag,setFlag]=useState(false);
    useEffect(()=>{
        console.log("i am here")
    },[])
    const handleIncre=()=>{
        setCount(count+1);
    }
    return(
        <>
            <h1>Value of count is : {count}</h1>
            {
                flag ?

                <div style={{width:100,height:100, backgroundColor:"green",border:"1px solid black"}}></div>
                :null
            }
           
        <button onClick={handleIncre}>click me</button>
        </>
        
    )
}
export default About;