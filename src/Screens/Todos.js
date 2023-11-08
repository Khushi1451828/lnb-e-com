import {memo} from 'react'

function CompTodo({todos,addTodos}){
    console.log("child comp")
    return(
        <>
            <div>
        <h1>my todos</h1>
        {todos.map((t, i) => (
          <h4>
            {i},{t}
          </h4>
        ))}
      </div>
      <button onClick={addTodos}>Add To Do</button>
       <hr/>
        </>
        
    )
}




export default memo(CompTodo);
