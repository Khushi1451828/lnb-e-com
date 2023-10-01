import {Link} from 'react-router-dom';


function Register()
{
    return(
        <div className="login-div">
        <h1>Register Here</h1>
        <div className="form-group">
    <label for="email">Email address</label>
    <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Your email"/>
    
  </div>
        <div className="form-group">
    <label for="name">Name</label>
    <input type="text" name="name" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Enter Your name"/>
    
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input type="password" name="password" className="form-control" id="password" placeholder="Enter Your Password"/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
  <h5>Already have an account ?</h5><Link to="/login">Login Here</Link>
 </div>
    )
}
export default Register;