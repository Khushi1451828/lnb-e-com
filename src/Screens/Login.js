import { useState } from "react";
import '../Styles/Login.css';
import { Link } from "react-router-dom";

function Login()
{
    const [values,setValues]=useState({
        
        email:"",
        password:""
}

    );
    const handleSubmit=()=>{
        if(!values.email)
        {
            alert("please enter your email")
        }
        else if(!values.password)
        {
            alert("please enter your password");
        }
        else{
            localStorage.setItem('auth',values.email)
            window.location.reload();
        }
    }
    const handleInput=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
    
    return(
<>
        <div className="login-div">
        <h1>Login Here</h1>
        <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" onChange={handleInput} value={values.email} name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your email"/>
    
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input type="password" onChange={handleInput} value={values.password} name="password" className="form-control" id="password" placeholder="Enter Your Password"/>
  </div>
  
  <button type="submit" onClick={handleSubmit}  className="btn btn-primary">Submit</button>
  <h5>Don't have an account ?</h5><Link to="/register">Register Here</Link>
 </div>
</>
    )
}
export default Login;