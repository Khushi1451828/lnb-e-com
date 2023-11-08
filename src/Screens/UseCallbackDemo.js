import React, { useCallback } from "react";
import {useState} from 'react'


const UseCallbackDemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const incre = () => {
    setCount(count + 1);
  };
  // const addTodos = () => {
  //   setTodos([...todos, "new to do"]);
  // };
  const addTodos = useCallback(()=>setTodos([...todos,"new to do"]),[todos])
  return (
    <div>
      
      
      <div>
      <CompTodo todos={todos} addTodos={addTodos}/>
        <h1>Count:{count}</h1>
        <button onClick={incre}>Increase</button>
        
      </div>
    </div>
  );
};

export default UseCallbackDemo;
