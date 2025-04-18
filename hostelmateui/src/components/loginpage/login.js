import './login.css';
import { useRef } from 'react';
import {useState} from 'react';
import{Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Login() {

     let Husernameref=useRef();
     let Hpasswordref=useRef();
     const navigate = useNavigate();
    let [error,setError]=useState(false);
    let verificationstatus;
    async function validate(username,password){
       
            try{
              verificationstatus= await axios.post('http://localhost:8080/login',{
                userId:username,
                password:password
              })
              setError(false);
              const{token,HostelName}=verificationstatus.data;
              console.log("JWT--->",verificationstatus.data,token,HostelName)
            
              localStorage.setItem('token',token)

             navigate("/hostelmatehome",{ state: { HostelName,username } });
             

            } catch(error){
              setError(true);
              console.log("working")
           
          }
          
        
          
       
          
     }

  return (
    <>
      <div className="d-flex flex-column justify-content-center welcome-heading">
        <h1 className="text-center mt-4 text-danger">Welcome To HolsteMate</h1>
      </div>

      <div className="container vh-100 d-flex login-container">

        {/* hostler login div */}
        <div className="login bg-white shadow rounded p-4">
          <h4 className="mb-3 text-primary text-center">Hostler Login</h4>
          <div className="mb-3 w-100">
            <label className="form-label">User ID</label>
            <input ref={Husernameref} type="text" className="form-control" placeholder="Enter User ID" />
          </div>
          <div className="mb-3 w-100">
            <label className="form-label">Password</label>
            <input ref={Hpasswordref} type="password" className="form-control" placeholder="Enter Password" />
          </div>
          {error && <p className='text-danger mt-20'>Invalid Credentials</p>}
          <button className="btn btn-primary w-100" onClick={()=>{ validate(Husernameref.current.value,Hpasswordref.current.value)}}>Login</button>
          
        </div>
            {/* owner login */}
        <div className="login bg-white shadow rounded p-4">
          <h4 className="mb-3 text-primary text-center">Owner Login</h4>
          <div className="mb-3 w-100">
            <label className="form-label">User ID</label>
            <input ref={Husernameref} type="text" className="form-control" placeholder="Enter User ID" />
          </div>
          <div className="mb-3 w-100">
            <label className="form-label">Password</label>
            <input ref={Hpasswordref} type="password" className="form-control" placeholder="Enter Password" />
          </div>
          {error && <p className='text-danger mt-20'>Invalid Credentials</p>}
          <button className="btn btn-primary w-100" onClick={()=>{ validate(Husernameref.current.value,Hpasswordref.current.value)}}>Login</button>
          <Link to='/create'>Create Account?</Link>        </div>
      </div>
    </>
  );
}

export default Login;
