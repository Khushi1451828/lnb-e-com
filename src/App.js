
import AllRoutes from "./Routing/AllRoutes";
import AuthRoutes from "./Routing/AuthRoutes";
import { useState } from "react";

function App()
{
  const [auth,setAuth]=useState(false);
    return(
        <>
        {auth == false ? <AuthRoutes/> : <AllRoutes/>}
          <AllRoutes/>   
        
        </>
        
    )
}
export default App;
