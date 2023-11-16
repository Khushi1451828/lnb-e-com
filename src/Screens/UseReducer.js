import {React,useReducer} from 'react'

//you can write the custom logic of the state using usereducer hook
const UseReducer = () => {
    const initialState={
        counter:0
    }
    function reducer(state,action)

    {
        let newState;
        switch(action.type){
            case "incre":
                newState={counter:state.counter+1}
            break;
            case "decre":
                newState={counter:state.counter-1}
            break;
            default:
                throw new Error();
        }
        return newState
    }
    const [state,dispatch]=useReducer(reducer,initialState);

    const action1={
        type:"incre"
    }
    const action2={
        type:"decre"
    }
  return (
    <div>
    <h1>Counter:{state.counter}</h1>
      <button onClick={()=>dispatch(action1)}>incre</button>
      <button onClick={()=>dispatch(action2)}>decre</button>
    </div>
  )
}

export default UseReducer
