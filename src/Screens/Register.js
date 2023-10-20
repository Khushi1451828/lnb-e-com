

import { Link } from "react-router-dom"




function Register(){

return(
    <div className="parent">

    <div className="login-div card">
      <h4>Regsiter Here</h4>
      <div className="form-group">
    <label for="name">Email address</label>
    <input type="text"  name="bane" className="form-control" id="name"  placeholder="Enter Your Name"/>
  </div>
    <div className="form-group">
    <label for="email">Email address</label>
    <input type="email"  name="email" className="form-control" id="email"  placeholder="Enter Your email"/>
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input style={{width : "100%"}} type="password" name="password" className="form-control" id="password" placeholder="Enter Your Password"/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>

 
  <h5>Already have an account ?</h5><Link to='/login' >Login Here </Link>
    </div>


    </div>
)



}

export default Register