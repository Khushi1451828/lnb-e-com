
import AllRoutes from "./Routing/AllRoutes";
import AuthRoutes from "./Routing/AuthRoutes";
import { useState } from "react";

function App()
{
  const [auth,setAuth]=useState(false);
  function handleAuth()
  {
    setAuth(!auth);
  }
    return(
        <>
        {auth == false ? <AuthRoutes/> : <AllRoutes/>}
          <AllRoutes/>   
        <button onClick={handleAuth}>{auth== true ? "Logout" :"Login"}</button>
        </>
        
    )
}
export default App;
