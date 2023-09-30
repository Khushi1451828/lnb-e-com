import { useState } from "react";


function Login()
{
    const [values,setValues]=useState({
        name:"",
        email:"",
        mobile:"",
        password:"",
        address:"",
        temp_file:"",
        files:""
    }

    );
    const handleInput=(e)=>
    {
        setValues({...values,[e.target.name]:e.target.value})
    }
    const handleSubmit=()=>{
        console.log(values) 
    }
    const handleFile=(e)=>{
console.log(e.target.files);
setValues({...values,['temp_file']:URL.createObjectURL(e.target.files[0]),["file"]:e.target.files[0]})
    }
    return(
<>
   <input placeholder="enter your name" name="name"  value={values.name} onChange={handleInput}/>
   <br></br>
   <input placeholder="enter your email" name="email"  value={values.email} onChange={handleInput}/>
   <br></br>
   <input placeholder="enter your mobile" name="mobile"  value={values.mobile} onChange={handleInput}/>
   <br></br>
   <input placeholder="enter your password" name="password"  value={values.password} onChange={handleInput}/>
   <br></br>
   <input placeholder="enter your address" name="address"  value={values.address} onChange={handleInput}/>
   <br></br>
   <input type="file" onChange={handleFile}/>
   <br></br>
   <img src={values.temp_file} width={200} height={200}/>
   <button onClick={handleSubmit}>submit</button>
</>
    )
}
export default Login;