import Login from '../Screens/Login';
import Register from '../Screens/Register';
import {Routes,Route} from 'react-router-dom'




function AuthRoutes()
{
    return(
        <>
           
        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="*" elelment={<Login/>}/>
        </Routes> 

        </>
        
    )
    
}
export default AuthRoutes;