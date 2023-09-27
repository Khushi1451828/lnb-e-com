import {useState} from 'react'

function Home()
{
    //var count=0;
    // react method to initialize a variable that will be chnage after some actions
    //state is not a variable ,it is a variable mechanism which is directly connected or bind with the virtual DOM
    const [count,setCount]=useState(0);
    function incre()
    {
        setCount(count+1);
    }
    return(
        <>
            <h1>value of count is {count}</h1> 
       <button onClick={incre}>click me</button>
        </>
       
    )
}
export default Home;