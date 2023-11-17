
import AllRoutes from "./Routing/AllRoutes"
import AuthRoutes from "./Routing/AuthRoutes"
import { useState } from "react"
import { Provider } from "react-redux"
import store from "./Store/Store"

function App(){


 const [auth , setAuth] =  useState(false)
   


 function handleAuth(){
    setAuth(!auth)
 }
store.subscribe(()=>{
    localStorage.setItem('reduxStore',JSON.stringify(store.getState()))
})


    return(

        <>
        <Provider store={store}>

        {localStorage.getItem('auth') == 'undefined' ||  localStorage.getItem('auth') == null || localStorage.getItem('auth') == ""  ?   <AuthRoutes/>   :  <AllRoutes/> }

        </Provider>

        {/* <button onClick={handleAuth}    > {auth== true ? "Logout" : "Login"} </button> */}
       


        
        </>
        
    )



}


export default App