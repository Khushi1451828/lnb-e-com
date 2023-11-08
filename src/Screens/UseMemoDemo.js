import { useMemo, useState } from "react";

function MemoDemo()
{
    const [count,setCount] = useState(0)
    const [todos,setTodos] = useState([]);
    
    const Heavycalculation = (num)=>{
        console.log("calculating....")
        for(let i=0;i<10000000000;i++)
        {
            num = num+1;
        }
        return num;
    }
    const calculation = useMemo (()=>Heavycalculation(count),[count])
    const incre=()=>{
        setCount(count+1)
    }
    const addTodos=()=>{
        setTodos([...todos,"new to do"])
    }
    return(
        <div>
            <div>
                <h1>my todos</h1>
                {todos.map((t,i)=>(
                    <h4>
                        {i},{t}
                    </h4>
                ))}
            </div>
            <button onClick={addTodos}>Add To Do</button>
            <hr/>
            <div>
                <h1>Count:{count}</h1>
               <button onClick={incre}>Increase</button>
               <h1>Heavy Calculation</h1>
               {
                calculation
               }
            </div>
        </div>
    )
}
export default MemoDemo;