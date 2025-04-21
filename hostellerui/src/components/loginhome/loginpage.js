import './loginpage.css';
import{useState} from 'react';
function LoginPage(){

  const[validateID,SetValidateid]=useState("");
  const[successvalid,setsuccesvalid]=useState(false);
  const[IsvaliId,setIsvalidId]=useState(false);

  function validateHostellerId(){
        setIsvalidId(true);
        setsuccesvalid(true);
  }
   return(
    
     <>
      <div className="d-flex flex-column justify-content-center welcome-heading">
        <h1 className="text-center mt-4 text-danger">Welcome To HostellerLogin</h1>
      </div>

      <div className="container vh-100 d-flex login-container">

        {/* hostler login div */}
        <div className="login bg-white shadow rounded p-4">
          <h4 className="mb-3 text-primary text-center">Create Account</h4>
          <div className="mb-3 w-100">
            <label className="form-label">validate User ID</label>
            <input type="text" className="form-control" value={validateID} onChange={(e)=>{SetValidateid(e.target.value)}} placeholder="Enter User ID" />
          </div>
          {IsvaliId ||<button className="btn btn-primary w-100" onClick={validateHostellerId} >Validate</button>}
          {successvalid &&<p className="text-success">Valid user ID. Create passwords.</p>          }
          { IsvaliId &&<>
            <div className="mb-3 w-100">
            <label className="form-label">enter password</label>
            <input type="password" className="form-control" placeholder="Enter User ID" />
          </div>
          <div className="mb-3 w-100">
            <label className="form-label">conform Password</label>
            <input  type="password" className="form-control" placeholder="Enter Password" />
          </div> 
          <button className="btn btn-primary w-100" >Create Account </button>
          </>}
          
          {/* {error && <p className='text-danger mt-20'>Invalid Credentials</p>} */}
          
        </div>
            {/* owner login */}
        <div className="login bg-white shadow rounded p-4">
          <h4 className="mb-3 text-primary text-center"> Login</h4>
          <div className="mb-3 w-100">
            <label className="form-label">User ID</label>
            <input  type="text" className="form-control" placeholder="Enter User ID" />
          </div>
          <div className="mb-3 w-100">
            <label className="form-label">Password</label>
            <input  type="password" className="form-control" placeholder="Enter Password" />
          </div>
          {/* {error && <p className='text-danger mt-20'>Invalid Credentials</p>} */}
          <button className="btn btn-primary w-100" >Login</button>
           </div>
      </div>
    </>
    
   )
}
export default LoginPage;